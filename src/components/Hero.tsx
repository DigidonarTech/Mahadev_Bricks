// src/components/Hero.tsx
import React from 'react';

interface HeroProps {
  onScrollTo: (section: string) => void;  // Navbar se same prop reuse kar rahe hain
  backgroundImage?: string;               // Optional custom bg image
}

const Hero: React.FC<HeroProps> = ({
  onScrollTo,
  backgroundImage = "https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&w=1600&q=80", // Default – bricks related
}) => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-100 via-orange-50 to-amber-50"
    >
      {/* Background Image with light overlay (kam dark) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/50" />  {/* Light overlay – no dark */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md px-6 py-3 rounded-full mb-8 shadow-md">
          <span className="text-orange-600 font-bold text-xl">MB</span>
          <span className="text-stone-700 font-medium">Varanasi • Since 2005</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-stone-800 tracking-tight leading-none mb-6 drop-shadow-lg">
          MAHADEV BRICKS
        </h1>

        <p className="text-xl md:text-3xl text-stone-700 font-medium mb-12 max-w-4xl mx-auto">
          मजबूत ईंटें • मजबूत निर्माण • गुणवत्ता जो पीढ़ियों तक टिके
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => onScrollTo('products')}
            className="px-10 py-5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-2xl shadow-xl transition-all duration-300 active:scale-95 hover:shadow-2xl"
          >
            प्रोडक्ट्स देखें
          </button>
          <button 
            onClick={() => onScrollTo('contact')}
            className="px-10 py-5 bg-white text-orange-700 border-2 border-orange-600 font-bold text-lg rounded-2xl hover:bg-orange-50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            कोटेशन लें
          </button>
        </div>
      </div>

      {/* Scroll indicator – light theme ke liye */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-stone-600 text-sm tracking-wider">
        <span>नीचे स्क्रॉल करें</span>
        <div className="w-px h-12 bg-stone-400 mt-3 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;