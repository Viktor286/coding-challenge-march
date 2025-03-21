export interface Package {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  destinations: string[];
  features: string[];
  image: string;
  tags: string[];
}

export const packages: Package[] = [
  {
    id: 'lunar-explorer',
    name: 'Lunar Explorer Package',
    description: 'Experience the wonder of the Moon with this comprehensive lunar exploration package. Visit multiple lunar destinations and enjoy exclusive activities.',
    duration: '14 days',
    price: 350000000,
    destinations: ['lunar-gateway', 'artemis-base', 'tranquility-domes'],
    features: [
      'Round-trip spacecraft transportation',
      'Lunar surface excursions',
      'Lunar rover driving experience',
      'Zero-gravity recreation activities',
      'Astronaut training session',
      'Gourmet space cuisine',
      'Professional photography package'
    ],
    image: '/packages/lunar-explorer.jpg',
    tags: ['Featured', 'Adventure', 'Luxury']
  },
  {
    id: 'orbital-leisure',
    name: 'Orbital Leisure Retreat',
    description: 'Relax and unwind in the zero-gravity environment of our premium orbital accommodations. Perfect for those seeking a unique vacation experience.',
    duration: '7 days',
    price: 120000000,
    destinations: ['iss', 'orbital-hotel'],
    features: [
      'Orbital transport',
      'Premium suite accommodation',
      'Zero-gravity spa treatments',
      'Earth observation sessions',
      'Space photography workshop',
      'Gourmet dining experience',
      'Virtual reality entertainment'
    ],
    image: '/packages/orbital-leisure.jpg',
    tags: ['Relaxation', 'Luxury']
  },
  {
    id: 'space-family-adventure',
    name: 'Space Family Adventure',
    description: 'A family-friendly package designed to introduce the wonders of space travel to all generations. Educational and fun activities for everyone.',
    duration: '5 days',
    price: 180000000,
    destinations: ['iss', 'lunar-gateway'],
    features: [
      'Family cabin accommodation',
      'Interactive science workshops',
      'Junior astronaut training',
      'Family space photography session',
      'Educational tours of facilities',
      'Zero-gravity games',
      'Family-friendly meals'
    ],
    image: '/packages/family-adventure.jpg',
    tags: ['Family', 'Educational']
  },
  {
    id: 'extreme-space',
    name: 'Extreme Space Adventure',
    description: 'For thrill-seekers who want to push the boundaries. Experience the most challenging and exhilarating activities space has to offer.',
    duration: '10 days',
    price: 250000000,
    destinations: ['artemis-base', 'lunar-gateway'],
    features: [
      'Advanced spacewalk training and experience',
      'Extended lunar surface expedition',
      'High-G spacecraft maneuvers',
      'Asteroid proximity flyby simulation',
      'Emergency procedure training',
      'Experimental spacecraft co-piloting',
      'Extreme environment survival training'
    ],
    image: '/packages/extreme-space.jpg',
    tags: ['Adventure', 'Extreme']
  },
  {
    id: 'cosmic-honeymoon',
    name: 'Cosmic Honeymoon Suite',
    description: 'Celebrate your special occasion with an unforgettable journey to the stars. Romantic experiences and luxury accommodations for couples.',
    duration: '8 days',
    price: 280000000,
    destinations: ['orbital-hotel', 'tranquility-domes'],
    features: [
      'Private luxury cabin',
      'Champagne Earth-rise viewing',
      'Couple&apos;s zero-gravity spa treatment',
      'Private dining experiences',
      'Stargazing from observation dome',
      'Professional photography session',
      'Commemorative keepsakes'
    ],
    image: '/packages/cosmic-honeymoon.jpg',
    tags: ['Couples', 'Luxury', 'Special Occasion']
  }
];