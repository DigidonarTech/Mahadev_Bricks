// src/App.tsx
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CallButton from "./components/CallButton";

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navbar onScrollTo={scrollToSection} />
      <Hero onScrollTo={scrollToSection} />
      <About years={19} bricksProduced="2 करोड़+" projects="500+"/>
      <Products />
      <Gallery />
      <Contact />
      <Footer />
      <CallButton />
    </div>
  );
}

export default App;