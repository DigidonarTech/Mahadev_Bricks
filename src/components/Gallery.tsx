// src/components/Gallery.tsx
import React from 'react';

const Images = {
  img1: "https://res.cloudinary.com/ddc7x60nm/image/upload/f_auto,q_auto,w_800/v1773034092/WhatsApp_Image_2026-03-09_at_10.25.16_AM_jeqqd7.jpg",
  img2: "https://res.cloudinary.com/ddc7x60nm/image/upload/f_auto,q_auto,w_800/v1773034255/img2_q2mlhp.jpg",
  img3: "https://res.cloudinary.com/ddc7x60nm/image/upload/f_auto,q_auto,w_800/v1773034252/bricks_kymspn.jpg",
  img4: "https://res.cloudinary.com/ddc7x60nm/image/upload/f_auto,q_auto,w_800/v1773034205/worker_fuor3c.jpg",
  img5: "https://res.cloudinary.com/ddc7x60nm/image/upload/f_auto,q_auto,w_800/v1773036255/imhes_ayfb1j.avif",
  img6: "https://res.cloudinary.com/ddc7x60nm/image/upload/f_auto,q_auto,w_800/v1773034255/img2_q2mlhp.jpg",
  img7: "https://res.cloudinary.com/ddc7x60nm/image/upload/f_auto,q_auto,w_800/v1773036829/long-lasting-solid-red-coal-bricks-for-construction-804_mc4ifb.jpg",
  img8: "https://res.cloudinary.com/ddc7x60nm/image/upload/f_auto,q_auto,w_800/v1773036830/369741535_666178662241323_178891315163332523_n_vhxlyp.jpg",
};



const Gallery: React.FC = () => {
  const galleryItems = [
    {
      image: Images.img1,
      title: "लाल मिट्टी की ईंटों का ढेर",
      description: "उच्च गुणवत्ता वाली रेड क्ले ब्रिक्स तैयार स्टॉक में",
    },
    {
      image: Images.img2,
      title: "फ्लाई ऐश ब्रिक्स उत्पदन",
      description: "पर्यावरण अनुकूल फ्लाई ऐश ब्रिक्स का बैच",
    },
    {
      image: Images.img3,
      title: "खोखली ईंटें (Hollow Bricks)",
      description: "हल्की लेकिन मजबूत खोखली ईंटें निर्माण साइट पर",
    },
    {
      image: Images.img4,
      title: "पेवर ब्लॉक पैटर्न",
      description: "आकर्षक पेवर ब्लॉक डिजाइन – पार्किंग और गार्डन के लिए",
    },
    {
      image: Images.img5,
      title: "उत्पादन इकाई का दृश्य",
      description: "हमारी आधुनिक ब्रिक मैन्युफैक्चरिंग मशीनरी",
    },
    {
      image: Images.img6,
      title: "स्टैक्ड ब्रिक्स वेयरहाउस",
      description: "संगठित तरीके से स्टोर की गई ईंटें",
    },
    {
      image: Images.img7,
      title: "निर्माण स्थल पर ईंटें",
      description: "उच्च गुणवत्ता वाली ईंटें निर्माण स्थल पर",
    },
    {
      image: Images.img8,
      title: "उत्पादन लाइन",
      description: "हमारी उत्पादन लाइन पर ईंटें बन रही हैं",
    }
    // 4-8 items aur add kar sakta hai
  ];

  return (
    <section id="gallery" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-orange-100 text-orange-700 font-medium rounded-full text-sm uppercase tracking-wide">
            हमारी गैलरी
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-stone-800">
            हमारी ईंटें और निर्माण कार्य
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
            हमारे उत्पादन, स्टॉक और विभिन्न प्रोजेक्ट्स की झलकियाँ – गुणवत्ता जो नजर आती है।
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative"
            >
              <img
                src={item.image || `https://via.placeholder.com/600x800?text=Gallery+${index+1}`} // placeholder – replace with real
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy" // performance ke liye
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: More button if needed */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
            और फोटोज देखें
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;