
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import AbstractBackground from '@/components/AbstractBackground';

const TestimonialsPage: React.FC = () => {
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
      {/* Hero Section with Abstract Background */}
      <div className="relative pt-20 pb-16 bg-construction-blue overflow-hidden">
        <AbstractBackground variant="blue" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-on-scroll">
            Client <span className="text-construction-yellow">Testimonials</span>
          </h1>
          <div className="w-24 h-1 bg-construction-yellow mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-on-scroll">
            Discover what our valued clients have to say about their experience working with Swaraj Infra
          </p>
        </div>
      </div>
      <div className="bg-construction-lightgray relative">
        <AbstractBackground variant="light" />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
