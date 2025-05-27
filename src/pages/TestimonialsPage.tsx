
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

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
      {/* Enhanced Hero Section */}
      <div className="relative pt-20 pb-16 bg-gradient-to-br from-construction-darkblue to-construction-blue">
        <div className="absolute inset-0 bg-gradient-to-t from-construction-yellow/10 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-on-scroll">
            Client <span className="text-construction-yellow">Testimonials</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-on-scroll">
            Discover what our valued clients have to say about their experience working with Swaraj Infra
          </p>
        </div>
        {/* Testimonial-themed decorations */}
        <div className="absolute top-20 right-16 w-14 h-14 border-2 border-construction-yellow/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 left-20 w-10 h-10 bg-white/20 rotate-45 animate-bounce"></div>
        <div className="absolute top-1/2 left-16 w-6 h-6 bg-construction-yellow rounded-full animate-ping"></div>
      </div>
      <div className="bg-construction-lightgray">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
