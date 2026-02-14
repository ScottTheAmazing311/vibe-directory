import type { Category } from '@/lib/types';

interface CategoryFilterProps {
  activeCategory: Category | 'All';
  onCategoryChange: (category: Category | 'All') => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: (Category | 'All')[] = ['All', 'Home', 'Game', 'Health', 'Work', 'Creative', 'Utility'];

  return (
    <div className="flex gap-3 justify-center items-center py-8 px-4 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            activeCategory === category
              ? 'bg-electric-blue/30 text-electric-blue border border-electric-blue/50'
              : 'bg-dark-lighter/50 text-white/60 border border-white/10 hover:border-white/30 hover:text-white/80'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
