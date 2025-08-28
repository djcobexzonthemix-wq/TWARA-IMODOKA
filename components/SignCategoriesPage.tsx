import React from 'react';
import { Category } from '../types';
import { CATEGORIES } from '../constants';
import Header from './Header';

interface SignCategoriesPageProps {
  onSelectCategory: (category: Category) => void;
  onBack: () => void;
}

const SignCategoriesPage: React.FC<SignCategoriesPageProps> = ({ onSelectCategory, onBack }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Ibyiciro by'Ibyapa" onBack={onBack} />
      <main className="flex-grow p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category)}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 text-left flex items-center space-x-4"
              >
                <i className={`fas ${category.icon} text-3xl text-blue-500 w-12 text-center`}></i>
                <span className="text-xl font-semibold text-gray-800">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignCategoriesPage;
