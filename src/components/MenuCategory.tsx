import { MenuCategory as MenuCategoryType } from '@/types/menu';
import MenuItem from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

export default function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section id={category.id} className="mb-20 scroll-mt-24">
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-heading text-primary-700 mb-3">
          {category.name}
        </h2>
        {category.description && (
          <p className="text-accent-700 text-lg font-light">{category.description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item, index) => (
          <div
            key={item.id}
            style={{ animationDelay: `${index * 0.05}s` }}
            className="animate-fade-in-up"
          >
            <MenuItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
