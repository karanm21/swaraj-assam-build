
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
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto">
            We provide a wide range of construction services to meet all your building needs with exceptional quality and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center">
                {service.icon}
                <CardTitle className="mt-4 text-xl text-construction-blue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-construction-gray">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
