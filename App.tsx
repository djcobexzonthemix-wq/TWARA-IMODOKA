import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import TourismPage from './components/TourismPage';
import KigaliPage from './components/KigaliPage';
import FloatingHelpButton from './components/FloatingHelpButton';

// Fix: Defining the Page type for navigation.
export type Page = 'home' | 'services' | 'tourism' | 'kigali';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [pageProps, setPageProps] = useState<object>({});

  const navigateTo = (page: Page, props: object = {}) => {
    setCurrentPage(page);
    setPageProps(props);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'services':
        return <ServicesPage navigateTo={navigateTo} {...pageProps} />;
      case 'tourism':
        return <TourismPage navigateTo={navigateTo} />;
      case 'kigali':
        return <KigaliPage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <FloatingHelpButton />
    </div>
  );
}

export default App;
