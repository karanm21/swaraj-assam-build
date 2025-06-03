
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-construction-blue to-construction-darkblue">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Get started with Swaraj Infra now!
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black text-white hover:bg-gray-800 text-lg py-6 px-8 rounded-xl">
            📱 Get Quote
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-construction-blue text-lg py-6 px-8 rounded-xl">
            🏗️ View Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
