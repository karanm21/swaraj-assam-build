
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1541955293556-ff2648d0e672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="hero" className="relative h-screen flex items-center bg-construction-lightgray">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out" 
        style={{ 
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`
        }}
      ></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Building Tomorrow's <span className="text-construction-yellow">Infrastructure</span> Today
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Swaraj Infra is a leading construction company in Guwahati, Assam, delivering quality construction services and innovative solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/services">
              <Button className="bg-construction-yellow text-black hover:bg-construction-yellow/90 text-lg py-6 px-8">
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-white text-construction-blue hover:bg-white/90 text-lg py-6 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
