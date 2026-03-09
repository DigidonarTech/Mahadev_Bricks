// src/components/Hero.tsx
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onScrollTo: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
 
const images = [
  { img: "https://res.cloudinary.com/ddc7x60nm/image/upload/v1773034252/factory_ohigse.jpg" },
  { img: "https://res.cloudinary.com/ddc7x60nm/image/upload/v1773034255/img2_q2mlhp.jpg" },
  { img: "https://res.cloudinary.com/ddc7x60nm/image/upload/v1773034255/img3_dwq35v.jpg" }
];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {images.map((images, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${images.img})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50" />
        </div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md px-6 py-3 rounded-full mb-8 shadow-md">
          <span className="text-orange-600 font-bold text-xl">MB</span>
          <span className="text-stone-700 font-medium">Barabanki • Since 1993</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-stone-800 tracking-tight leading-none mb-6 drop-shadow-lg">
          MAHADEV BRICK FIELD
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
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-stone-600 text-sm tracking-wider">
        <span>नीचे स्क्रॉल करें</span>
        <div className="w-px h-12 bg-stone-400 mt-3 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;