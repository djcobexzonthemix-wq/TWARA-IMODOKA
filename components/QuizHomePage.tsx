import React from 'react';
import { QuizType } from '../types';
import Header from './Header';

interface QuizHomePageProps {
  onStartQuiz: (type: QuizType) => void;
  onBack: () => void;
}

const QuizHomePage: React.FC<QuizHomePageProps> = ({ onStartQuiz, onBack }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Hitamo Ikizamini" onBack={onBack} />
      <main className="flex-grow p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="space-y-6">
            <button
              onClick={() => onStartQuiz('signs')}
              className="w-full bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 text-center"
            >
              <i className="fas fa-traffic-light text-5xl text-blue-500 mb-4"></i>
              <h2 className="text-2xl font-bold text-gray-800">Ikizamini cy'Ibyapa</h2>
              <p className="text-gray-600 mt-1">Suzuma ubumenyi bwawe ku byapa.</p>
            </button>

            <button
              onClick={() => onStartQuiz('laws')}
              className="w-full bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 text-center"
            >
              <i className="fas fa-gavel text-5xl text-blue-500 mb-4"></i>
              <h2 className="text-2xl font-bold text-gray-800">Ikizamini cy'Amategeko</h2>
              <p className="text-gray-600 mt-1">Suzuma ubumenyi bwawe ku mategeko.</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizHomePage;
