// src/components/Navbar.tsx
import React, { useState } from 'react';

interface NavbarProps {
  onScrollTo: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => onScrollTo('home')}
        >
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-md">
            MB
          </div>
          <div>
            <h1 className="text-2xl font-bold text-stone-800 tracking-tight">Mahadev Brick Field</h1>
            <p className="text-xs text-stone-500 tracking-wider">Since 1993 • Barabanki</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onScrollTo(link.id)}
              className="hover:text-orange-600 transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={() => onScrollTo('contact')}
            className="ml-4 px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-stone-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-5">
          <div className="flex flex-col gap-5 text-lg font-medium text-stone-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onScrollTo(link.id);
                  setIsMenuOpen(false);
                }}
                className="text-left hover:text-orange-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                onScrollTo('contact');
                setIsMenuOpen(false);
              }}
              className="mt-2 px-6 py-3 bg-orange-600 text-white rounded-xl text-center font-semibold hover:bg-orange-700 transition-all"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;