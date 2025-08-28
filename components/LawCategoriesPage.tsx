import React from 'react';
import { LawCategory } from '../types';
import { LAW_CATEGORIES } from '../constants';
import Header from './Header';

interface LawCategoriesPageProps {
  onSelectCategory: (category: LawCategory) => void;
  onBack: () => void;
}

const LawCategoriesPage: React.FC<LawCategoriesPageProps> = ({ onSelectCategory, onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header title="Ibyiciro by'Amategeko" onBack={onBack} />
      <main className="flex-grow p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {LAW_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category)}
                className="bg-slate-800 p-5 rounded-lg shadow-md hover:shadow-teal-500/20 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 text-left flex items-center space-x-4"
              >
                <i className={`fas ${category.icon} text-3xl text-teal-400 w-12 text-center`}></i>
                <span className="text-lg font-semibold text-gray-200">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LawCategoriesPage;
