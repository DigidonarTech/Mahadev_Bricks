// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Column 1: Logo + Description */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white font-black text-3xl shadow-md">
              MB
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Mahadev Bricks</h3>
              <p className="text-sm text-stone-400">Since 2005 • Varanasi</p>
            </div>
          </div>
          <p className="text-stone-400 leading-relaxed">
            मजबूत ईंटें, मजबूत निर्माण। हम उच्च गुणवत्ता वाली ईंटें और निर्माण सामग्री प्रदान करते हैं जो पीढ़ियों तक टिकती हैं।
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
          <ul className="space-y-4 text-stone-400">
            <li>
              <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-500 transition-colors">About Us</a>
            </li>
            <li>
              <a href="#products" className="hover:text-orange-500 transition-colors">Products</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-orange-500 transition-colors">Gallery</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
          <ul className="space-y-4 text-stone-400">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">📞</span>
              <div>
                <p>+91 98765 43210</p>
                <p className="text-sm">(WhatsApp Available)</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">📍</span>
              <p>
                रामनगर, लहरतारा,<br />
                वाराणसी, उत्तर प्रदेश 221105
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">⏰</span>
              <p>Mon-Sat: 8 AM - 6 PM</p>
            </li>
          </ul>
        </div>

        {/* Column 4: Social + Copyright */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white mb-6">Follow Us</h4>
          <div className="flex gap-5">
            {/* Icons – real links daal dena */}
            <a href="#" className="text-2xl hover:text-orange-500 transition-colors">Facebook</a>
            <a href="#" className="text-2xl hover:text-orange-500 transition-colors">Instagram</a>
            <a href="#" className="text-2xl hover:text-orange-500 transition-colors">WhatsApp</a>
          </div>

          <div className="mt-8 pt-8 border-t border-stone-700 text-sm text-stone-500">
            <p>© {new Date().getFullYear()} Mahadev Bricks. All rights reserved.</p>
            <p className="mt-2">
              Designed with ❤️ in Varanasi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;