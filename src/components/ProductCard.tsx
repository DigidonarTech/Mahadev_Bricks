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
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full overflow-hidden">
      <div className="h-52 overflow-hidden relative bg-stone-200">
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-stone-200 z-10">
            <div className="w-14 h-14 rounded-full bg-stone-300" />
          </div>
        )}

        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imgLoaded ? '' : 'opacity-0'
          }`}
          onLoad={() => setImgLoaded(true)}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">

        <h3 className="text-lg font-semibold text-stone-800 mb-2 leading-snug">
          {title}
        </h3>

        <p className="text-stone-600 text-sm leading-relaxed flex-grow line-clamp-3">
          {description}
        </p>

      </div>
    </div>
  );
};

export default ProductCard;