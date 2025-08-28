import React from 'react';
import { QuizResult } from '../types';

interface HomePageProps {
  onNavigateToLaws: () => void;
  onNavigateToQuiz: () => void;
  quizScores: QuizResult[];
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToLaws, onNavigateToQuiz, quizScores }) => {
  const averageScore = quizScores.length > 0
    ? (quizScores.reduce((acc, result) => acc + (result.score / result.total), 0) / quizScores.length) * 100
    : 0;

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <header className="bg-slate-800 text-white text-center p-6 shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider">TWARA IMODOKA APP</h1>
        <p className="mt-2 text-md text-slate-300">Iga amategeko y'umuhanda mu Rwanda</p>
      </header>

      <main className="flex-grow p-4 sm:p-6 md:p-8">
        <div className="max-w-md mx-auto">
          <div className="space-y-6">
            <button
              onClick={onNavigateToLaws}
              className="w-full bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-teal-500/20 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 text-left flex items-center space-x-4"
            >
              <i className="fas fa-gavel text-4xl text-teal-400 w-12 text-center"></i>
              <div>
                <h2 className="text-xl font-bold text-gray-100">Wige Amategeko y’Itwara ry’Imodoka</h2>
                <p className="text-slate-400 text-sm">Sobanukirwa amategeko agenga umuhanda.</p>
              </div>
            </button>
             <button
              onClick={onNavigateToQuiz}
              className="w-full bg-teal-500 text-white p-6 rounded-lg shadow-lg hover:bg-teal-600 transform hover:scale-105 transition-all duration-300 text-left flex items-center space-x-4"
            >
              <i className="fas fa-question-circle text-4xl w-12 text-center"></i>
              <div>
                <h2 className="text-xl font-bold">Kora Ikizamini</h2>
                <p className="opacity-90 text-sm">Isuzume ubumenyi bwawe.</p>
              </div>
            </button>
          </div>

          {quizScores.length > 0 && (
            <div className="mt-8 bg-slate-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-100 mb-4">Iterambere Ryawe</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Amanota yo hagati:</p>
                  <p className="text-3xl font-bold text-teal-400">{averageScore.toFixed(0)}%</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Ibipimo wakoze:</p>
                  <p className="text-3xl font-bold text-teal-400">{quizScores.length}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
