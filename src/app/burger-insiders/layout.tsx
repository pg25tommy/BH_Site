import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join the Burger Insiders | Exclusive Deals & Offers',
  description: 'Join the Burger Insiders club for exclusive deals, early access to new menu items, and special promotions. Get insider perks delivered straight to your inbox!',
  keywords: 'burger heaven newsletter, exclusive deals, burger promotions, email signup, vip offers, insider club, burger deals new westminster',
};

export default function BurgerInsidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
