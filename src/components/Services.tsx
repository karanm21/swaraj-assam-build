
import React from 'react';
import { Building, Construction, Building2, MapPin, Home, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const serviceItems = [
  {
    icon: <Building className="h-10 w-10 text-construction-blue" />,
    title: "Commercial Construction",
    description: "Complete commercial building solutions from planning to execution with quality craftsmanship."
  },
  {
    icon: <Home className="h-10 w-10 text-construction-blue" />,
    title: "Residential Projects",
    description: "Creating comfortable and stylish living spaces that fulfill your dream home requirements."
  },
  {
    icon: <Construction className="h-10 w-10 text-construction-blue" />,
    title: "Infrastructure Development",
    description: "Building strong foundations for roads, bridges, and public works projects."
  },
  {
    icon: <Building2 className="h-10 w-10 text-construction-blue" />,
    title: "Industrial Construction",
    description: "Specialized construction solutions for factories, warehouses, and industrial facilities."
  },
  {
    icon: <MapPin className="h-10 w-10 text-construction-blue" />,
    title: "Land Development",
    description: "Professional land preparation and development services for construction projects."
  },
  {
    icon: <Users className="h-10 w-10 text-construction-blue" />,
    title: "Construction Consultation",
    description: "Expert advice and planning services for all your construction needs."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-construction-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title relative">
            Our Services
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-construction-yellow rounded-full"></div>
          </h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto leading-relaxed mt-6">
            We provide a wide range of construction services to meet all your building needs with exceptional quality and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {serviceItems.map((service, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white group"
            >
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="mb-4 p-4 bg-construction-blue/10 rounded-full group-hover:bg-construction-yellow/20 transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-construction-blue group-hover:text-construction-darkblue transition-colors duration-300 text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-construction-gray leading-relaxed group-hover:text-construction-gray/90 transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
