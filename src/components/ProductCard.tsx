// src/components/ProductCard.tsx
import React, { useState } from 'react';

interface ProductCardProps {
  title: string;         
  description: string;       
  image: string;                           
  onQuote?: () => void;       
}


const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  onQuote,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
      {/* Image */}
      <div className="h-56 overflow-hidden relative bg-stone-200">
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-stone-200 z-10">
            <div className="w-16 h-16 rounded-full bg-stone-300" />
          </div>
        )}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${imgLoaded ? '' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-stone-800 mb-3">{title}</h3>
        <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
          {description}
        </p>
        </div>
      </div>
  );
};

export default ProductCard;