
import React from 'react';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-forest py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Expert Solutions</h1>
          <p className="text-xl text-white/70">Bridging the gap between technology and the environment.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="space-y-32">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-forest/10 rounded-[2rem] blur-2xl group-hover:bg-forest/20 transition-all"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="relative rounded-[2rem] shadow-2xl w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-8 right-8 bg-solar p-6 rounded-2xl shadow-xl">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <span className="text-forest font-bold tracking-[0.2em] uppercase text-sm">{service.category}</span>
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-dark">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description} We offer specialized consultation, planning, and implementation for both large-scale industrial projects and private residential builds.
                </p>
                <div className="grid grid-cols-2 gap-4 py-4">
                  {['High Durability', 'Expert Team', 'Post-Care Support', 'Eco-Certified'].map(feat => (
                    <div key={feat} className="flex items-center text-sm font-semibold text-gray-500">
                      <span className="w-2 h-2 bg-solar rounded-full mr-3"></span>
                      {feat}
                    </div>
                  ))}
                </div>
                <button className="px-8 py-4 bg-forest text-white font-bold rounded-xl hover:shadow-xl transition-all">Get Detailed Brochure</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
