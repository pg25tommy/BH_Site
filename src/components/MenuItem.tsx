import Image from 'next/image';
import { MenuItem as MenuItemType } from '@/types/menu';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const isSoldOut = item.soldOut === true;

  return (
    <div className={`diner-card rounded-2xl overflow-hidden group relative ${isSoldOut ? 'opacity-75' : ''}`}>
      {/* Sold Out Diagonal Banner */}
      {isSoldOut && (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <div
            className="absolute bg-red-600 text-white font-bold text-sm py-2 text-center shadow-lg"
            style={{
              width: '200px',
              top: '30px',
              right: '-50px',
              transform: 'rotate(45deg)',
              transformOrigin: 'center',
            }}
          >
            SOLD OUT
          </div>
        </div>
      )}

      {item.image && (
        <div className="relative h-48 w-full bg-wood-300 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className={`object-cover transition-transform duration-500 ${isSoldOut ? 'grayscale' : 'group-hover:scale-110'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent-900/20 to-transparent"></div>
          {!isSoldOut && item.bestSeller && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-accent-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
              BEST SELLER
            </div>
          )}
          {!isSoldOut && item.featured && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
              FEATURED
            </div>
          )}
        </div>
      )}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className={`text-lg font-heading leading-tight flex-1 transition-colors ${isSoldOut ? 'text-gray-500' : 'text-accent-900 group-hover:text-primary-700'}`}>
            {item.name}
          </h3>
          <span className={`ml-2 px-3 py-1.5 text-sm font-bold rounded-full whitespace-nowrap shadow-md ${isSoldOut ? 'bg-gray-400 text-gray-100' : 'bg-gradient-to-r from-primary-600 to-primary-500 text-white'}`}>
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className={`text-sm leading-relaxed ${isSoldOut ? 'text-gray-500' : 'text-accent-800'}`}>
          {item.description}
        </p>
        {item.available === false && !isSoldOut && (
          <p className="text-xs text-red-700 mt-3 font-semibold bg-red-100 px-2 py-1 rounded-full inline-block">
            Currently Unavailable
          </p>
        )}
      </div>
    </div>
  );
}
