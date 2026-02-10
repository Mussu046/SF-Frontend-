
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Solar', 'Fencing', 'Gardening', 'Landscaping'];

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-forest py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Visual Portfolio</h1>
          <p className="text-xl text-white/70">Showcasing our impact across energy and environment.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 -mt-10">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-semibold transition-all shadow-md ${
                filter === cat 
                ? 'bg-solar text-dark scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 cursor-pointer">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-solar text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
