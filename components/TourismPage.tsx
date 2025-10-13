import React, { useState, useEffect } from 'react';
import { Page } from '../App';
import { attractions } from '../data/tourism';
import { Attraction } from '../types';
import Breadcrumbs, { BreadcrumbItem } from './Breadcrumbs';

interface TourismPageProps {
  navigateTo: (page: Page, props?: object) => void;
}

const AttractionDetail: React.FC<{ attraction: Attraction }> = ({ attraction }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg">
        <img src={attraction.imageUrl} alt={attraction.name} className="w-full h-80 object-cover rounded-lg mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{attraction.name}</h2>
        <p className="text-gray-500 font-semibold mb-4"><i className="fas fa-map-marker-alt mr-2"></i>{attraction.location}</p>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">{attraction.description}</p>

        {attraction.visitorTips && (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-8">
                <h4 className="font-bold text-green-800 mb-2"><i className="fas fa-lightbulb mr-2"></i>Visitor Tips</h4>
                <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                    {attraction.visitorTips.map((tip, index) => <li key={index}>{tip}</li>)}
                </ul>
            </div>
        )}

        {attraction.officialLink && (
            <div className="text-center mt-8 pt-6 border-t">
                <a
                    href={attraction.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transform font-semibold transition-all duration-300 shadow-md"
                >
                    Learn More & Book <i className="fas fa-external-link-alt ml-2"></i>
                </a>
            </div>
        )}
    </div>
);

const AttractionCard: React.FC<{ attraction: Attraction; onClick: () => void; }> = ({ attraction, onClick }) => (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer h-full flex flex-col border-2 border-transparent hover:border-green-500"
      onClick={onClick}
    >
        <img src={attraction.imageUrl} alt={attraction.name} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{attraction.name}</h3>
            <p className="text-gray-600 line-clamp-3 flex-grow">{attraction.description}</p>
        </div>
    </div>
);

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);


const TourismPage: React.FC<TourismPageProps> = ({ navigateTo }) => {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedAttraction]);

  if (selectedAttraction) {
    const breadcrumbTrail: BreadcrumbItem[] = [
      { label: 'Home', onClick: () => navigateTo('home') },
      { label: 'Tourism', onClick: () => setSelectedAttraction(null) },
    ];
    return (
        <div className="bg-slate-50">
            <div className="container mx-auto px-6 py-12">
                <div className="mb-8">
                    <Breadcrumbs 
                        trail={breadcrumbTrail}
                        currentPageLabel={selectedAttraction.name}
                    />
                </div>
                <AttractionDetail attraction={selectedAttraction} />
            </div>
        </div>
    );
  }

  const breadcrumbTrail: BreadcrumbItem[] = [
    { label: 'Home', onClick: () => navigateTo('home') }
  ];
  
  const nationalParks = attractions.filter(a => ['1', '2', '3'].includes(a.id));
  const cultureAndHistory = attractions.filter(a => ['5', '6'].includes(a.id));
  const lakeside = attractions.find(a => a.id === '4');


  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('https://i.imgur.com/ryWfP8O.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">Explore Our Nation</h1>
            <p className="mt-4 text-lg">From majestic mountains to sprawling savannas, adventure awaits.</p>
          </div>
        </div>
      </div>

      {/* Attractions Sections */}
      <div className="container mx-auto px-6 py-16">
        <div className="mb-12">
            <Breadcrumbs 
                trail={breadcrumbTrail}
                currentPageLabel="Tourism"
            />
        </div>
        
        {/* National Parks Section */}
        <section className="mb-20">
            <SectionHeader 
              title="National Parks & Wildlife" 
              subtitle="Discover Rwanda's breathtaking biodiversity, from gorilla treks in volcanic mountains to Big Five safaris on the savanna."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nationalParks.map(attraction => (
                <AttractionCard 
                  key={attraction.id} 
                  attraction={attraction}
                  onClick={() => setSelectedAttraction(attraction)}
                />
              ))}
            </div>
        </section>

        {/* Culture & History Section */}
        <section className="mb-20">
            <SectionHeader 
              title="Culture & History" 
              subtitle="Journey through the nation's past and present, from royal traditions to poignant memorials of resilience."
            />
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {cultureAndHistory.map(attraction => (
                <AttractionCard 
                  key={attraction.id} 
                  attraction={attraction}
                  onClick={() => setSelectedAttraction(attraction)}
                />
              ))}
            </div>
        </section>
        
        {/* Lakeside & City Life Section */}
        <section className="mb-16">
            <SectionHeader 
              title="Lakeside Life" 
              subtitle="Relax by the serene waters of Lake Kivu, one of Africa's Great Lakes."
            />
            <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
              {lakeside && (
                <AttractionCard 
                  key={lakeside.id} 
                  attraction={lakeside}
                  onClick={() => setSelectedAttraction(lakeside)}
                />
              )}
            </div>
        </section>

        <div className="text-center mt-20">
            <button onClick={() => navigateTo('services')} className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 font-semibold transition-all duration-300 shadow-md border hover:shadow-lg hover:scale-105 transform">
                &larr; View Government Services
            </button>
        </div>
      </div>
    </div>
  );
};

export default TourismPage;