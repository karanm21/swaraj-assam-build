
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Construction, Calendar } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const projectItems = [
  {
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Commercial",
    title: "Modern Office Complex",
    location: "Guwahati",
    year: "2023",
    description: "A state-of-the-art office complex with modern amenities and sustainable design principles."
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Residential",
    title: "Luxury Apartment Building",
    location: "Guwahati",
    year: "2022",
    description: "Premium residential apartments with world-class facilities and scenic views of the city."
  },
  {
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "Infrastructure",
    title: "Highway Expansion Project",
    location: "Assam",
    year: "2021",
    description: "A major infrastructure project expanding key highways to improve connectivity across the region."
  },
  {
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Institutional",
    title: "University Campus Development",
    location: "Guwahati",
    year: "2023",
    description: "Development of modern educational facilities at a premier university campus in Guwahati."
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Industrial",
    title: "Manufacturing Plant",
    location: "Assam",
    year: "2022",
    description: "A cutting-edge manufacturing facility built with precision engineering and environmental considerations."
  }
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const handleMouseEnter = (index: number) => {
    setActiveProject(index);
  };
  
  const handleMouseLeave = () => {
    setActiveProject(null);
  };
  
  return (
    <section id="projects" className="section-padding bg-construction-lightgray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="section-title mb-2">Our Projects</h2>
            <p className="text-lg text-construction-gray max-w-2xl">
              Explore our portfolio of successful construction projects across Guwahati and Assam.
            </p>
          </div>
          <Button className="bg-construction-blue text-white hover:bg-construction-blue/90 mt-4 md:mt-0">
            View All Projects
          </Button>
        </div>
        
        {/* Featured Projects Carousel */}
        <div className="mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projectItems.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card 
                      className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="h-64 overflow-hidden relative">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        {activeProject === index && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 opacity-100">
                            <div className="text-center p-4">
                              <p className="text-white mb-4">{project.description}</p>
                              <Button className="bg-construction-yellow text-black hover:bg-construction-yellow/90">
                                View Details
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <span className="inline-block px-3 py-1 bg-construction-yellow/10 text-construction-blue text-sm font-medium rounded mb-3">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-semibold text-construction-darkblue mb-1">{project.title}</h3>
                        <div className="flex flex-col space-y-2 text-construction-gray">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" /> {project.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" /> {project.year}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-end gap-2 mt-4">
              <CarouselPrevious className="position-static bg-construction-blue text-white hover:bg-construction-darkblue" />
              <CarouselNext className="position-static bg-construction-blue text-white hover:bg-construction-darkblue" />
            </div>
          </Carousel>
        </div>
        
        {/* Project Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 animate-on-scroll">
          {["Commercial", "Residential", "Infrastructure", "Industrial"].map((category, index) => (
            <Button 
              key={index}
              variant="outline" 
              className="p-8 h-auto flex flex-col items-center justify-center gap-4 border-2 border-construction-blue/20 hover:border-construction-blue hover:bg-construction-blue/5 transition-all"
            >
              <Construction className="h-12 w-12 text-construction-blue" />
              <span className="text-lg font-medium">{category}</span>
            </Button>
          ))}
        </div>
        
        {/* View All Projects Link */}
        <div className="flex justify-center mt-12">
          <Button 
            className="group flex items-center space-x-2 bg-transparent text-construction-blue hover:bg-transparent"
          >
            <span>Explore All Our Projects</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

