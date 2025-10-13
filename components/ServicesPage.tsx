import React, { useState, useEffect } from 'react';
import { Page } from '../App';
import { serviceCategories } from '../data/services';
import { Service, ServiceCategory, Hospital, Bank } from '../types';
import Breadcrumbs, { BreadcrumbItem } from './Breadcrumbs';

interface ServicesPageProps {
  navigateTo: (page: Page, props?: object) => void;
  searchTerm?: string;
}

const EssentialInfoDetail: React.FC<{ service: Service }> = ({ service }) => (
  <>
    {service.hospitals && (
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Major Hospitals & Clinics (Kigali)</h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          {service.hospitals.map((hospital, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800">{hospital.name}</h4>
              <p className="text-sm text-gray-500">{hospital.type} - {hospital.location}</p>
              <div className="mt-2 text-sm space-x-4">
                <span className="text-gray-600"><i className="fas fa-phone-alt mr-1 text-blue-500"></i>{hospital.phone}</span>
                <a href={hospital.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Website <i className="fas fa-external-link-alt text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
    {service.banks && (
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Major Commercial Banks</h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          {service.banks.map((bank, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800">{bank.name}</h4>
                 <div className="mt-2 text-sm space-x-4">
                    <span className="text-gray-600"><strong>SWIFT:</strong> {bank.swiftCode}</span>
                    <a href={bank.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Website <i className="fas fa-external-link-alt text-xs"></i>
                    </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </>
);


const ServiceDetail: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.name}</h2>
        <p className="text-gray-600 mb-6">{service.description}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Column for Details */}
            <div>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-2">Key Information</h3>
                    <div className="space-y-3 text-gray-600">
                        <p><strong><i className="fas fa-sitemap mr-2 text-blue-500"></i>Responsible Body:</strong> {service.organization}</p>
                        {service.estimatedTime && <p><strong><i className="fas fa-clock mr-2 text-blue-500"></i>Est. Time:</strong> {service.estimatedTime}</p>}
                        {service.fees && <p><strong><i className="fas fa-dollar-sign mr-2 text-blue-500"></i>Fees:</strong> {service.fees}</p>}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-2">Details</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {service.details.map((detail, index) => <li key={index}>{detail}</li>)}
                    </ul>
                </div>
            </div>

            {/* Right Column for Documents & Guidance */}
            <div className="space-y-6">
                {service.requiredDocuments && (
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-3 border-b pb-2">Required Documents</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {service.requiredDocuments.map((doc, index) => <li key={index}>{doc}</li>)}
                        </ul>
                    </div>
                )}

                {service.guidanceNotes && (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <h4 className="font-bold text-blue-800 mb-2"><i className="fas fa-info-circle mr-2"></i>Visitor Guidance</h4>
                        <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                          {service.guidanceNotes.map((note, index) => <li key={index}>{note}</li>)}
                        </ul>
                    </div>
                )}
            </div>
        </div>
        
        {(service.hospitals || service.banks) && <EssentialInfoDetail service={service} />}
        
        <div className="text-center mt-8 pt-6 border-t">
            <a 
                href={service.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 font-semibold transition-colors shadow-md"
            >
                Go to Official Website <i className="fas fa-external-link-alt ml-2"></i>
            </a>
        </div>
    </div>
);


const ServicesPage: React.FC<ServicesPageProps> = ({ navigateTo, searchTerm: initialSearchTerm = '' }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [filteredCategories, setFilteredCategories] = useState<ServiceCategory[]>(serviceCategories);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedService]);
  
  useEffect(() => {
    if (!searchTerm) {
        setFilteredCategories(serviceCategories);
        return;
    }

    const lowercasedFilter = searchTerm.toLowerCase();
    
    const filtered = serviceCategories
      .map(category => {
        const matchingServices = category.services.filter(service => 
            service.name.toLowerCase().includes(lowercasedFilter) ||
            service.description.toLowerCase().includes(lowercasedFilter)
        );

        if (matchingServices.length > 0) {
            return { ...category, services: matchingServices };
        }
        return null;
      })
      .filter((category): category is ServiceCategory => category !== null);

    setFilteredCategories(filtered);

  }, [searchTerm]);

  if (selectedService) {
    const breadcrumbTrail: BreadcrumbItem[] = [
      { label: 'Home', onClick: () => navigateTo('home') },
      { label: 'Services', onClick: () => setSelectedService(null) },
    ];
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-6">
              <Breadcrumbs trail={breadcrumbTrail} currentPageLabel={selectedService.name} />
            </div>
            <ServiceDetail service={selectedService} />
        </div>
    );
  }

  const breadcrumbTrail: BreadcrumbItem[] = [
    { label: 'Home', onClick: () => navigateTo('home') },
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.imgur.com/OhVhQN5.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-6 py-16 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Government Services</h1>
            <p className="mt-4 text-lg">Your comprehensive guide to official procedures and requirements.</p>
            <div className="mt-8 max-w-2xl mx-auto">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                        <i className="fas fa-search text-gray-300"></i>
                    </span>
                    <input 
                        type="search" 
                        placeholder="Search services (e.g., 'permit', 'healthcare')"
                        className="w-full bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 rounded-full py-3 pl-12 pr-4 border border-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Search services"
                    />
                </div>
            </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="mb-8">
          <Breadcrumbs trail={breadcrumbTrail} currentPageLabel="Services" />
        </div>
        
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div key={category.id} className="mb-12">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">{category.name}</h2>
                    <p className="text-gray-600 mt-2">{category.description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map(service => (
                        <div 
                            key={service.id} 
                            onClick={() => setSelectedService(service)}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-700">No services found</h2>
            <p className="text-gray-500 mt-2">Try adjusting your search term.</p>
          </div>
        )}

        <div className="text-center mt-12">
            <button onClick={() => navigateTo('tourism')} className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 font-semibold transition-colors">
                Explore Tourism &rarr;
            </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;