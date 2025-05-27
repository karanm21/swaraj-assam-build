
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const GalleryPage: React.FC = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        const bottom = element.getBoundingClientRect().bottom;
        if (top < window.innerHeight - 100 && bottom > 0) {
          element.classList.add('is-visible');
        }
      });
    };

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Simple Hero Section */}
      <div className="relative pt-20 pb-16 bg-construction-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-on-scroll">
            Project <span className="text-construction-yellow">Gallery</span>
          </h1>
          <div className="w-24 h-1 bg-construction-yellow mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-on-scroll">
            Explore our portfolio of exceptional construction projects and witness the quality of our craftsmanship
          </p>
        </div>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
};

export default GalleryPage;
