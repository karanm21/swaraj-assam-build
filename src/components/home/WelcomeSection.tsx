
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Award } from 'lucide-react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Welcome Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="glass-card p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <Building className="h-8 w-8 text-construction-yellow" />
                <span className="text-construction-yellow font-semibold text-lg">WELCOME TO</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                SWARAJ <span className="text-construction-yellow">INFRA</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Building Tomorrow's Infrastructure Today. Leading construction company in Guwahati, Assam, 
                delivering quality construction services and innovative solutions across Northeast India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-construction-yellow text-black hover:bg-construction-yellow/90 text-lg py-6 px-8 group">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-construction-blue text-lg py-6 px-8">
                  View Projects
                </Button>
              </div>
            </div>
          </div>

          {/* About Us Card */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-8 w-8 text-construction-yellow" />
                <h2 className="text-3xl font-bold text-white">About Us</h2>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                With over a decade of excellence in construction and infrastructure development, 
                Swaraj Infra has been transforming the landscape of Assam with innovative solutions 
                and uncompromising quality.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-construction-yellow mb-2">10+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-construction-yellow mb-2">250+</div>
                  <div className="text-white/80 text-sm">Projects Completed</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-construction-yellow rounded-full"></div>
                  <span className="text-white/90">Quality Craftsmanship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-construction-yellow rounded-full"></div>
                  <span className="text-white/90">Timely Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-construction-yellow rounded-full"></div>
                  <span className="text-white/90">Customer Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
