import Image from 'next/image';
import { MenuItem as MenuItemType } from '@/types/menu';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="diner-card rounded-2xl overflow-hidden group">
      {item.image && (
        <div className="relative h-48 w-full bg-wood-300 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent-900/20 to-transparent"></div>
          {item.featured && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
              FEATURED
            </div>
          )}
        </div>
      )}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-heading text-accent-900 leading-tight flex-1 group-hover:text-primary-700 transition-colors">{item.name}</h3>
          <span className="ml-2 px-3 py-1.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-bold rounded-full whitespace-nowrap shadow-md">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-accent-800 leading-relaxed">{item.description}</p>
        {item.available === false && (
          <p className="text-xs text-red-700 mt-3 font-semibold bg-red-100 px-2 py-1 rounded-full inline-block">
            Currently Unavailable
          </p>
        )}
      </div>
    </div>
  );
}
