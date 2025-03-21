export interface Accommodation {
  id: string;
  name: string;
  type: 'orbital' | 'lunar' | 'station';
  location: string;
  description: string;
  price: {
    standard: number;
    deluxe: number;
    premium: number;
  };
  amenities: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  features: string[];
}

export const accommodations: Accommodation[] = [
  {
    id: 'orbital-grand-hotel',
    name: 'Orbital Grand Hotel',
    type: 'orbital',
    location: 'Low Earth Orbit',
    description: 'The pinnacle of luxury in space, featuring panoramic Earth views, zero-gravity pools, and gourmet dining. The first true space hotel experience.',
    price: {
      standard: 25000000,
      deluxe: 45000000,
      premium: 75000000
    },
    amenities: [
      'Zero-gravity suite',
      'Earth observation lounge',
      'Gourmet restaurant',
      'Space bar with signature cocktails',
      'Holographic entertainment center',
      'Personal AI concierge',
      'Space walk experience',
      'Luxury spa treatments'
    ],
    images: [
      '/accommodations/orbital-grand-1.jpg',
      '/accommodations/orbital-grand-2.jpg',
      '/accommodations/orbital-grand-3.jpg'
    ],
    rating: 4.9,
    reviewCount: 142,
    features: [
      'Panoramic Earth views',
      'Daily spacewalk opportunity',
      'First-class dining',
      'Professional photography service',
      'Zero-gravity relaxation chambers'
    ]
  },
  {
    id: 'lunar-dome-suites',
    name: 'Lunar Dome Suites',
    type: 'lunar',
    location: 'Tranquility Base, Moon',
    description: 'Luxurious transparent dome accommodations on the lunar surface offering unparalleled views of Earth and the lunar landscape.',
    price: {
      standard: 38000000,
      deluxe: 62000000,
      premium: 95000000
    },
    amenities: [
      'Transparent dome ceiling',
      'Private lunar garden',
      'Earth-viewing lounge',
      'Gravity-adjustable sleeping quarters',
      'Multi-cuisine restaurant',
      'Lunar surface excursions',
      'Relaxation spa',
      'Fitness center with lunar gravity'
    ],
    images: [
      '/accommodations/lunar-dome-1.jpg',
      '/accommodations/lunar-dome-2.jpg',
      '/accommodations/lunar-dome-3.jpg'
    ],
    rating: 4.8,
    reviewCount: 86,
    features: [
      'Private lunar excursions',
      'Stargazing program',
      'Lunar rover exploration',
      'Earth-rise viewing parties',
      'Vacuum-sealed souvenirs'
    ]
  },
  {
    id: 'gateway-executive-pods',
    name: 'Gateway Executive Pods',
    type: 'station',
    location: 'Lunar Orbit Gateway Station',
    description: 'Exclusive executive accommodations in the Gateway Station, offering the perfect blend of luxury and functionality for the business traveler in space.',
    price: {
      standard: 30000000,
      deluxe: 48000000,
      premium: 70000000
    },
    amenities: [
      'Executive sleeping pod',
      'Private workspace with holographic displays',
      'Conference facilities',
      'Premium dining options',
      'High-speed space internet',
      'Personal wellness program',
      'Access to observation deck',
      'Lunar shuttle service'
    ],
    images: [
      '/accommodations/gateway-pods-1.jpg',
      '/accommodations/gateway-pods-2.jpg',
      '/accommodations/gateway-pods-3.jpg'
    ],
    rating: 4.7,
    reviewCount: 112,
    features: [
      'Executive facilities',
      'Direct Earth communications',
      'Business concierge service',
      'Premium connectivity package',
      'Priority docking for private vessels'
    ]
  },
  {
    id: 'artemis-base-quarters',
    name: 'Artemis Base Quarters',
    type: 'lunar',
    location: 'Artemis Base, South Pole, Moon',
    description: 'Comfortable and practical accommodations at the historic Artemis Base, ideal for those seeking an authentic lunar experience.',
    price: {
      standard: 22000000,
      deluxe: 35000000,
      premium: 55000000
    },
    amenities: [
      'Private sleep quarter',
      'Shared common area',
      'Science lab access',
      'Guided lunar excursions',
      'Authentic space food experience',
      'Historical tours',
      'Fitness facilities',
      'Communication center'
    ],
    images: [
      '/accommodations/artemis-quarters-1.jpg',
      '/accommodations/artemis-quarters-2.jpg',
      '/accommodations/artemis-quarters-3.jpg'
    ],
    rating: 4.5,
    reviewCount: 203,
    features: [
      'Authentic astronaut experience',
      'Scientific research participation',
      'Lunar ice mining observation',
      'Historical significance tours',
      'Real mission control communications'
    ]
  },
  {
    id: 'orbital-capsule-hostel',
    name: 'Orbital Capsule Hostel',
    type: 'orbital',
    location: 'Low Earth Orbit',
    description: 'Budget-friendly accommodations for the space traveler who wants the zero-gravity experience without the luxury price tag.',
    price: {
      standard: 12000000,
      deluxe: 18000000,
      premium: 28000000
    },
    amenities: [
      'Compact sleeping capsule',
      'Shared bathroom facilities',
      'Common dining area',
      'Basic Earth observation deck',
      'Shared entertainment system',
      'Basic space internet',
      'Guided spacewalk (premium only)',
      'Space food tasting'
    ],
    images: [
      '/accommodations/capsule-hostel-1.jpg',
      '/accommodations/capsule-hostel-2.jpg',
      '/accommodations/capsule-hostel-3.jpg'
    ],
    rating: 4.2,
    reviewCount: 356,
    features: [
      'Budget space experience',
      'Social shared spaces',
      'Basic Earth photography assistance',
      'Space movie nights',
      'Space basics training'
    ]
  }
];