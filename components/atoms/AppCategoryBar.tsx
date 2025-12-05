import { FC } from 'react';
import Link from 'next/link';

interface Category {
  id: string;
  label: string;
  icon?: string;
}

const categories: Category[] = [
  { id: 'all', label: 'All' },
  { id: 'house-flat', label: 'House/Flat' },
  { id: 'pg', label: 'PG' },
  { id: 'room', label: 'Room' },
  { id: 'commercial', label: 'Commercial' },
];

const AppCategoryBar: FC = () => {
  return (
    <div className="sticky top-[86px] z-30 bg-white border-b border-gray-200">
      <div className="container">
        <div className="flex items-center gap-4 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => (
            <Link key={category.id} href={`/?category=${category.id}`}>
              <a className="flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-700 rounded-full border border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-colors whitespace-nowrap">
                {category.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppCategoryBar;

