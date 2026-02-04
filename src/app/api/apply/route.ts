import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { escapeHtml, validateEmail, validatePhone, validateLength, sanitizeFilename, isPDF } from '@/utils/security';

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || 'tommy@knocktwice.ca';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const experience = formData.get('experience') as string;
    const resumeFile = formData.get('resume') as File | null;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !position || !experience) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (!validateLength(firstName, 50) || !validateLength(lastName, 50)) {
      return NextResponse.json(
        { error: 'Name fields must be between 1 and 50 characters' },
        { status: 400 }
      );
    }

    if (!validateLength(position, 100)) {
      return NextResponse.json(
        { error: 'Position must be between 1 and 100 characters' },
        { status: 400 }
      );
    }

    if (!validateLength(experience, 5000)) {
      return NextResponse.json(
        { error: 'Experience must be between 1 and 5000 characters' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!validatePhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Prepare attachments if resume is provided
    const attachments = [];
    if (resumeFile && resumeFile.size > 0) {
      // Validate file size (max 5MB)
      if (resumeFile.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'Resume file size must be less than 5MB' },
          { status: 400 }
        );
      }

      const buffer = await resumeFile.arrayBuffer();

      // Validate that it's actually a PDF by checking magic bytes
      if (!isPDF(buffer)) {
        return NextResponse.json(
          { error: 'Invalid file format. Only PDF files are allowed.' },
          { status: 400 }
        );
      }

      const base64 = Buffer.from(buffer).toString('base64');
      const safeFilename = sanitizeFilename(resumeFile.name);

      attachments.push({
        filename: safeFilename,
        content: base64,
      });
    }

    // Escape all user input to prevent XSS
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safePosition = escapeHtml(position);
    const safeExperience = escapeHtml(experience);

    // Send email using Resend
    const emailOptions: any = {
      from: 'Burger Heaven Careers <onboarding@resend.dev>',
      to: [RECIPIENT_EMAIL],
      subject: `${safePosition} - ${safeFirstName} ${safeLastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">
            New Job Application - Burger Heaven
          </h2>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Applicant Information</h3>
            <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Position Applied For:</strong> ${safePosition}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Experience & Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${safeExperience}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
            <p style="margin: 0; font-size: 14px; color: #92400e;">
              <strong>Note:</strong> Please respond to the applicant at ${safeEmail}${resumeFile ? ' | Resume attached' : ''}
            </p>
          </div>
        </div>
      `,
    };

    // Add attachments if resume is provided
    if (attachments.length > 0) {
      emailOptions.attachments = attachments;
    }

    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      console.error('Application - Email send error');
      return NextResponse.json(
        { error: 'Failed to send application. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Application submitted successfully!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
