
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
    <section id="services" className="section-padding bg-construction-lightgray relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-construction-blue rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-construction-yellow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-construction-blue rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-construction-blue/5 to-construction-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="flex flex-col items-center pb-4 relative z-10">
                <div className="mb-4 p-4 bg-construction-blue/10 rounded-full group-hover:bg-construction-yellow/20 transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-construction-blue group-hover:text-construction-darkblue transition-colors duration-300 text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <CardDescription className="text-construction-gray leading-relaxed group-hover:text-construction-gray/90 transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardContent>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-construction-yellow/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced Call-to-action section */}
        <div className="mt-20 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-construction-blue to-construction-darkblue p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 border-4 border-construction-yellow rounded-full animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-construction-yellow rounded-full animate-bounce"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your construction needs and get a personalized quote for your project.
              </p>
              <button className="bg-construction-yellow text-black font-semibold px-8 py-4 rounded-lg hover:bg-construction-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
