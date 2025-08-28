import React from 'react';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <header className="bg-teal-600 text-white p-4 shadow-lg sticky top-0 z-10 flex items-center">
      {onBack && (
        <button onClick={onBack} className="text-white text-2xl mr-4 hover:bg-teal-700 p-2 rounded-full transition-colors">
          <i className="fas fa-arrow-left"></i>
        </button>
      )}
      <h1 className="text-xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;
