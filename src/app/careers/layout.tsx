import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers & Jobs',
  description: 'Join the Burger Heaven team in New Westminster, BC. Now hiring line cooks, servers, and kitchen staff. Apply online with resume upload. Flexible hours, great team environment.',
  keywords: 'burger heaven jobs, new westminster jobs, line cook jobs bc, server jobs new westminster, restaurant jobs, kitchen jobs, part time jobs new west, food service careers',
  openGraph: {
    title: 'Careers at Burger Heaven | Join Our Team',
    description: 'Now hiring for multiple positions. Apply online today with our easy application process.',
    type: 'website',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
