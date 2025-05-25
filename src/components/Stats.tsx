
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: <Building className="h-12 w-12 text-construction-yellow" />,
    value: 250,
    label: "Projects Completed",
    suffix: "+"
  },
  {
    icon: <Users className="h-12 w-12 text-construction-yellow" />,
    value: 120,
    label: "Professional Team",
    suffix: "+"
  },
  {
    icon: <Clock className="h-12 w-12 text-construction-yellow" />,
    value: 15,
    label: "Years of Experience",
    suffix: "+"
  },
  {
    icon: <Award className="h-12 w-12 text-construction-yellow" />,
    value: 30,
    label: "Awards & Recognition",
    suffix: "+"
  }
];

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedValues, setCountedValues] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer to detect when the stats section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Faster, smoother animation for counting up the stats
  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 1000; // 1 second
        const steps = 50;
        const increment = stat.value / steps;
        let currentStep = 0;
        
        const timer = setInterval(() => {
          currentStep++;
          const currentValue = Math.min(Math.floor(increment * currentStep), stat.value);
          
          setCountedValues(prev => {
            const newValues = [...prev];
            newValues[index] = currentValue;
            return newValues;
          });
          
          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="stats" className="section-padding bg-white relative overflow-hidden">
      {/* Enhanced background decoration with smoother animations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-construction-blue rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-construction-yellow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-construction-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-construction-yellow rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">Our Achievements in Numbers</h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Over the years, we have built a legacy of excellence and trust in the construction industry across Assam.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-white group transform ${
                isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <CardContent className="flex flex-col items-center p-8 text-center relative overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-construction-blue/5 to-construction-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-3 text-construction-blue transition-all duration-500 group-hover:text-construction-yellow relative z-10">
                  {countedValues[index]}{stat.suffix}
                </div>
                <div className="text-construction-gray font-medium text-lg group-hover:text-construction-blue transition-colors duration-300 relative z-10">{stat.label}</div>
                
                {/* Enhanced decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-construction-blue to-construction-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-construction-blue to-construction-yellow transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced additional content section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-white to-construction-lightgray p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-construction-blue/10">
            <h3 className="text-3xl font-bold text-construction-blue mb-6 animate-fade-in">Why Choose Swaraj Infra?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-construction-blue mb-2 text-lg group-hover:text-construction-yellow transition-colors duration-300">Quality Assurance</h4>
                  <p className="text-construction-gray">We maintain the highest standards in every project we undertake with rigorous quality control.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-construction-blue mb-2 text-lg group-hover:text-construction-yellow transition-colors duration-300">Timely Delivery</h4>
                  <p className="text-construction-gray">Our projects are completed on schedule without compromising quality through efficient project management.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-construction-blue mb-2 text-lg group-hover:text-construction-yellow transition-colors duration-300">Customer Focus</h4>
                  <p className="text-construction-gray">Your satisfaction is our priority from initial consultation to project completion and beyond.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
