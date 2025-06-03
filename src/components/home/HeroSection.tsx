
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Building, Award } from 'lucide-react';
import CustomAnnouncement from './CustomAnnouncement';

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1541955293556-ff2648d0e672?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop", 
    "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=1920&h=1080&fit=crop"
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
    <section className="min-h-screen flex flex-col">
      {/* Announcement Bar */}
      <div className="w-full relative z-20">
        <CustomAnnouncement 
          title="We updated our construction processes and safety standards."
          button="Learn more →"
        />
      </div>
      
      {/* Hero Content with Background Images */}
      <div className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        <div className="container mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Swaraj Infra is a clean, 
                <span className="block text-construction-yellow">easy to work with,</span>
                <span className="block text-white">construction company.</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-construction-yellow text-black hover:bg-construction-yellow/90 text-lg py-6 px-8 rounded-xl">
                  📱 View Our Projects
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg py-6 px-8 rounded-xl">
                  🏗️ Get Quote
                </Button>
              </div>
            </div>

            {/* Hero Images */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
                    <img
                      src="https://images.unsplash.com/photo-1541955293556-ff2648d0e672?w=400&h=300&fit=crop"
                      alt="Construction Project"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-construction-yellow rounded-2xl p-6 text-center">
                    <Building className="h-8 w-8 mx-auto mb-2" />
                    <span className="font-semibold">always know your project status</span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
                    <img
                      src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
                      alt="Building Project"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-construction-blue rounded-2xl p-6 text-center text-white">
                    <Award className="h-8 w-8 mx-auto mb-2" />
                    <span className="font-semibold">Quality Assured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
