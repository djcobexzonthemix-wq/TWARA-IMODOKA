import React from 'react';
import { Page } from '../App';
import { kigaliAttractions } from '../data/kigali';
import { KigaliAttraction } from '../types';
import Breadcrumbs, { BreadcrumbItem } from './Breadcrumbs';

interface KigaliPageProps {
  navigateTo: (page: Page, props?: object) => void;
}

const KigaliAttractionCard: React.FC<{ attraction: KigaliAttraction }> = ({ attraction }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border-2 border-transparent hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
        <img src={attraction.imageUrl} alt={attraction.name} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1">{attraction.category}</p>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{attraction.name}</h3>
            <p className="text-gray-600 flex-grow">{attraction.description}</p>
            {attraction.officialLink && (
              <div className="mt-4">
                <a 
                  href={attraction.officialLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline group inline-block"
                >
                  Learn More <i className="fas fa-arrow-right text-xs transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            )}
        </div>
    </div>
);

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);


const KigaliPage: React.FC<KigaliPageProps> = ({ navigateTo }) => {
  const breadcrumbTrail: BreadcrumbItem[] = [
    { label: 'Home', onClick: () => navigateTo('home') },
  ];
  
  const landmarks = kigaliAttractions.filter(a => a.category === 'Landmark & Museum');
  const arts = kigaliAttractions.filter(a => a.category === 'Art & Culture');
  const experiences = kigaliAttractions.filter(a => a.category === 'Local Experience');

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.imgur.com/jZItwGc.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-6 py-20 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Explore Kigali</h1>
            <p className="mt-4 text-lg">Discover the clean, safe, and vibrant capital of Rwanda.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
            <Breadcrumbs 
                trail={breadcrumbTrail}
                currentPageLabel="Explore Kigali"
            />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-16 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4"><i className="fas fa-info-circle text-blue-600 mr-2"></i>Visitor Guide to Kigali</h2>
          <p className="text-gray-600 mb-4">Welcome! Rwanda's capital is renowned for its safety, cleanliness, and innovation. Here are a few tips for your visit:</p>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
            <div>
              <h4 className="font-semibold text-lg mb-2">Getting Around</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Moto-taxis:</strong> Quick and popular for short trips. Always ask for a helmet.</li>
                <li><strong>Ride-Hailing:</strong> Apps like Yego and Move provide standardized pricing for motos and cars.</li>
                <li><strong>Public Buses:</strong> Use a rechargeable "Tap&Go" card to access the city's efficient bus network. Cards can be purchased from stations and agents.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Practical Info</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Currency:</strong> Rwandan Franc (RWF). Carry cash for local markets; cards are accepted at major hotels and restaurants.</li>
                <li><strong>Language:</strong> Kinyarwanda, English, French, and Swahili are official languages. English is widely spoken.</li>
                <li><strong>Umuganda:</strong> On the last Saturday of each month, the community gathers for public service from 8-11 AM. Most services are closed during this time. It's a unique cultural experience to witness.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Landmarks & Museums Section */}
        <section className="mb-20">
            <SectionHeader 
              title="Landmarks & Museums" 
              subtitle="Explore the sites that tell the story of Kigali's history and its forward-looking vision."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {landmarks.map(attraction => (
                <KigaliAttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
        </section>

        {/* Art & Culture Section */}
        <section className="mb-20">
            <SectionHeader 
              title="Art & Culture" 
              subtitle="Immerse yourself in the city's burgeoning creative scene, from contemporary galleries to local crafts."
            />
            <div className="grid md:grid-cols-1 gap-8 max-w-sm mx-auto">
              {arts.map(attraction => (
                <KigaliAttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
        </section>
        
        {/* Local Experiences Section */}
        <section className="mb-16">
            <SectionHeader 
              title="Local Experiences" 
              subtitle="Engage with the daily life and vibrant spirit of Kigali's communities."
            />
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {experiences.map(attraction => (
                <KigaliAttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
        </section>

      </div>
    </div>
  );
};

export default KigaliPage;