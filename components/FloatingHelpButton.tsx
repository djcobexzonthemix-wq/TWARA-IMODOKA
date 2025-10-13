import React, { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'agent';
}

const LiveChatWidget = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Welcome to Rwanda Guide Pro support! How can I help you today?', sender: 'agent' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const agentResponse: Message = { text: 'Thank you for your message. An agent will be with you shortly.', sender: 'agent' };
      setMessages(prev => [...prev, agentResponse]);
    }, 1500);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-xl mb-2 w-80 text-sm flex flex-col h-96">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h4 className="font-bold">Live Chat</h4>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
      </div>
      <div ref={chatContainerRef} className="flex-grow overflow-y-auto text-gray-600 space-y-3 p-2">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <p className={`p-3 rounded-lg max-w-[85%] ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage} className="bg-blue-600 text-white rounded-md p-2.5 flex-shrink-0 hover:bg-blue-700 transition-colors" aria-label="Send message">
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

const FloatingHelpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleHelpMenu = () => {
    setIsOpen(!isOpen);
    if (isChatOpen) setIsChatOpen(false);
  }

  const openChat = () => {
    setIsChatOpen(true);
    setIsOpen(false);
  }
  
  const closeAll = () => {
      setIsOpen(false);
      setIsChatOpen(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isChatOpen && <LiveChatWidget onClose={() => setIsChatOpen(false)} />}
      
      {isOpen && (
        <div className="bg-white p-4 rounded-lg shadow-xl mb-2 w-64 text-sm">
          <h4 className="font-bold mb-2">Need live help?</h4>
          <p className="text-gray-700">We are here to help you navigate the process.</p>
          <div className="mt-3 space-y-2">
            <p><strong>Call:</strong> <a href="tel:0780586869" className="text-blue-600">0780586869</a></p>
            <p><strong>Email:</strong> <a href="mailto:karangwafranckflorien" className="text-blue-600">karangwafranckflorien</a></p>
          </div>
           <button onClick={openChat} className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
             Start Live Chat
           </button>
        </div>
      )}

      <button 
        onClick={isOpen || isChatOpen ? closeAll : toggleHelpMenu}
        className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110"
        aria-label="Toggle help menu"
      >
        <i className={`fas ${isOpen || isChatOpen ? 'fa-times' : 'fa-comment-dots'} text-2xl`}></i>
      </button>
    </div>
  );
};

export default FloatingHelpButton;