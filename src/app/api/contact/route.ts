import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { escapeHtml, validateEmail, validatePhone, validateLength } from '@/utils/security';

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || 'tommy@knocktwice.ca';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (!validateLength(name, 100)) {
      return NextResponse.json(
        { error: 'Name must be between 1 and 100 characters' },
        { status: 400 }
      );
    }

    if (!validateLength(subject, 200)) {
      return NextResponse.json(
        { error: 'Subject must be between 1 and 200 characters' },
        { status: 400 }
      );
    }

    if (!validateLength(message, 5000)) {
      return NextResponse.json(
        { error: 'Message must be between 1 and 5000 characters' },
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

    // Validate phone format if provided
    if (phone && !validatePhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Escape all user input to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : '';
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Burger Heaven Contact <onboarding@resend.dev>',
      to: [RECIPIENT_EMAIL],
      subject: `${safeSubject} - ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">
            New Contact Form Submission - Burger Heaven
          </h2>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Subject:</strong> ${safeSubject}</p>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
          </div>

          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
            <p style="margin: 0; font-size: 14px; color: #92400e;">
              <strong>Note:</strong> Please respond to ${safeName} at ${safeEmail}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Contact form - Email send error');
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
