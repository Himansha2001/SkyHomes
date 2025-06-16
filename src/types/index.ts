export interface Property {
  id: number;
  title: string;
  type: 'land' | 'house' | 'apartment' | 'commercial';
  price: number;
  location: string;
  size: string;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  features: string[];
  images: string[];
  featured: boolean;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  message: string;
  image?: string;
  rating: number;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SellLandForm {
  name: string;
  email: string;
  phone: string;
  location: string;
  size: string;
  message: string;
} 