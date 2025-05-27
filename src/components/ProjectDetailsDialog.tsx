
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { MapPin, Calendar, Building } from 'lucide-react';

interface Project {
  image: string;
  category: string;
  title: string;
  location: string;
  year: string;
  description: string;
  images?: string[];
}

interface ProjectDetailsDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDetailsDialog: React.FC<ProjectDetailsDialogProps> = ({
  project,
  open,
  onOpenChange,
}) => {
  if (!project) return null;

  const projectImages = project.images || [project.image];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-construction-blue">
            {project.title}
          </DialogTitle>
          <DialogDescription>
            <span className="inline-block px-3 py-1 bg-construction-yellow text-black text-sm font-medium rounded mb-4">
              {project.category}
            </span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Images Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {projectImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {projectImages.length > 1 && (
                <>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
            </Carousel>
          </div>
          
          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-construction-lightgray rounded-lg">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-construction-yellow" />
              <div>
                <p className="text-sm text-construction-gray">Location</p>
                <p className="font-medium">{project.location}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-construction-yellow" />
              <div>
                <p className="text-sm text-construction-gray">Completed</p>
                <p className="font-medium">{project.year}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-construction-yellow" />
              <div>
                <p className="text-sm text-construction-gray">Category</p>
                <p className="font-medium">{project.category}</p>
              </div>
            </div>
          </div>
          
          {/* Project Description */}
          <div>
            <h3 className="text-lg font-semibold text-construction-blue mb-3">
              Project Overview
            </h3>
            <p className="text-construction-gray leading-relaxed">
              {project.description}
            </p>
          </div>
          
          {/* Additional Details */}
          <div>
            <h3 className="text-lg font-semibold text-construction-blue mb-3">
              Project Highlights
            </h3>
            <ul className="list-disc list-inside space-y-2 text-construction-gray">
              <li>High-quality construction materials and techniques</li>
              <li>Sustainable and environmentally conscious design</li>
              <li>Compliance with all local building codes and regulations</li>
              <li>On-time delivery and within budget completion</li>
              <li>Comprehensive quality assurance and testing</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
