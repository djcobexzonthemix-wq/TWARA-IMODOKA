import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import LawCategoriesPage from './components/LawCategoriesPage';
import LawCategoryPage from './components/LawCategoryPage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import { LawCategory, QuizResult, Page } from './types';

// Simplified Page type to remove sign-related pages
export type AppState = 'home' | 'lawCategories' | 'lawCategoryDetail' | 'quiz' | 'results';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppState>('home');
  const [selectedLawCategory, setSelectedLawCategory] = useState<LawCategory | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [quizScores, setQuizScores] = useState<QuizResult[]>([]);

  useEffect(() => {
    try {
      const storedScores = localStorage.getItem('quizScores');
      if (storedScores) {
        setQuizScores(JSON.parse(storedScores));
      }
    } catch (error) {
      console.error("Failed to parse quiz scores from localStorage", error);
    }
  }, []);
  
  const handleQuizComplete = (result: QuizResult) => {
    setQuizResult(result);
    const updatedScores = [...quizScores, result];
    setQuizScores(updatedScores);
    try {
      localStorage.setItem('quizScores', JSON.stringify(updatedScores));
    } catch (error) {
       console.error("Failed to save quiz scores to localStorage", error);
    }
    setCurrentPage('results');
  };

  const navigate = (page: AppState) => {
    setCurrentPage(page);
    // Reset selections when going back to main menus
    if (['home', 'lawCategories'].includes(page)) {
      setSelectedLawCategory(null);
      setQuizResult(null);
    }
  };
  
  const handleSelectLawCategory = (category: LawCategory) => {
    setSelectedLawCategory(category);
    navigate('lawCategoryDetail');
  };

  const handleStartQuiz = () => {
    setQuizResult(null);
    navigate('quiz');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'lawCategories':
        return <LawCategoriesPage onSelectCategory={handleSelectLawCategory} onBack={() => navigate('home')} />;
      case 'lawCategoryDetail':
        return selectedLawCategory ? <LawCategoryPage category={selectedLawCategory} onBack={() => navigate('lawCategories')} /> : null;
      case 'quiz':
        return <QuizPage onQuizComplete={handleQuizComplete} onBack={() => navigate('home')} />;
      case 'results':
        return quizResult ? <ResultsPage result={quizResult} onRetry={handleStartQuiz} onBack={() => navigate('lawCategories')} /> : null;
      case 'home':
      default:
        return (
          <HomePage
            onNavigateToLaws={() => navigate('lawCategories')}
            onNavigateToQuiz={handleStartQuiz}
            quizScores={quizScores}
          />
        );
    }
  };

  return <div className="min-h-screen font-sans">{renderPage()}</div>;
};

export default App;