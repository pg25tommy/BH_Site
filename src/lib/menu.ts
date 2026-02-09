import { MenuData } from '@/types/menu';

const MENU_API_URL = process.env.NEXT_PUBLIC_MENU_API_URL || 'https://bh-email.vercel.app/api/menu';

export async function getMenuData(): Promise<MenuData> {
  try {
    const response = await fetch(MENU_API_URL, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch menu: ${response.status}`);
    }

    const data = await response.json();

    return {
      categories: data.categories || [],
      toppings: data.toppings || [],
    };
  } catch (error) {
    console.error('Error fetching menu data:', error);
    // Fallback to static data if API fails
    const fallbackData = await import('@/data/menuData.json');
    return fallbackData.default as MenuData;
  }
}
