# Burger Heaven

A modern, responsive website for Burger Heaven restaurant located in New Westminster, BC.

## About

Burger Heaven is a local burger restaurant serving New Westminster with premium burgers, signature creations, and the famous Mile High Challenge. This website showcases the menu, location information, gallery, and provides online ordering integration with Skip the Dishes.

## Features

### User Experience
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Wood-Panel Theme**: Custom retro diner aesthetic with warm wood tones and vibrant accents
- **Daily Featured Items**: Rotating featured menu items that change daily
- **Online Ordering**: Direct integration with Skip the Dishes for easy online ordering
- **Interactive Menu**: Browse the full menu with detailed descriptions and pricing
- **Gallery**: Photo gallery showcasing food and restaurant atmosphere
- **Mile High Challenge**: Dedicated page for the famous Mile High burger challenge
- **Location Information**: Complete address, hours, and contact details with embedded Google Maps

### Contact & Applications
- **Contact Form**: Secure contact form with email notifications
- **Job Applications**: Online career application system with PDF resume upload
- **Email Notifications**: Automated email delivery via Resend API with structured formatting

### Security Features
- **Input Validation**: Comprehensive validation for all form inputs (email, phone, text length)
- **XSS Protection**: HTML escaping on all user-generated content
- **File Upload Security**: Server-side PDF validation using magic bytes verification
- **Security Headers**: Enterprise-grade HTTP security headers including CSP, HSTS, X-Frame-Options
- **Path Traversal Protection**: Sanitized filenames to prevent directory traversal attacks
- **Environment Variables**: Secure configuration management for API keys and sensitive data

## Pages

- **Home** (`/`): Hero section, featured items, Mile High Challenge preview, and location info
- **Menu** (`/menu`): Full menu with categories including burgers, sides, drinks, and desserts
- **Gallery** (`/gallery`): Photo gallery of food and restaurant
- **Mile High Club** (`/mile-high-club`): Hall of fame for Mile High Challenge winners
- **Locations** (`/locations`): Detailed location information and hours
- **About** (`/about`): Restaurant history and story
- **Careers** (`/careers`): Employment opportunities
- **Contact** (`/contact`): Contact form and frequently asked questions

## Restaurant Information

**New Westminster Location**
- Address: 77 10th St, New Westminster, BC V3M 3X4
- Phone: 604.522.8339
- Hours:
  - Sunday - Thursday: 11:00 AM - 9:00 PM
  - Friday - Saturday: 11:00 AM - 10:00 PM

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Email Service**: Resend API for transactional emails
- **Maps**: Google Maps API integration
- **Security**: Custom validation and sanitization utilities
- **Deployment**: Vercel-ready

## Getting Started

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your_contact_email@example.com
```

- **RESEND_API_KEY**: API key from [Resend](https://resend.com) for sending emails
- **CONTACT_EMAIL**: Email address where contact form and job applications will be sent

### Installation

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
burger-heaven-site/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/
│   │   ├── api/          # API routes
│   │   │   ├── apply/    # Job application endpoint
│   │   │   └── contact/  # Contact form endpoint
│   │   ├── careers/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── locations/
│   │   ├── menu/
│   │   ├── mile-high-club/
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── FeaturedItems.tsx
│   │   ├── Footer.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── Header.tsx
│   │   ├── MenuCategory.tsx
│   │   └── MenuItem.tsx
│   ├── data/            # JSON data files
│   │   ├── galleryImages.json
│   │   ├── locations.json
│   │   └── menuData.json
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
│       └── security.ts  # Security validation & sanitization
└── public/              # Static assets
```

## Building for Production

Build the application:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Deployment

This Next.js application is optimized for deployment on Vercel. Connect your GitHub repository to Vercel for automatic deployments.

Alternatively, you can deploy to any platform that supports Next.js applications.

## License

All rights reserved - Burger Heaven
