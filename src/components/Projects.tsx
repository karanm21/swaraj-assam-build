
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar } from 'lucide-react';

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
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Residential",
    title: "Smart City Housing Project",
    location: "Guwahati",
    year: "2023",
    description: "Innovative housing project incorporating smart city technologies and sustainable living solutions."
  },
  {
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Commercial",
    title: "Shopping Mall Complex",
    location: "Assam",
    year: "2022",
    description: "Multi-level shopping and entertainment complex serving as a regional commercial hub."
  },
  {
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Infrastructure",
    title: "Water Treatment Facility",
    location: "Assam",
    year: "2021",
    description: "Modern water treatment plant ensuring clean water supply to urban and rural communities."
  }
];

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projectItems : projectItems.slice(0, 3);
  
  return (
    <section id="projects" className="section-padding bg-construction-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Projects</h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects across Guwahati and Assam.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="space-y-8 animate-on-scroll">
          {displayedProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                </div>
                
                {/* Project Content */}
                <CardContent className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-4 py-2 bg-construction-yellow text-black text-sm font-medium rounded mb-4 w-fit">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-construction-blue mb-4">{project.title}</h3>
                  <p className="text-lg text-construction-gray mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-col space-y-3 text-construction-gray mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-construction-yellow" /> 
                      <span className="font-medium">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-construction-yellow" /> 
                      <span className="font-medium">Completed {project.year}</span>
                    </div>
                  </div>
                  
                  <Button className="bg-construction-blue text-white hover:bg-construction-blue/90 w-fit">
                    View Project Details
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Show All/Less Button */}
        <div className="flex justify-center mt-12">
          <Button 
            onClick={() => setShowAll(!showAll)}
            className="bg-construction-yellow text-black hover:bg-construction-yellow/90 px-8 py-3"
          >
            {showAll ? 'Show Less Projects' : 'Explore All Our Projects'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
