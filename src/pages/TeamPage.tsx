
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
      {/* Simple Hero Section */}
      <div className="relative pt-20 pb-16 bg-construction-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-on-scroll">
            Our <span className="text-construction-yellow">Team</span>
          </h1>
          <div className="w-24 h-1 bg-construction-yellow mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-on-scroll">
            Meet the dedicated professionals who bring expertise, passion, and innovation to every project
          </p>
        </div>
      </div>
      <div className="bg-construction-lightgray">
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
