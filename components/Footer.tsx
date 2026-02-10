
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
                <span className="text-solar text-xl font-bold">SF</span>
              </div>
              <div>
                <span className="text-white font-heading font-bold text-xl tracking-tighter leading-none block">SAFA</span>
                <span className="text-solar text-xs font-semibold tracking-widest uppercase">FLORATECH</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sustainable energy & green infrastructure experts specializing in solar, fencing, and professional landscaping.
            </p>
            <div className="flex space-x-4">
               {['FB', 'IG', 'LI', 'WA'].map(social => (
                 <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-forest transition-colors flex items-center justify-center text-xs font-bold">
                   {social}
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-solar">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white">Solar Rooftop Systems</Link></li>
              <li><Link to="/services" className="hover:text-white">Industrial Fencing</Link></li>
              <li><Link to="/services" className="hover:text-white">Bulk Plant Supply</Link></li>
              <li><Link to="/services" className="hover:text-white">Landscape Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-solar">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-white">Our Solutions</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-solar">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with sustainable trends.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 text-sm w-full outline-none focus:border-solar"
              />
              <button className="bg-solar text-dark font-bold px-4 py-2 rounded-r-lg hover:bg-yellow-500 transition-colors">Go</button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 SAFA FLORATECH. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
