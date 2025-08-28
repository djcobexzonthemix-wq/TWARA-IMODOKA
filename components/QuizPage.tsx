import React, { useState, useEffect, useCallback } from 'react';
import { QuizResult, Question, UserAnswer } from '../types';
import { LAWS } from '../data/laws';
import Header from './Header';

interface QuizPageProps {
  onQuizComplete: (result: QuizResult) => void;
  onBack: () => void;
}

const QUIZ_LENGTH = 20;

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QuizPage: React.FC<QuizPageProps> = ({ onQuizComplete, onBack }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>([]);

  const generateQuestions = useCallback(() => {
    const shuffledLaws = shuffleArray(LAWS);
    const selectedItems = shuffledLaws.slice(0, QUIZ_LENGTH);
    const newQuestions: Question[] = selectedItems.map((law) => {
      const correctAnswer = law.content;
      const wrongAnswers = shuffleArray(shuffledLaws.filter((l) => l.id !== law.id))
        .slice(0, 3)
        .map((l) => l.content);
      const options = shuffleArray([correctAnswer, ...wrongAnswers]);
      return {
        item: law,
        questionText: `"${law.title}" bisobanura iki?`,
        options,
        correctAnswer,
      };
    });

    setQuestions(newQuestions);
    setSelectedAnswers(new Array(QUIZ_LENGTH).fill(null));
    setCurrentQuestionIndex(0);
  }, []);

  useEffect(() => {
    generateQuestions();
  }, [generateQuestions]);

  const handleSelectAnswer = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };
  
  const handleSubmit = () => {
    let score = 0;
    const userAnswers: UserAnswer[] = questions.map((question, index) => {
      const selectedAnswer = selectedAnswers[index];
      const isCorrect = selectedAnswer === question.correctAnswer;
      if (isCorrect) score++;
      return { question, selectedAnswer: selectedAnswer || 'Nta gisubizo', isCorrect };
    });

    onQuizComplete({
      score,
      total: QUIZ_LENGTH,
      answers: userAnswers,
      date: new Date().toISOString(),
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_LENGTH - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-slate-300">Tegura ikizamini...</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / QUIZ_LENGTH) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
       <Header title="Kora Ikizamini" onBack={onBack} />
      <main className="flex-grow p-4 sm:p-6 flex flex-col items-center">
        <div className="w-full max-w-2xl bg-slate-800 rounded-lg shadow-xl p-5 sm:p-6 flex-grow flex flex-col">
            <div className="mb-4">
                <p className="text-sm text-center text-slate-400 font-semibold">Ikibazo {currentQuestionIndex + 1} / {QUIZ_LENGTH}</p>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <div className="text-center mb-5 flex-grow overflow-auto">
                <h2 className="text-lg sm:text-xl font-bold text-gray-100">{currentQuestion.questionText}</h2>
            </div>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(option)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 text-sm
                    ${selectedAnswers[currentQuestionIndex] === option 
                      ? 'bg-teal-500 border-teal-400 text-white font-bold' 
                      : 'bg-slate-700 hover:bg-slate-600 border-slate-600'}`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-6">
                {currentQuestionIndex === QUIZ_LENGTH - 1 ? (
                    <button 
                      onClick={handleSubmit} 
                      className="w-full bg-green-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors"
                    >
                        Ohereza Ibizamini
                    </button>
                ) : (
                    <button 
                      onClick={handleNext}
                      className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                    >
                      Komeza
                    </button>
                )}
            </div>
        </div>
      </main>
    </div>
  );
};

export default QuizPage;