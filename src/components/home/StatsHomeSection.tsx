
import React, { useState, useEffect, useRef } from 'react';
import { Building, Users, Clock, Award } from 'lucide-react';

const StatsHomeSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedValues, setCountedValues] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { icon: <Building className="h-12 w-12" />, value: 250, label: "Projects Completed", suffix: "+" },
    { icon: <Users className="h-12 w-12" />, value: 120, label: "Team Members", suffix: "+" },
    { icon: <Clock className="h-12 w-12" />, value: 15, label: "Years Experience", suffix: "+" },
    { icon: <Award className="h-12 w-12" />, value: 30, label: "Awards Won", suffix: "+" }
  ];

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

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 1500;
        const steps = 60;
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
    <section ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="glass-card inline-block p-6 mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              OUR <span className="text-construction-yellow">ACHIEVEMENTS</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card text-center p-8 hover:scale-105 transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-construction-yellow mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold mb-3 text-white group-hover:text-construction-yellow transition-colors duration-300">
                {countedValues[index]}{stat.suffix}
              </div>
              <div className="text-white/80 font-medium text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsHomeSection;
