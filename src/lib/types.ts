
import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: any; // Lucide icon component
  image: string;
}

export interface SubService {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string; // HTML content for the detail page
  image: string;
  faqs?: { question: string; answer: string }[];
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string; // For cards
  heroImage: string;
  icon: any; // LucideIcon
  subServices: SubService[];
  faqs: { question: string; answer: string }[];
  benefits: { title: string; description: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
  project?: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  publishDate: string;
  author: {
    name: string;
    photo: string;
    role: string;
  };
  image: string;
}

export interface ServiceArea {
  id: string;
  city: string;
  state: string;
  zipCodes: string[];
  description: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}
