
import React, { useEffect, useState } from 'react';
import WelcomeSection from './home/WelcomeSection';
import ServicesHomeSection from './home/ServicesHomeSection';
import KeyProjectsSection from './home/KeyProjectsSection';
import StatsHomeSection from './home/StatsHomeSection';
import ContactHomeSection from './home/ContactHomeSection';

const ParallaxHome: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1541955293556-ff2648d0e672?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fixed Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${image}')`,
            transform: `translateY(${scrollY * 0.1 * (index + 1)}px)`,
            opacity: 0.15 + (index * 0.05),
            zIndex: -10 + index
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-construction-blue/80 via-construction-blue/70 to-construction-darkblue/90 z-0" />

      {/* Scrollable Content */}
      <div className="relative z-10">
        <WelcomeSection />
        <ServicesHomeSection />
        <KeyProjectsSection />
        <StatsHomeSection />
        <ContactHomeSection />
      </div>
    </div>
  );
};

export default ParallaxHome;
