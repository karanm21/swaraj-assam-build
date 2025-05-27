
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const ServicesPage: React.FC = () => {
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
    <div className="min-h-screen bg-construction-lightgray">
      <Navbar />
      {/* Enhanced Hero Section */}
      <div className="relative pt-20 pb-16 bg-gradient-to-r from-construction-darkblue via-construction-blue to-construction-darkblue">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-construction-yellow/10 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-on-scroll">
            Our <span className="text-construction-yellow">Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-on-scroll">
            Comprehensive construction solutions tailored to meet your unique project requirements
          </p>
        </div>
        {/* Geometric decorations */}
        <div className="absolute top-1/2 left-0 w-20 h-20 border-4 border-construction-yellow/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/3 w-12 h-12 border-2 border-white/20 rotate-12 animate-pulse"></div>
      </div>
      <div className="bg-construction-lightgray">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
