# Email Functionality Setup

This document explains how to set up the email functionality for the Burger Heaven website's contact and careers forms.

## Overview

Both the **Contact Form** and **Careers Application Form** now send emails to `burgerheaven@shaw.ca` using [Resend](https://resend.com/), a modern email API service.

## Setup Instructions

### 1. Create a Resend Account

1. Go to [https://resend.com/](https://resend.com/)
2. Sign up for a free account
3. The free tier includes **3,000 emails per month** at no cost

### 2. Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** in the sidebar
3. Click **Create API Key**
4. Give it a name (e.g., "Burger Heaven Production")
5. Copy the API key (it starts with `re_`)

### 3. Add the API Key to Your Environment

1. In your project root (`burger-heaven-site/`), create a file named `.env.local`
2. Add the following line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Replace `re_your_actual_api_key_here` with your actual API key from Resend

### 4. Verify Domain (Optional but Recommended)

By default, emails will be sent from `onboarding@resend.dev`. To use your own domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `burgerheavennw.ca`)
4. Follow the DNS configuration instructions
5. Once verified, update the API routes to use your domain:
   - Edit `src/app/api/apply/route.ts` line 17
   - Edit `src/app/api/contact/route.ts` line 17
   - Change from: `from: 'Burger Heaven <onboarding@resend.dev>'`
   - Change to: `from: 'Burger Heaven <noreply@burgerheavennw.ca>'`

## Email Templates

### Careers Application Email
Sent to: `burgerheaven@shaw.ca`

Includes:
- Applicant's full name
- Email address
- Phone number
- Position applied for
- Experience/message

### Contact Form Email
Sent to: `burgerheaven@shaw.ca`

Includes:
- Contact name
- Email address
- Phone number (optional)
- Subject/topic
- Message

## Deployment

### For Vercel

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add a new variable:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key
4. Redeploy your application

### For Local Development

Make sure `.env.local` exists in your `burger-heaven-site/` directory with the `RESEND_API_KEY` set.

## Testing

1. Start your development server: `npm run dev`
2. Navigate to the Contact or Careers page
3. Fill out and submit a form
4. Check `burgerheaven@shaw.ca` for the email
5. You should also see the email in your Resend dashboard under **Logs**

## Troubleshooting

### Email not sending?
- Check that `RESEND_API_KEY` is set correctly in `.env.local` or Vercel environment variables
- Verify the API key is valid in your Resend dashboard
- Check the browser console and terminal for error messages
- Look at Resend's Logs section for delivery status

### Email goes to spam?
- Consider verifying your domain (see step 4 above)
- Using a verified domain significantly improves deliverability

### Rate limits?
- Free tier: 3,000 emails/month, 100 emails/day
- If you exceed this, upgrade your Resend plan

## Cost

- **Free tier**: 3,000 emails/month (should be plenty for a restaurant)
- **Pro tier**: $20/month for 50,000 emails/month (if needed)

## Security

- Never commit `.env.local` to git (it's already in `.gitignore`)
- Keep your API key secret
- Only share the API key through secure channels (Vercel environment variables, password managers, etc.)
