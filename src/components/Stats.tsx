
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
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation for counting up the stats
  useEffect(() => {
    if (isVisible) {
      const counters = stats.map((stat, index) => {
        const duration = 2500; // 2.5 seconds
        const increment = stat.value / (duration / 50); // Update every 50ms
        let currentValue = 0;
        
        return setInterval(() => {
          currentValue += increment;
          
          if (currentValue >= stat.value) {
            currentValue = stat.value;
            clearInterval(counters[index]);
          }
          
          setCountedValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.floor(currentValue);
            return newValues;
          });
        }, 50);
      });
      
      return () => {
        counters.forEach(interval => clearInterval(interval));
      };
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="stats" className="section-padding bg-construction-lightgray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-construction-blue rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-construction-yellow rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-construction-blue rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Achievements in Numbers</h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto">
            Over the years, we have built a legacy of excellence and trust in the construction industry across Assam.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white group ${
                isVisible ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="flex flex-col items-center p-8 text-center relative">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-5xl font-bold mb-3 text-construction-blue ${isVisible ? 'count-animation' : ''}`}>
                  {countedValues[index]}{stat.suffix}
                </div>
                <div className="text-construction-gray font-medium text-lg">{stat.label}</div>
                
                {/* Decorative element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-construction-blue to-construction-yellow"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional content section */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-construction-blue mb-4">Why Choose Swaraj Infra?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-construction-blue mb-1">Quality Assurance</h4>
                  <p className="text-construction-gray text-sm">We maintain the highest standards in every project we undertake.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-construction-blue mb-1">Timely Delivery</h4>
                  <p className="text-construction-gray text-sm">Our projects are completed on schedule without compromising quality.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-construction-yellow rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-construction-blue mb-1">Customer Focus</h4>
                  <p className="text-construction-gray text-sm">Your satisfaction is our priority from start to finish.</p>
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
