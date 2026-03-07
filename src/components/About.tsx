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
  factoryImage = img1,
}) => {
  return (
    <section id="about" className="py-10 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 lg:gap-24 items-center">

        {/* Left Content */}
        <div className="space-y-7 order-2 md:order-1">

          <div>
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 font-semibold rounded-full text-sm tracking-wide uppercase">
              2005 से मजबूत नींव
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-stone-800 leading-snug">
              महादेव ब्रिक्स के बारे में
            </h2>
          </div>

          <p className="text-lg text-stone-600 leading-relaxed text-justify">
            हम बराबंकी के सबसे भरोसेमंद ईंट निर्माताओं में से एक हैं।
            पिछले {years}+ वर्षों से हम उच्च गुणवत्ता वाली लाल मिट्टी की ईंटें,
            फ्लाई ऐश ब्रिक्स और अन्य निर्माण सामग्री प्रदान कर रहे हैं।
          </p>

          <p className="text-lg text-stone-600 leading-relaxed text-justify">
            हमारी हर ईंट IS 1077 और IS 12894 मानकों के अनुसार बनाई जाती है।
            आधुनिक मशीनरी, सख्त क्वालिटी चेक और अनुभवी टीम के साथ
            हम सुनिश्चित करते हैं कि आपकी इमारत की नींव मजबूत और टिकाऊ रहे।
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6">

            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold text-orange-600 group-hover:scale-110 transition">
                {years}+
              </div>
              <p className="text-sm md:text-base text-stone-500 mt-2 font-medium">
                वर्षों का अनुभव
              </p>
            </div>

            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold text-orange-600 group-hover:scale-110 transition">
                {bricksProduced}
              </div>
              <p className="text-sm md:text-base text-stone-500 mt-2 font-medium">
                ईंटें उत्पादित
              </p>
            </div>

            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold text-orange-600 group-hover:scale-110 transition">
                {projects}
              </div>
              <p className="text-sm md:text-base text-stone-500 mt-2 font-medium">
                परियोजनाएं
              </p>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2">
          <img
            src={factoryImage}
            alt="Mahadev Bricks Factory"
            className="w-full h-auto object-cover transform hover:scale-105 transition duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 text-white text-lg font-semibold tracking-wide">
            हमारी आधुनिक ईंट उत्पादन इकाई
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;