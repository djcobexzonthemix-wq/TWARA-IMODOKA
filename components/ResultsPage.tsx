import React from 'react';
import { QuizResult } from '../types';
import Header from './Header';

interface ResultsPageProps {
  result: QuizResult;
  onRetry: () => void;
  onBack: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ result, onRetry, onBack }) => {
  const { score, total } = result;

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
       <Header title="Ibisubizo" onBack={onBack} />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-800 rounded-xl shadow-2xl p-6 sm:p-8 text-center">
            <h2 className="text-4xl font-extrabold text-gray-100">Amanota Yawe</h2>
            <p className="text-7xl font-bold text-teal-400 my-6">
              {score}<span className="text-4xl text-slate-400"> / {total}</span>
            </p>
            <div className="flex justify-center mt-8">
              <button onClick={onRetry} className="bg-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-600 transition-colors text-lg w-full max-w-xs">
                <i className="fas fa-redo mr-2"></i>
                Subiramo
              </button>
            </div>
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;