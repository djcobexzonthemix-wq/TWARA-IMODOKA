import React from 'react';
import { LawCategory } from '../types';
import { LAWS } from '../data/laws';
import Header from './Header';

interface LawCategoryPageProps {
  category: LawCategory;
  onBack: () => void;
}

const LawCategoryPage: React.FC<LawCategoryPageProps> = ({ category, onBack }) => {
  const lawsInCategory = LAWS.filter((law) => law.categoryId === category.id);

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header title={category.name} onBack={onBack} />
      <main className="flex-grow p-4 sm:p-6">
        <div className="max-w-3xl mx-auto">
          {lawsInCategory.length > 0 ? (
            <div className="space-y-4">
              {lawsInCategory.map((law) => (
                <div key={law.id} className="bg-slate-800 rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-bold text-teal-400 mb-2">{law.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{law.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-400 mt-8 text-lg">Nta mategeko abonetse muri iki cyiciro.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default LawCategoryPage;
