
import React from 'react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Swaraj Infra Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-construction-yellow p-6 rounded-lg hidden md:block">
              <div className="text-black font-bold text-4xl">10+</div>
              <div className="text-black font-medium">Years of Experience</div>
            </div>
          </div>
          
          {/* About Content */}
          <div>
            <h2 className="section-title">About Swaraj Infra</h2>
            <p className="text-lg text-construction-gray mb-6">
              Swaraj Infra is a leading construction company based in Guwahati, Assam. With over a decade of experience, we've established ourselves as a reliable partner in building the future of our region.
            </p>
            <p className="text-lg text-construction-gray mb-6">
              Our team of highly skilled professionals is dedicated to delivering projects that meet the highest standards of quality and safety. We specialize in commercial, residential, and infrastructure development projects across Assam.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-construction-blue rounded-full"></div>
                <span className="text-construction-gray">Quality Craftsmanship</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-construction-blue rounded-full"></div>
                <span className="text-construction-gray">Timely Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-construction-blue rounded-full"></div>
                <span className="text-construction-gray">Professional Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-construction-blue rounded-full"></div>
                <span className="text-construction-gray">Customer Satisfaction</span>
              </div>
            </div>
            
            <Button className="bg-construction-blue text-white hover:bg-construction-blue/90">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
