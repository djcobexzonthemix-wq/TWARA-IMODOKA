
import React from 'react';
import { Category, Sign } from '../types';
import { SIGNS } from '../data/signs';
import Header from './Header';

interface CategoryPageProps {
  category: Category;
  onBack: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onBack }) => {
  const signsInCategory: Sign[] = SIGNS.filter((sign) => sign.category === category.id);

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={category.name} onBack={onBack} />
      <main className="flex-grow p-4 sm:p-6">
        <div className="max-w-5xl mx-auto">
          {signsInCategory.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {signsInCategory.map((sign) => (
                <div key={sign.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4 text-center transform hover:scale-105 transition-transform duration-300">
                  <img src={sign.image} alt={sign.description} className="w-40 h-40 object-contain mb-4"/>
                  <p className="font-semibold text-gray-700 flex-grow">{sign.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-8 text-xl">Nta byapa bibonetse muri iki cyiciro.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
