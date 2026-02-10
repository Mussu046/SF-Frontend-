
import React from 'react';
import { Service, ServiceCategory, GalleryItem, Lead } from './types';

export const SERVICES: Service[] = [
  {
    id: 'solar-1',
    title: 'Solar Rooftop Systems',
    category: ServiceCategory.SOLAR,
    description: 'High-efficiency residential and commercial rooftop solar solutions tailored for maximum energy harvest.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
    icon: '☀️'
  },
  {
    id: 'fence-1',
    title: 'Fixed Knot Fencing',
    category: ServiceCategory.FENCING,
    description: 'Durable, high-tensile fencing solutions for large agricultural and industrial perimeters.',
    image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=800',
    icon: '🔒'
  },
  {
    id: 'plants-1',
    title: 'Nursery & Bulk Supply',
    category: ServiceCategory.PLANTS,
    description: 'Wholesale supply of indoor, outdoor, and ornamental plants for large-scale landscaping projects.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
    icon: '🌿'
  },
  {
    id: 'land-1',
    title: 'Industrial Landscaping',
    category: ServiceCategory.LANDSCAPING,
    description: 'Transforming industrial areas into sustainable green spaces with expert hardscape and softscape design.',
    image: 'https://images.unsplash.com/photo-1558904541-efa8c1915918?auto=format&fit=crop&q=80&w=800',
    icon: '🏞️'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  category: i % 4 === 0 ? 'Solar' : i % 4 === 1 ? 'Fencing' : i % 4 === 2 ? 'Gardening' : 'Landscaping',
  image: `https://picsum.photos/seed/${i + 50}/800/600`
}));

export const MOCK_LEADS: Lead[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', service: 'Solar Rooftop', status: 'New', date: '2023-10-24' },
  { id: '2', name: 'Farm Owner', email: 'farm@agro.com', service: 'Fixed Knot Fencing', status: 'In Progress', date: '2023-10-22' },
  { id: '3', name: 'Green Plaza', email: 'admin@greenplaza.com', service: 'Commercial Landscaping', status: 'Completed', date: '2023-10-15' },
];
