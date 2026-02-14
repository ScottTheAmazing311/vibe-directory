import type { Category } from '@/lib/types';

interface CategoryFilterProps {
  activeCategory: Category | 'All';
  onCategoryChange: (category: Category | 'All') => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: (Category | 'All')[] = ['All', 'Home', 'Game', 'Health', 'Work', 'Creative', 'Utility', 'Entertainment'];

  return (
    <div className="border-b-4 border-retro-black bg-retro-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-1 w-12 bg-retro-black"></div>
          <h2 className="font-mono text-xs uppercase tracking-widest font-bold">Filter by Category</h2>
        </div>
        <div className="flex gap-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-5 py-2 text-sm font-mono font-bold uppercase tracking-wide border-2 border-retro-black transition-all duration-200 whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-retro-black text-retro-yellow shadow-retro-sm'
                  : 'bg-retro-white text-retro-black hover:bg-retro-gray-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-retro-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
