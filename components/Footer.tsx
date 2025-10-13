import React from 'react';

const Footer = () => (
  <footer className="bg-slate-800 text-white mt-auto">
    <div className="container mx-auto px-6 py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Loved Visitors Portal. All guidance is for informational purposes.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a 
          href="https://www.ariseaiagency.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline"
        >
          About Us
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
