
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const projectItems = [
  {
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Commercial",
    title: "Modern Office Complex",
    location: "Guwahati"
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Residential",
    title: "Luxury Apartment Building",
    location: "Guwahati"
  },
  {
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "Infrastructure",
    title: "Highway Expansion Project",
    location: "Assam"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectItems.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <span className="inline-block px-3 py-1 bg-construction-yellow/10 text-construction-blue text-sm font-medium rounded mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-construction-darkblue mb-1">{project.title}</h3>
                <p className="text-construction-gray flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {project.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
