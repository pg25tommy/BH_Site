import { WeeklyFeatured } from '@/types/menu';

const MENU_API_BASE = process.env.NEXT_PUBLIC_MENU_API_URL || 'https://bh-email.vercel.app/api/menu';
const FEATURED_API_URL = MENU_API_BASE.replace('/api/menu', '/api/featured');

const FALLBACK_FEATURED: WeeklyFeatured = {
  burger: {
    id: 'works-burger',
    name: '"The Works" Burger',
    description:
      'Cheddar, Mozzarella, Bacon & Mushrooms with Dill Pickles. A Heavenly Meal at a heck of a deal.',
    price: 25.89,
    image: '/images/menu/burgers/The_Works.webp',
  },
  sandwich: {
    id: 'heavenly-club',
    name: 'Toasted Heavenly Club',
    description:
      'Cheddar, ham, bacon, tomato, lettuce our special sauce. It\'s a bite of heaven!!',
    price: 21.09,
    image: '/images/menu/sandwiches/Heavenly_Club.webp',
  },
  weekOf: new Date().toISOString().split('T')[0],
};

export async function getWeeklyFeatured(): Promise<WeeklyFeatured> {
  try {
    const response = await fetch(FEATURED_API_URL, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch featured items: ${response.status}`);
    }

    const data = await response.json();

    // Validate that the response has the expected shape
    if (!data.burger?.name || !data.sandwich?.name) {
      throw new Error('Invalid featured data format');
    }

    return data;
  } catch (error) {
    console.error('Error fetching weekly featured items:', error);
    return FALLBACK_FEATURED;
  }
}
