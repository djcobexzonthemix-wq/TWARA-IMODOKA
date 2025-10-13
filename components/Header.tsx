import React from 'react';
import { Page } from '../App';

interface HeaderProps {
  navigateTo: (page: Page, props?: object) => void;
}

const NavLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button onClick={onClick} className="relative group text-gray-600 hover:text-blue-600 transition-colors duration-300">
        <span>{children}</span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </button>
);

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigateTo('home')} className="text-2xl font-bold text-blue-600">
          Rwanda Guide Pro
        </button>
        <div className="flex items-center space-x-8">
          <NavLink onClick={() => navigateTo('home')}>Home</NavLink>
          <NavLink onClick={() => navigateTo('services')}>Services</NavLink>
          <NavLink onClick={() => navigateTo('kigali')}>Explore Kigali</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;