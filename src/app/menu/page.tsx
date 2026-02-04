import { Metadata } from 'next';
import MenuCategory from '@/components/MenuCategory';
import FeaturedItems from '@/components/FeaturedItems';
import menuData from '@/data/menuData.json';
import { MenuData, Topping } from '@/types/menu';
import { getDailyFeaturedItems } from '@/utils/featuredItems';

const menu = menuData as MenuData;

export const metadata: Metadata = {
  title: 'Menu | Burger Heaven - Authentic Canadian Burgers | Local New Westminster BC',
  description: 'Browse our extensive menu of authentic Canadian burgers made with locally-sourced ingredients. Signature burgers, specialty items, sandwiches, and appetizers. Serving New Westminster since 1985. Support local!',
  keywords: 'Canadian burger menu, local burger restaurant menu, New Westminster food menu, authentic Canadian burgers, locally sourced burgers, BC burger menu, Canadian beef burgers, local ingredients menu, New West burger menu',
};

export default function MenuPage() {
  const featuredItems = getDailyFeaturedItems(menu, 4);

  return (
    <div className="bg-wood-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-6xl font-heading text-center mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            OUR MENU
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto font-light">
            Authentic Canadian burgers made with locally-sourced ingredients. From classic favorites to adventurous creations - supporting local since 1985
          </p>
        </div>
      </section>

      {/* Daily Featured Items */}
      <FeaturedItems items={featuredItems} showDate={false} showViewMenuButton={false} />

      {/* Quick Navigation */}
      <div className="sticky top-20 glass-card z-40" style={{ boxShadow: '0 4px 20px rgba(61, 45, 28, 0.1)' }}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-3 scrollbar-hide">
            {menu.categories
              .filter(cat => !['milkshakes', 'fancy-beverages', 'non-alcoholic', 'beer-ciders', 'wine', 'heavenly-coffees', 'boozy-shakes'].includes(cat.id))
              .map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="whitespace-nowrap px-5 py-2.5 rounded-full bg-wood-200/50 hover:bg-primary-500 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-sm"
                >
                  {category.name}
                </a>
              ))}
            <a
              href="#milkshakes"
              className="whitespace-nowrap px-5 py-2.5 rounded-full bg-wood-200/50 hover:bg-primary-500 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-sm"
            >
              Drinks
            </a>
            <a
              href="#toppings"
              className="whitespace-nowrap px-5 py-2.5 rounded-full bg-wood-200/50 hover:bg-primary-500 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-sm"
            >
              Toppings
            </a>
          </div>
        </nav>
      </div>

      {/* Menu Categories */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {menu.categories.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}

        {/* Toppings Section */}
        <section id="toppings" className="mb-16 scroll-mt-24">
          <div className="mb-10">
            <h2 className="text-4xl font-heading text-primary-700 mb-3">
              Build Your Own - Toppings
            </h2>
            <p className="text-accent-700 font-light">
              Customize your burger with our premium toppings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menu.toppings.map((topping: Topping, index) => (
              <div
                key={topping.id}
                className="diner-card rounded-xl p-4 flex justify-between items-center group"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <span className="text-accent-900 font-medium group-hover:text-primary-700 transition-colors">{topping.name}</span>
                <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-bold rounded-full shadow-sm">
                  +${topping.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Note */}
        <div className="glass-card border-l-4 border-primary-500 p-6 rounded-xl">
          <p className="text-sm text-accent-800">
            <strong className="text-primary-700">Note:</strong> Prices do not include applicable taxes. Menu items
            and prices are subject to change. Some items may not be available at all
            locations. Please ask your server about daily specials and seasonal offerings.
          </p>
        </div>
      </div>
    </div>
  );
}
