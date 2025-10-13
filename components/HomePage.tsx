import React from 'react';
import { Page } from '../App';

interface HomePageProps {
  navigateTo: (page: Page, props?: object) => void;
}

const FeatureCard: React.FC<{ icon: string; title: string; description: string; onClick: () => void }> = ({ icon, title, description, onClick }) => (
    <div 
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer border-2 border-transparent hover:border-blue-500 group"
      onClick={onClick}
    >
        <div className="text-4xl text-blue-600 mb-4 inline-block p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300"><i className={`fas ${icon}`}></i></div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchTerm = formData.get('search') as string;
    navigateTo('services', { searchTerm });
  };

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-96" 
        style={{ backgroundImage: "url('https://i.imgur.com/pBGMBMi.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4 w-full max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold">Your Trusted Guide to Rwanda</h1>
            <p className="mt-4 text-lg md:text-xl">Step-by-step guidance for visitors and residents. We simplify official processes so you can explore our beautiful nation with ease.</p>
            <form className="mt-8 max-w-xl mx-auto" onSubmit={handleSearch}>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                <input 
                  type="search" 
                  name="search"
                  placeholder="Search for a service (e.g., 'visa', 'business')"
                  className="w-full bg-transparent text-white placeholder-gray-300 px-4 py-2 border-none focus:ring-0"
                  aria-label="Search for a service"
                />
                <button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How can we help you today?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <FeatureCard 
            icon="fa-briefcase" 
            title="Essential Services"
            description="Find step-by-step guidance on visas, work permits, business registration, and more."
            onClick={() => navigateTo('services')} 
          />
          <FeatureCard 
            icon="fa-map-signs"
            title="Discover Our Nation"
            description="Explore our rich culture, stunning landscapes, and world-famous tourist attractions."
            onClick={() => navigateTo('tourism')}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;