// src/components/About.tsx
import React from "react";

interface AboutProps {
  bricksProduced?: string;
  projects?: string;
  factoryImage?: string;
}

const About: React.FC<AboutProps> = ({
  bricksProduced = "2 करोड़+",
  projects = "500+",
  factoryImage = "https://res.cloudinary.com/ddc7x60nm/image/upload/f_auto,q_auto,w_800/v1773034092/WhatsApp_Image_2026-03-09_at_10.25.16_AM_jeqqd7.jpg",
}) => {

  // Auto calculate years from 1993
  const years = new Date().getFullYear() - 1993;

  return (
    <section id="about" className="py-10 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 lg:gap-24 items-center">

        {/* Left Content */}
        <div className="space-y-7 order-2 md:order-1">

          <div>
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 font-semibold rounded-full text-sm tracking-wide uppercase">
              1993 से मजबूत नींव
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-stone-800 leading-snug">
              महादेव ब्रिक्स के बारे में
            </h2>
          </div>

          <p className="text-lg text-stone-600 leading-relaxed text-justify">
            महादेव ब्रिक्स की स्थापना सन् 1993 में <b>श्री जगदेव सिंह</b> 
            (निवासी – इसरौली सेठ, भानमऊ) द्वारा की गई थी। स्थापना के समय 
            से ही हमारा उद्देश्य उच्च गुणवत्ता वाली ईंटों का निर्माण करना 
            और ग्राहकों को भरोसेमंद निर्माण सामग्री उपलब्ध कराना रहा है।
          </p>

          <p className="text-lg text-stone-600 leading-relaxed text-justify">
            पिछले कई वर्षों से हम लगातार अपने ग्राहकों को मजबूत, टिकाऊ 
            और मानक गुणवत्ता वाली ईंटें प्रदान कर रहे हैं। आधुनिक तकनीक, 
            अनुभवी कारीगरों और सख्त गुणवत्ता जांच के साथ हम यह सुनिश्चित 
            करते हैं कि हर ईंट आपके निर्माण को मजबूत नींव दे।
          </p>

          <p className="text-lg text-stone-600 leading-relaxed text-justify">
            आज इस परंपरा और विश्वास को उनके बड़े बेटे 
            <b> श्री वीरेंद्र सिंह </b> तथा छोटे बेटे 
            <b> श्री शैलेन्द्र सिंह </b> द्वारा निरंतर आगे 
            बढ़ाया जा रहा है। उनके मार्गदर्शन में महादेव ब्रिक्स 
            लगातार प्रगति करते हुए ग्राहकों को बेहतर गुणवत्ता 
            और भरोसेमंद सेवा प्रदान कर रहा है।
          </p>

          <p className="text-lg text-stone-600 leading-relaxed text-justify">
            हमारी प्राथमिकता हमेशा <b>गुणवत्ता, विश्वास और ग्राहक संतुष्टि</b> 
            रही है, जिसके कारण आज महादेव ब्रिक्स क्षेत्र के भरोसेमंद 
            ईंट निर्माताओं में से एक है।
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
            loading="lazy"
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