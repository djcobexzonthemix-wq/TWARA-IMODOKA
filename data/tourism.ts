// Fix: Correcting the import path for the types file.
import { Attraction } from '../types';

export const attractions: Attraction[] = [
  {
    id: '1',
    name: 'Volcanoes National Park',
    description: 'Home to the endangered mountain gorillas and a world-class destination for gorilla trekking. Experience a once-in-a-lifetime encounter in the Virunga mountains. The park also offers golden monkey tracking and volcano hikes.',
    imageUrl: 'https://i.imgur.com/1WS6OEq.jpeg',
    location: 'Musanze, Northern Province',
    officialLink: 'https://www.visitrwanda.com/parks/volcanoes-national-park/',
    visitorTips: [
      'Book your gorilla permits well in advance (6+ months recommended) as they sell out quickly.',
      'Wear sturdy, waterproof hiking boots and bring rain gear, as the weather is unpredictable.',
      'Hiring a porter is recommended; it supports the local community and makes the trek easier.'
    ],
  },
  {
    id: '2',
    name: 'Akagera National Park',
    description: 'A classic African safari experience. Akagera is Central Africa\'s largest protected wetland and home to the Big Five: lions, leopards, rhinos, elephants, and buffalos. Enjoy game drives, boat safaris, and bird watching.',
    imageUrl: 'https://i.imgur.com/PHE9Eoj.jpeg',
    location: 'Kayonza, Eastern Province',
    officialLink: 'https://www.africanparks.org/the-parks/akagera',
    visitorTips: [
      'A 4x4 vehicle is essential for navigating the park roads.',
      'The boat trip on Lake Ihema is a highlight for seeing hippos, crocodiles, and water birds.',
      'Consider staying overnight in the park for the full safari experience.'
    ],
  },
  {
    id: '3',
    name: 'Nyungwe Forest National Park',
    description: 'One of the oldest rainforests in Africa, famous for its incredible biodiversity, chimpanzee tracking, and the spectacular Canopy Walkway suspended 70 meters above the forest floor, offering breathtaking views.',
    imageUrl: 'https://i.imgur.com/n87tnzf.jpeg',
    location: 'Gisakura, Western Province',
    officialLink: 'https://www.visitrwanda.com/parks/nyungwe-national-park/',
    visitorTips: [
      'Chimpanzee tracking requires an early start, so stay close to the park entrance the night before.',
      'The Canopy Walk is a must-do, but may not be suitable for those with a fear of heights.',
      'The weather is often wet and cool; pack layers and waterproof clothing.'
    ],
  },
  {
    id: '4',
    name: 'Lake Kivu',
    description: 'One of Africa\'s Great Lakes, offering stunning scenery, beautiful beaches, and watersport activities like kayaking and boating. Relax by the shore or explore the lush islands dotting the lake between the towns of Rubavu and Rusizi.',
    imageUrl: 'https://i.imgur.com/e2c7g5E.jpeg',
    location: 'Western Province (bordering DRC)',
    officialLink: 'https://www.visitrwanda.com/destinations/lake-kivu/',
    visitorTips: [
      'Kayaking tours are a fantastic way to experience the tranquility of the lake and visit coffee islands.',
      'Swimming is safe as the lake is crocodile and hippo-free.',
      'Enjoy fresh grilled fish at one of the many lakeside restaurants.'
    ],

  },
  {
    id: '5',
    name: 'Kigali Genocide Memorial',
    description: 'A place of remembrance and learning, honoring the victims of the 1994 Genocide against the Tutsi. It is a powerful and essential experience for all visitors to understand Rwanda\'s history and journey of reconciliation.',
    imageUrl: 'https://i.imgur.com/9gFKxfv.png',
    location: 'Kigali, Gasabo District',
    officialLink: 'https://www.kgm.rw/',
    visitorTips: [
      'Allow at least two hours for your visit. The audio guide is highly recommended.',
      'Dress respectfully. This is a place of quiet contemplation.',
      'Photography is not permitted inside the main exhibition halls.'
    ],
  },
  {
    id: '6',
    name: 'King\'s Palace Museum',
    description: 'Located in Nyanza, this museum offers a fascinating glimpse into Rwandan royal history and traditions. The site features a traditionally thatched royal residence and the sacred long-horned Inyambo cattle.',
    imageUrl: 'https://i.imgur.com/3VKsEVo.jpeg',
    location: 'Nyanza, Southern Province',
    officialLink: 'https://museum.gov.rw/index.php?id=2&L=0%25252525252527%25252525252522',
    visitorTips: [
      'The highlight is the Inyambo cattle enclosure, where traditional singers lull the majestic cows into a trance.',
      'Combine your visit with the nearby National Art Gallery in Nyanza.',
      'It\'s a 2-3 hour drive from Kigali, making for a great day trip.'
    ],
  },
];