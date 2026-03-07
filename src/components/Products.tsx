// src/components/Products.tsx
import React from 'react';
import ProductCard from './ProductCard';
import img2 from '../assets/board.jpg';
import img3 from '../assets/factory.jpg';
import img4 from '../assets/factory1.jpg';
import img5 from '../assets/img2.jpg';

const Products: React.FC = () => {
 
  const products = [
    {
      title: "Red Clay Bricks (लाल ईंट)",
      description: "उच्च गुणवत्ता वाली पारंपरिक लाल मिट्टी की ईंटें। मजबूत, टिकाऊ और मौसम प्रतिरोधी। निर्माण के लिए आदर्श।",
      image: img2,
    },
    {
      title: "Fly Ash Bricks (फ्लाई ऐश ब्रिक्स)",
      description: "पर्यावरण अनुकूल, हल्की लेकिन मजबूत। सीमेंट प्लांट से बनी, बेहतर इंसुलेशन और कम पानी सोखती हैं।",
      image: img3,
      
    },
    {
      title: "Hollow Bricks (खोखली ईंट)",
      description: "वजन में हल्की, थर्मल इंसुलेशन बेहतर। बड़े प्रोजेक्ट्स और दीवारों के लिए इस्तेमाल होती हैं।",
      image: img4,
    },
    {
      title: "Paver Blocks (पेवर ब्लॉक)",
      description: "फुटपाथ, पार्किंग, गार्डन के लिए मजबूत और आकर्षक ब्लॉक। विभिन्न डिजाइन और रंग उपलब्ध।",
      image: img5,
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-orange-100 text-orange-700 font-medium rounded-full text-sm uppercase tracking-wide">
            हमारे प्रोडक्ट्स
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-stone-800">
            उच्च गुणवत्ता वाली ईंटें और ब्लॉक
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
            विभिन्न प्रकार की ईंटें और निर्माण सामग्री, जो हर प्रोजेक्ट की जरूरत को पूरा करती हैं।
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image} 
              
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;