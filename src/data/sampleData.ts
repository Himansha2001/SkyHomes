import { Property, TeamMember, Testimonial, Milestone } from '../types';

export const properties: Property[] = [
  {
    id: 1,
    title: "Beautiful Land in Galle",
    type: "land",
    price: 6000000,
    location: "Galle",
    size: "12 perches",
    description: "Prime beachfront land with stunning ocean views, perfect for building your dream home or investment property. Located in the heart of Galle's tourist district.",
    features: ["Beachfront Access", "Clear Title", "Electricity Available", "Water Connection", "Road Access"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Modern 2BHK Apartment in Colombo",
    type: "apartment",
    price: 22000000,
    location: "Colombo 03",
    size: "1,200 sq ft",
    bedrooms: 2,
    bathrooms: 2,
    description: "Luxury apartment in the heart of Colombo with modern amenities, city views, and excellent connectivity. Perfect for professionals and small families.",
    features: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Balcony", "Air Conditioning"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
    ],
    featured: true
  },
  {
    id: 3,
    title: "Spacious 3BHK House in Kandy",
    type: "house",
    price: 18000000,
    location: "Kandy",
    size: "2,500 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    description: "Traditional Sri Lankan house with modern renovations, surrounded by lush greenery and mountain views. Ideal for families seeking tranquility.",
    features: ["Garden", "Garage", "Traditional Architecture", "Mountain Views", "Quiet Neighborhood"],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
    ],
    featured: true
  },
  {
    id: 4,
    title: "Commercial Plot in Negombo",
    type: "commercial",
    price: 30000000,
    location: "Negombo",
    size: "20 perches",
    description: "Prime commercial land near the airport and tourist areas. Perfect for hotels, restaurants, or retail businesses. High foot traffic area.",
    features: ["Commercial Zone", "High Visibility", "Near Airport", "Tourist Area", "Development Ready"],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
    ],
    featured: false
  },
  {
    id: 5,
    title: "Luxury Villa in Mount Lavinia",
    type: "house",
    price: 45000000,
    location: "Mount Lavinia",
    size: "4,000 sq ft",
    bedrooms: 4,
    bathrooms: 4,
    description: "Stunning beachfront villa with private beach access, infinity pool, and panoramic ocean views. The epitome of luxury living.",
    features: ["Beach Access", "Swimming Pool", "Ocean Views", "Private Garden", "Staff Quarters", "Garage"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800"
    ],
    featured: false
  },
  {
    id: 6,
    title: "Investment Land in Matara",
    type: "land",
    price: 4500000,
    location: "Matara",
    size: "8 perches",
    description: "Growing area with excellent investment potential. Close to new highway development and upcoming commercial projects.",
    features: ["Investment Potential", "Highway Access", "Growing Area", "Clear Title", "Utilities Available"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
    ],
    featured: false
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rajesh Fernando",
    position: "CEO & Founder",
    bio: "With over 20 years in real estate, Rajesh founded SkyHomes with a vision to make property ownership accessible to all Sri Lankans.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
  },
  {
    id: 2,
    name: "Priya Wijesinghe",
    position: "Sales Director",
    bio: "Priya leads our sales team with expertise in luxury properties and commercial real estate across Colombo and the Western Province.",
    image: "https://images.unsplash.com/photo-1494790108755-2616c669d5c1?w=400"
  },
  {
    id: 3,
    name: "Damian Silva",
    position: "Property Manager",
    bio: "Damian oversees property development and maintenance, ensuring all SkyHomes properties meet the highest standards of quality.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    id: 4,
    name: "Kumari Perera",
    position: "Legal Advisor",
    bio: "Kumari handles all legal aspects of property transactions, ensuring smooth and secure deals for our clients.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Rajapaksa",
    location: "Colombo",
    message: "SkyHomes found us the perfect home! Their team was professional, patient, and helped us through every step of the process.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Johnson",
    location: "Galle",
    message: "As an expat, I was worried about buying property in Sri Lanka. SkyHomes made it seamless and stress-free. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Saman Gunasekara",
    location: "Kandy",
    message: "Sold my land through SkyHomes and got the best price in the market. Their market knowledge is excellent.",
    rating: 5
  }
];

export const milestones: Milestone[] = [
  {
    year: "2005",
    title: "SkyHomes Founded",
    description: "Started with a vision to democratize real estate in Sri Lanka"
  },
  {
    year: "2008",
    title: "First Major Project",
    description: "Completed our first residential complex in Colombo"
  },
  {
    year: "2012",
    title: "Island-wide Expansion",
    description: "Expanded operations to cover all major cities in Sri Lanka"
  },
  {
    year: "2015",
    title: "1000th Property Sold",
    description: "Reached the milestone of 1000 successful property transactions"
  },
  {
    year: "2018",
    title: "Digital Innovation",
    description: "Launched online platform for virtual property tours"
  },
  {
    year: "2022",
    title: "Sustainability Initiative",
    description: "Committed to green building practices and sustainable development"
  },
  {
    year: "2025",
    title: "Leading Market Position",
    description: "Recognized as Sri Lanka's most trusted real estate brand"
  }
]; 