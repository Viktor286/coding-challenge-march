export interface Destination {
  id: string;
  name: string;
  type: "orbital" | "lunar" | "station";
  description: string;
  distance: string;
  travelTime: string;
  image: string;
  price: {
    economy: number;
    business: number;
    luxury: number;
  };
  amenities: string[];
  availableDates: string[];
}

export const destinations: Destination[] = [
  {
    id: "iss",
    name: "International Space Station",
    type: "orbital",
    description:
      "Experience life aboard the ISS, the most famous space laboratory orbiting Earth.",
    distance: "420 km",
    travelTime: "6 hours",
    image: "/destinations/iss.jpg",
    price: {
      economy: 28000000,
      business: 45000000,
      luxury: 75000000,
    },
    amenities: [
      "Zero gravity accommodation",
      "Earth observation deck",
      "Space walk experience",
      "Astronaut training",
      "Scientific experiments participation",
    ],
    availableDates: [
      "2025-06-15",
      "2025-07-20",
      "2025-08-10",
      "2025-09-05",
      "2025-10-15",
    ],
  },
  {
    id: "lunar-gateway",
    name: "Lunar Gateway",
    type: "station",
    description:
      "Visit the orbital outpost circling the Moon, providing stunning lunar views.",
    distance: "384,400 km",
    travelTime: "3 days",
    image: "/destinations/lunar-gateway.jpg",
    price: {
      economy: 55000000,
      business: 78000000,
      luxury: 120000000,
    },
    amenities: [
      "Lunar observation lounge",
      "Artificial gravity quarters",
      "Gourmet space cuisine",
      "Virtual reality entertainment",
      "Premium health monitoring",
    ],
    availableDates: [
      "2025-07-10",
      "2025-08-15",
      "2025-09-20",
      "2025-11-05",
      "2025-12-20",
    ],
  },
  {
    id: "artemis-base",
    name: "Artemis Lunar Base",
    type: "lunar",
    description:
      "Step onto the lunar surface and explore the first permanent human settlement on another world.",
    distance: "384,400 km",
    travelTime: "4 days",
    image: "/destinations/artemis-base.jpg",
    price: {
      economy: 95000000,
      business: 145000000,
      luxury: 220000000,
    },
    amenities: [
      "Lunar surface excursions",
      "Lunar rover rides",
      "Lunar sample collection",
      "Astronomical observatory access",
      "Low-gravity recreation facilities",
    ],
    availableDates: [
      "2025-08-05",
      "2025-09-15",
      "2025-10-25",
      "2025-11-30",
      "2026-01-15",
    ],
  },
  {
    id: "orbital-hotel",
    name: "Dubai Orbital Hotel",
    type: "orbital",
    description:
      "The world's first luxury space hotel offering stunning views of Earth and premium accommodations.",
    distance: "450 km",
    travelTime: "6 hours",
    image: "/destinations/orbital-hotel.jpg",
    price: {
      economy: 35000000,
      business: 65000000,
      luxury: 95000000,
    },
    amenities: [
      "Infinity pool with Earth view",
      "Zero-G spa treatments",
      "Michelin-star space restaurant",
      "Private observation pods",
      "Space cocktail lounge",
    ],
    availableDates: [
      "2025-06-25",
      "2025-07-15",
      "2025-08-20",
      "2025-09-10",
      "2025-10-05",
    ],
  },
  {
    id: "tranquility-domes",
    name: "Tranquility Domes",
    type: "lunar",
    description:
      "Experience luxury accommodation on the lunar surface with transparent domes offering unobstructed views of Earth and the lunar landscape.",
    distance: "384,400 km",
    travelTime: "3.5 days",
    image: "/destinations/tranquility-domes.jpg",
    price: {
      economy: 120000000,
      business: 180000000,
      luxury: 250000000,
    },
    amenities: [
      "Private lunar dome suites",
      "Lunar garden with Earth plants",
      "Low-gravity dance club",
      "Exclusive lunar fine dining",
      "Personal lunar excursion guide",
    ],
    availableDates: [
      "2025-09-01",
      "2025-10-15",
      "2025-11-20",
      "2025-12-10",
      "2026-02-05",
    ],
  },
];
