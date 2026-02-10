
export enum ServiceCategory {
  SOLAR = 'Solar Energy',
  FENCING = 'Fencing',
  PLANTS = 'Plant Supply',
  GARDENING = 'Gardening',
  LANDSCAPING = 'Landscaping',
  DECOR = 'Decor'
}

export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  image: string;
  icon: string;
}

export interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  service: string;
  status: 'New' | 'In Progress' | 'Completed';
  date: string;
}
