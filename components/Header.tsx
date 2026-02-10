
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
              <span className="text-solar text-xl font-bold">SF</span>
            </div>
            <div>
              <span className="text-forest font-heading font-bold text-xl tracking-tighter leading-none block">SAFA</span>
              <span className="text-gray-500 text-xs font-semibold tracking-widest uppercase">FLORATECH</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm transition-colors ${
                  isActive(link.path) ? 'text-forest' : 'text-gray-600 hover:text-forest'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/admin" className="bg-forest text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-all shadow-sm">
              Admin Portal
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium ${isActive(link.path) ? 'text-forest' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/admin" onClick={() => setIsOpen(false)} className="bg-forest text-white px-4 py-2 rounded text-center font-semibold">
            Admin Portal
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
