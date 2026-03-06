// src/components/About.tsx
import React from 'react';
import img1 from '../assets/factory.jpg';

interface AboutProps {
  years?: number;
  bricksProduced?: string;      
  projects?: string;            
  factoryImage?: string;        
}

const About: React.FC<AboutProps> = ({
  years = 19,
  bricksProduced = "2 करोड़+",
  projects = "500+",
  factoryImage = img1, // Default image
}) => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text + Stats */}
        <div className="space-y-8 order-2 md:order-1">
          <div>
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 font-medium rounded-full text-sm tracking-wide uppercase">
              2005 से मजबूत नींव
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
              महादेव ब्रिक्स के बारे में
            </h2>
          </div>

          <p className="text-lg text-stone-600 leading-relaxed">
            हम वाराणसी के सबसे भरोसेमंद ईंट निर्माताओं में से एक हैं। {years}+ वर्षों से हम उच्च गुणवत्ता वाली लाल मिट्टी की ईंटें, फ्लाई ऐश ब्रिक्स और निर्माण सामग्री प्रदान कर रहे हैं।
          </p>

          <p className="text-lg text-stone-600 leading-relaxed">
            हमारी हर ईंट IS 1077 और IS 12894 मानकों के अनुसार बनती है। आधुनिक मशीनरी, सख्त क्वालिटी चेक और अनुभवी टीम के साथ हम सुनिश्चित करते हैं कि आपकी इमारत की नींव कभी कमजोर न पड़े।
          </p>

          {/* Stats - Responsive grid */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-orange-600">{years}+</div>
              <p className="text-sm md:text-base text-stone-500 mt-2 font-medium">वर्षों का अनुभव</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-orange-600">{bricksProduced}</div>
              <p className="text-sm md:text-base text-stone-500 mt-2 font-medium">ईंटें उत्पादित</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-orange-600">{projects}</div>
              <p className="text-sm md:text-base text-stone-500 mt-2 font-medium">परियोजनाएं</p>
            </div>
          </div>
        </div>

        {/* Right: Image with overlay & hover effect */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2">
          <img
            src={factoryImage}
            alt="Mahadev Bricks Factory & Production"
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-white text-lg font-semibold drop-shadow-md">
            हमारी आधुनिक ईंट उत्पादन इकाई
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;