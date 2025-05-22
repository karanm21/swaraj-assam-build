
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1541955293556-ff2648d0e672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')"
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
            <Button className="bg-construction-yellow text-black hover:bg-construction-yellow/90 text-lg py-6 px-8">
              Our Services
            </Button>
            <Button className="bg-white text-construction-blue hover:bg-white/90 text-lg py-6 px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
