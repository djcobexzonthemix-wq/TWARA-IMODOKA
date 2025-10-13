// Fix: Populating the Kigali data file with content.
import { KigaliAttraction } from '../types';

export const kigaliAttractions: KigaliAttraction[] = [
  {
    id: 'k1',
    name: 'Kigali Convention Centre',
    category: 'Landmark & Museum',
    description: 'An iconic, dome-shaped auditorium that has become a landmark of modern Kigali. It hosts major events and is beautifully lit at night.',
    imageUrl: 'https://i.imgur.com/9fUZ0Mq.jpeg',
    officialLink: 'https://www.kcc.rw/',
  },
  {
    id: 'k5',
    name: 'Campaign Against Genocide Museum',
    category: 'Landmark & Museum',
    description: 'Located in the Parliament building, this museum details the heroic actions of the RPF in stopping the 1994 Genocide against the Tutsi.',
    imageUrl: 'https://i.imgur.com/dCpmB2z.png',
    officialLink: 'https://museum.gov.rw/index.php?id=68',
  },
  {
    id: 'k6',
    name: 'Kandt House Museum',
    category: 'Landmark & Museum',
    description: 'One of the oldest buildings in the city, this museum is dedicated to Rwanda\'s natural history, flora, and fauna.',
    imageUrl: 'https://i.imgur.com/Gw1aGVs.jpeg',
    officialLink: 'https://museum.gov.rw/index.php?id=3',
  },
  {
    id: 'k3',
    name: 'Inema Arts Center',
    category: 'Art & Culture',
    description: 'A dynamic art gallery founded by two brothers, showcasing the work of Rwandan artists. Features paintings, sculptures, and performances.',
    imageUrl: 'https://i.imgur.com/RHRLhKF.jpeg',
    officialLink: 'http://www.inemaartcenter.com/',
  },
  {
    id: 'k2',
    name: 'Kimironko Market',
    category: 'Local Experience',
    description: 'The city\'s largest and busiest market. A vibrant place to shop for everything from fresh produce and spices to local crafts and fabrics (kitenge).',
    imageUrl: 'https://i.imgur.com/GJcW5FD.jpeg',
  },
  {
    id: 'k4',
    name: 'Nyamirambo Women\'s Center',
    category: 'Local Experience',
    description: 'An NGO offering walking tours through the colorful Nyamirambo neighborhood, cooking classes, and artisan workshops. A great way to connect with the community.',
    imageUrl: 'https://i.imgur.com/xIeiv2T.jpeg',
    officialLink: 'https://www.nwc-umutima.org/',
  },
];