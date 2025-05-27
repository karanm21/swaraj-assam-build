
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
      {/* Enhanced Hero Section */}
      <div className="relative pt-20 pb-16 bg-gradient-to-bl from-construction-darkblue via-construction-blue to-construction-yellow">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-on-scroll">
            Project <span className="text-construction-yellow">Gallery</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-on-scroll">
            Explore our portfolio of exceptional construction projects and witness the quality of our craftsmanship
          </p>
        </div>
        {/* Gallery-themed decorations */}
        <div className="absolute top-20 left-16 w-16 h-16 border-4 border-white/20 animate-pulse"></div>
        <div className="absolute bottom-12 right-20 w-12 h-12 bg-construction-yellow/30 rotate-45 animate-spin"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-construction-yellow rounded-full animate-bounce"></div>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
};

export default GalleryPage;
