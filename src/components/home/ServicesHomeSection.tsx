
import React from 'react';
import { Building, Home, Construction, Building2, MapPin, Users } from 'lucide-react';

const ServicesHomeSection: React.FC = () => {
  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial Construction",
      description: "Complete commercial building solutions from planning to execution"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Residential Projects",
      description: "Creating comfortable and stylish living spaces"
    },
    {
      icon: <Construction className="h-8 w-8" />,
      title: "Infrastructure Development",
      description: "Building strong foundations for roads, bridges, and public works"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Industrial Construction",
      description: "Specialized construction solutions for factories and warehouses"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Land Development",
      description: "Professional land preparation and development services"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Construction Consultation",
      description: "Expert advice and planning services for all your needs"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="glass-card inline-block p-6 mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              OUR <span className="text-construction-yellow">SERVICES</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We provide comprehensive construction services with exceptional quality and reliability
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-construction-yellow mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-construction-yellow transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHomeSection;
