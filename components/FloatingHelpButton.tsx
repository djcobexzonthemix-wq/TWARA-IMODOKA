import React, { useState } from 'react';

const FloatingHelpButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHelpMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="bg-white p-4 rounded-lg shadow-xl mb-2 w-72 text-sm border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold text-base text-gray-800">Emergency & Help Guide</h4>
            <button onClick={toggleHelpMenu} className="text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          <p className="text-gray-700 mb-4">
            For immediate assistance or guidance, please use the contact details below. We are here to help you.
          </p>
          <div className="space-y-3">
            <p className="flex items-center">
              <i className="fas fa-envelope text-blue-600 mr-3 fa-fw"></i>
              <strong>Email:</strong> 
              <a href="mailto:karangwafranckflorien@gmail.com" className="text-blue-600 hover:underline ml-1 truncate">karangwafranckflorien@gmail.com</a>
            </p>
            <p className="flex items-center">
              <i className="fas fa-phone-alt text-blue-600 mr-3 fa-fw"></i>
              <strong>Call:</strong> 
              <a href="tel:0780586869" className="text-blue-600 hover:underline ml-1">0780586869</a>
            </p>
          </div>
        </div>
      )}

      <button 
        onClick={toggleHelpMenu}
        className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110"
        aria-label={isOpen ? "Close help menu" : "Open help menu"}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-phone-alt'} text-2xl`}></i>
      </button>
    </div>
  );
};

export default FloatingHelpButton;