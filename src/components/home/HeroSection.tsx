
import React from 'react';
import { Button } from '@/components/ui/button';
import { Building, Award, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-construction-darkblue leading-tight">
              Swaraj Infra is a clean, 
              <span className="block text-construction-blue">easy to work with,</span>
              <span className="block text-construction-darkblue">construction company.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black text-white hover:bg-gray-800 text-lg py-6 px-8 rounded-xl">
                📱 View Our Projects
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white text-lg py-6 px-8 rounded-xl">
                🏗️ Get Quote
              </Button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
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
                <div className="bg-white rounded-2xl p-6 shadow-lg">
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
    </section>
  );
};

export default HeroSection;
