
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop" 
          alt="Sustainable Infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl text-white">
          <span className="inline-block px-4 py-1 bg-solar/90 text-dark text-xs font-bold tracking-widest uppercase rounded-full mb-4 animate-bounce">
            Green Infrastructure Pioneers
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
            Powering Nature. <br />
            <span className="text-solar">Protecting</span> Spaces.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg font-light leading-relaxed">
            SAFA FLORATECH integrates cutting-edge solar technology with sustainable landscaping and secure fencing solutions for a greener tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/services" 
              className="px-8 py-4 bg-forest hover:bg-green-700 text-white font-bold rounded-lg transition-all text-center flex items-center justify-center group"
            >
              Explore Services
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-lg border border-white/30 transition-all text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-pulse">
        <div className="flex flex-col items-center">
            <span className="text-white/50 text-xs font-semibold mb-2 tracking-widest uppercase">Scroll Down</span>
            <div className="w-[2px] h-10 bg-gradient-to-b from-solar to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
