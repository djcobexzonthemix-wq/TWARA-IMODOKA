// Fix: Populating the types file with necessary interfaces.
export interface Service {
  id: string;
  name: string;
  description: string;
  details: string[];
  requiredDocuments?: string[];
  organization: string;
  officialLink: string;
  estimatedTime?: string;
  fees?: string;
  guidanceNotes?: string[];
  hospitals?: Hospital[];
  banks?: Bank[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: Service[];
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  location: string;
  officialLink?: string;
  visitorTips?: string[];
}

export interface KigaliAttraction {
  id:string;
  name: string;
  category: 'Landmark & Museum' | 'Art & Culture' | 'Local Experience';
  description: string;
  imageUrl: string;
  officialLink?: string;
}

export interface Hospital {
    name: string;
    type: 'Public' | 'Private';
    location: string;
    phone: string;
    website: string;
}

export interface Bank {
    name: string;
    website: string;
    swiftCode: string;
}