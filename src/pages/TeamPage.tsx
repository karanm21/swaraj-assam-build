
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

const TeamPage: React.FC = () => {
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
      <div className="relative pt-20 pb-16 bg-gradient-to-r from-construction-yellow via-construction-blue to-construction-darkblue">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-on-scroll">
            Our <span className="text-construction-yellow">Team</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-on-scroll">
            Meet the dedicated professionals who bring expertise, passion, and innovation to every project
          </p>
        </div>
        {/* Team-themed decorations */}
        <div className="absolute top-16 left-12 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-12 w-16 h-16 border-4 border-construction-yellow/40 rounded-full animate-spin"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-construction-yellow animate-ping"></div>
      </div>
      <div className="bg-construction-lightgray">
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
