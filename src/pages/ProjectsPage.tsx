
import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar } from 'lucide-react';
import ProjectDetailsDialog from '@/components/ProjectDetailsDialog';
import AbstractBackground from '@/components/AbstractBackground';

const projectItems = [
  {
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Commercial",
    title: "Modern Office Complex",
    location: "Guwahati",
    year: "2023",
    description: "A state-of-the-art office complex with modern amenities and sustainable design principles.",
    images: [
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Residential",
    title: "Luxury Apartment Building",
    location: "Guwahati",
    year: "2022",
    description: "Premium residential apartments with world-class facilities and scenic views of the city.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "Infrastructure",
    title: "Highway Expansion Project",
    location: "Assam",
    year: "2021",
    description: "A major infrastructure project expanding key highways to improve connectivity across the region.",
    images: [
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Institutional",
    title: "University Campus Development",
    location: "Guwahati",
    year: "2023",
    description: "Development of modern educational facilities at a premier university campus in Guwahati.",
    images: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Industrial",
    title: "Manufacturing Plant",
    location: "Assam",
    year: "2022",
    description: "A cutting-edge manufacturing facility built with precision engineering and environmental considerations.",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Residential",
    title: "Smart City Housing Project",
    location: "Guwahati",
    year: "2023",
    description: "Innovative housing project incorporating smart city technologies and sustainable living solutions.",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Commercial",
    title: "Shopping Mall Complex",
    location: "Assam",
    year: "2022",
    description: "Multi-level shopping and entertainment complex serving as a regional commercial hub.",
    images: [
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Infrastructure",
    title: "Water Treatment Facility",
    location: "Assam",
    year: "2021",
    description: "Modern water treatment plant ensuring clean water supply to urban and rural communities.",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  }
];

const ProjectsPage: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  const displayedProjects = showAll ? projectItems : projectItems.slice(0, 3);

  const handleShowAll = () => {
    setShowAll(!showAll);
    
    // If we're hiding projects (going from showAll=true to false), scroll to button
    if (showAll && buttonRef.current) {
      setTimeout(() => {
        buttonRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }
  };

  const handleProjectDetails = (project: any) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-20 relative">
          <AbstractBackground variant="light" />
          <div className="relative z-10 bg-white">
            <section id="projects" className="section-padding">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="section-title">Our Work</h2>
                  <p className="text-lg text-construction-gray max-w-3xl mx-auto">
                    Explore our portfolio of successful construction projects across Guwahati and Assam.
                  </p>
                </div>
              </div>
              
              {/* Projects Grid - Full width with vertical spacing */}
              <div className="w-full">
                <div className="space-y-8 animate-on-scroll">
                  {displayedProjects.map((project, index) => (
                    <div key={index} className="relative overflow-hidden h-96 group w-full">
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                      
                      {/* Content Overlay */}
                      <div className="relative z-10 h-full flex items-center">
                        <div className="container mx-auto px-8">
                          <div className="max-w-2xl text-white">
                            <span className="inline-block px-4 py-2 bg-construction-yellow text-black text-sm font-medium rounded mb-4">
                              {project.category}
                            </span>
                            <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
                            <p className="text-lg mb-6 leading-relaxed opacity-90">{project.description}</p>
                            
                            <div className="flex flex-col space-y-3 mb-6">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-construction-yellow" /> 
                                <span className="font-medium">{project.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-construction-yellow" /> 
                                <span className="font-medium">Completed {project.year}</span>
                              </div>
                            </div>
                            
                            <Button 
                              className="bg-construction-blue text-white hover:bg-construction-blue/90"
                              onClick={() => handleProjectDetails(project)}
                            >
                              View Project Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Show More/Less Button */}
                <div ref={buttonRef} className="flex justify-center mt-12">
                  <Button 
                    onClick={handleShowAll}
                    className="bg-construction-yellow text-black hover:bg-construction-yellow/90 px-8 py-3"
                  >
                    {showAll ? 'Show Less Projects' : 'Show More Projects'}
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>

      <ProjectDetailsDialog 
        project={selectedProject}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};

export default ProjectsPage;
