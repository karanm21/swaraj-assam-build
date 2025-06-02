import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import AbstractBackground from '@/components/AbstractBackground';

const TeamPage: React.FC = () => {
  // Add scroll animation
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
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
      <div className="pt-12 relative">
        <div className="bg-construction-lightgray">
          <AbstractBackground variant="light" />
          <Team />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
