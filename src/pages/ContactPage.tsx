
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AbstractBackground from '@/components/AbstractBackground';

const ContactPage: React.FC = () => {
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
            Get in <span className="text-construction-yellow">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-construction-yellow mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-on-scroll">
            Ready to start your next construction project? Let's discuss how we can bring your vision to life
          </p>
        </div>
      </div>
      <div className="relative">
        <AbstractBackground variant="light" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
