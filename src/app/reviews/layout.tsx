import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials',
  description: 'Read what our customers say about Burger Heaven! See real Google reviews from locals who love our burgers, service, and Mile High Challenge. Rated 4.7+ stars with 247 reviews.',
  keywords: 'burger heaven reviews, new westminster restaurant reviews, burger heaven testimonials, google reviews, customer feedback, best burger reviews bc, restaurant ratings new west',
  openGraph: {
    title: 'Customer Reviews | Burger Heaven',
    description: 'See what our customers are saying! Real Google reviews from burger lovers in New Westminster. Rated 4.7/5 stars.',
    type: 'website',
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
