
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage: React.FC = () => {
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
      <div className="relative pt-20 pb-16 bg-gradient-to-br from-construction-blue to-construction-darkblue">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-on-scroll">
            About <span className="text-construction-yellow">Swaraj Infra</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-on-scroll">
            Building excellence through innovation, integrity, and unwavering commitment to quality construction
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-construction-yellow/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-16 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      </div>
      <div className="bg-construction-lightgray">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
