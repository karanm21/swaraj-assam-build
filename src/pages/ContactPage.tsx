
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
      {/* Enhanced Hero Section */}
      <div className="relative pt-20 pb-16 bg-gradient-to-tr from-construction-blue to-construction-yellow">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-on-scroll">
            Get in <span className="text-construction-yellow drop-shadow-lg">Touch</span>
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto animate-on-scroll">
            Ready to start your next construction project? Let's discuss how we can bring your vision to life
          </p>
        </div>
        {/* Contact-themed decorations */}
        <div className="absolute top-16 right-20 w-6 h-6 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-16 left-16 w-8 h-8 border-2 border-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-construction-yellow rounded-full animate-bounce"></div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
