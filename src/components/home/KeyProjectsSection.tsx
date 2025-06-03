
import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const KeyProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Guwahati Commercial Complex",
      location: "Guwahati, Assam",
      year: "2023",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern commercial complex with state-of-the-art facilities"
    },
    {
      title: "Assam Highway Bridge",
      location: "Jorhat, Assam",
      year: "2022",
      image: "https://images.unsplash.com/photo-1558618666-dcd65c70cd06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Critical infrastructure connecting remote areas"
    },
    {
      title: "Residential Township",
      location: "Dibrugarh, Assam",
      year: "2023",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium residential development with modern amenities"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="glass-card inline-block p-6 mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              KEY <span className="text-construction-yellow">PROJECTS</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Showcasing our commitment to excellence through landmark projects
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-0 overflow-hidden hover:scale-105 transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <ExternalLink className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-construction-yellow transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-4 mb-3 text-white/70">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyProjectsSection;
