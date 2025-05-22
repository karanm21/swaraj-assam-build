
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: <Building className="h-10 w-10 text-construction-yellow" />,
    value: 250,
    label: "Projects Completed",
    suffix: "+"
  },
  {
    icon: <Users className="h-10 w-10 text-construction-yellow" />,
    value: 120,
    label: "Professional Team",
    suffix: "+"
  },
  {
    icon: <Clock className="h-10 w-10 text-construction-yellow" />,
    value: 15,
    label: "Years of Experience",
    suffix: "+"
  },
  {
    icon: <Award className="h-10 w-10 text-construction-yellow" />,
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
        const duration = 2000; // 2 seconds
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
    <section ref={sectionRef} id="stats" className="section-padding bg-construction-lightgray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4">
                  {stat.icon}
                </div>
                <div className={`text-4xl font-bold mb-2 text-construction-blue ${isVisible ? 'count-animation' : ''}`}>
                  {countedValues[index]}{stat.suffix}
                </div>
                <div className="text-construction-gray">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
