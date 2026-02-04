'use client';

import { MenuItem } from '@/types/menu';
import Link from 'next/link';

interface FeaturedItemsProps {
  items: MenuItem[];
  showDate?: boolean;
  showViewMenuButton?: boolean;
}

export default function FeaturedItems({ items, showDate = true, showViewMenuButton = true }: FeaturedItemsProps) {
  if (!items || items.length === 0) {
    return null;
  }

  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="bg-wood-100 section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-primary-700 mb-3">
            Today's Featured Items
          </h2>
          {showDate && (
            <p className="text-lg text-accent-700 mb-2 font-light">{dateString}</p>
          )}
          <p className="text-sm text-accent-600">
            Our featured items change daily - Come back tomorrow for new selections!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="diner-card rounded-2xl overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.image && (
                <div className="h-48 bg-wood-300 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-900/20 to-transparent"></div>
                  {item.bestSeller && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-accent-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      BEST SELLER
                    </div>
                  )}
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-heading text-accent-900 leading-tight flex-1 group-hover:text-primary-700 transition-colors">
                    {item.name}
                  </h3>
                  <span className="ml-2 px-3 py-1.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-bold rounded-full whitespace-nowrap shadow-md">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-accent-800 mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-700 border border-primary-500/20">
                    Featured Today
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showViewMenuButton && (
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="btn-primary inline-block rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">View Full Menu</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
