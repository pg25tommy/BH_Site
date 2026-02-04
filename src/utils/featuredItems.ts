import { MenuItem, MenuData } from '@/types/menu';

/**
 * Generates a seed number based on the current date (YYYY-MM-DD)
 * This ensures the same items are featured throughout the day
 */
function getDailySeed(): number {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  // Combine into a number (e.g., 20260131 for Jan 31, 2026)
  return year * 10000 + month * 100 + day;
}

/**
 * Seeded random number generator
 * Uses a seed to produce consistent "random" results for the same day
 */
function seededRandom(seed: number): () => number {
  let currentSeed = seed;

  return function() {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
  };
}

/**
 * Shuffles an array using a seeded random number generator
 */
function seededShuffle<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  const random = seededRandom(seed);

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/**
 * Gets daily featured items from the menu
 * @param menuData - The complete menu data
 * @param count - Number of items to feature (default: 4)
 * @returns Array of featured menu items
 */
export function getDailyFeaturedItems(
  menuData: MenuData,
  count: number = 4
): MenuItem[] {
  // Collect all items from all categories (excluding kids menu, soups/salads, and all drinks)
  const excludedCategories = [
    'kids-seniors',
    'salads-soup',
    'milkshakes',
    'fancy-beverages',
    'non-alcoholic',
    'beer-ciders',
    'wine',
    'heavenly-coffees',
    'boozy-shakes'
  ];

  const allItems: MenuItem[] = menuData.categories
    .filter(category => !excludedCategories.includes(category.id))
    .flatMap(category => category.items);

  // Get today's seed
  const seed = getDailySeed();

  // Shuffle items based on today's seed
  const shuffled = seededShuffle(allItems, seed);

  // Return the first 'count' items
  return shuffled.slice(0, count);
}

/**
 * Gets featured items from specific categories
 * @param menuData - The complete menu data
 * @param categoryIds - Array of category IDs to select from
 * @param count - Number of items to feature
 */
export function getFeaturedItemsByCategory(
  menuData: MenuData,
  categoryIds: string[],
  count: number = 4
): MenuItem[] {
  const items: MenuItem[] = menuData.categories
    .filter(category => categoryIds.includes(category.id))
    .flatMap(category => category.items);

  const seed = getDailySeed();
  const shuffled = seededShuffle(items, seed);

  return shuffled.slice(0, count);
}

/**
 * Gets today's date string for display
 */
export function getTodayDateString(): string {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return today.toLocaleDateString('en-US', options);
}
