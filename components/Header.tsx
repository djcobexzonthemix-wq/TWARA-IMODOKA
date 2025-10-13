import React from 'react';
import { Page } from '../App';

interface HeaderProps {
  navigateTo: (page: Page, props?: object) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigateTo('home')} className="text-2xl font-bold text-blue-600">
          Loved Visitors
        </button>
        <div className="flex items-center space-x-6">
          <button onClick={() => navigateTo('home')} className="text-gray-600 hover:text-blue-600">Home</button>
          <button onClick={() => navigateTo('services')} className="text-gray-600 hover:text-blue-600">Services</button>
          <button onClick={() => navigateTo('kigali')} className="text-gray-600 hover:text-blue-600">Explore Kigali</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;