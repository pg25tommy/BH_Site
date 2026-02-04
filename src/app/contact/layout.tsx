import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Burger Heaven in New Westminster, BC. Call 604.522.8339 or use our online form. Located at 77 10th St. Hours: Sun-Thu 11AM-9PM, Fri-Sat 11AM-10PM. Catering inquiries welcome.',
  keywords: 'contact burger heaven, new westminster restaurant phone, burger heaven location, restaurant hours new west, catering inquiry, burger heaven email, 77 10th street new westminster',
  openGraph: {
    title: 'Contact Burger Heaven | Get in Touch',
    description: 'Questions? Catering? Feedback? Contact us at 604.522.8339 or through our online form.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
