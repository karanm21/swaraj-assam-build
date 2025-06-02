
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Briefcase, Clock, MapPin, GraduationCap, DollarSign } from 'lucide-react';

const jobOpenings = [
  {
    title: "Civil Site Engineer",
    company: "P.G Construction",
    location: "Guwahati, Assam",
    type: "Full-time",
    experience: "2-7 years",
    qualification: "Graduates in Civil Engineering or Diploma in Civil Engineering",
    salary: "Negotiable",
    description: "We are seeking an experienced Civil Site Engineer to join our team and oversee construction activities at project sites.",
    requirements: [
      "RCC structure work experience",
      "Good knowledge of Drawing study",
      "Preparing BBS at the site level",
      "Quantity Surveying",
      "Preparing daily reports",
      "Good communication skills",
      "Can operate the Auto level machine",
      "Sound knowledge in MS-Excel"
    ],
    formLink: "https://forms.google.com/civil-site-engineer"
  },
  {
    title: "Project Manager",
    company: "P.G Construction", 
    location: "Guwahati, Assam",
    type: "Full-time",
    experience: "5-10 years",
    qualification: "Bachelor's degree in Civil Engineering or Construction Management",
    salary: "Competitive Package",
    description: "Looking for an experienced Project Manager to lead and coordinate multiple construction projects from inception to completion.",
    requirements: [
      "Experience in project planning and execution",
      "Team management and leadership skills",
      "Knowledge of construction methods and materials",
      "Budget management and cost control",
      "Client relationship management",
      "Proficiency in project management software",
      "Strong problem-solving abilities",
      "Excellent communication and presentation skills"
    ],
    formLink: "https://forms.google.com/project-manager"
  }
];

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  
  return (
    <section id="careers" className="section-padding bg-construction-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title relative">CURRENT OPENINGS
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-construction-yellow rounded-full"></div>
          </h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto">
            Join our team of talented professionals and be part of Assam's growing infrastructure development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-on-scroll">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-construction-blue mb-2">{job.title}</h3>
                  <p className="text-lg text-construction-gray font-medium">{job.company}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-construction-yellow" />
                    <span className="text-construction-gray">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-construction-yellow" />
                    <span className="text-construction-gray">{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-construction-yellow" />
                    <span className="text-construction-gray">{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-construction-yellow" />
                    <span className="text-construction-gray">{job.salary}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-5 w-5 text-construction-yellow" />
                    <span className="font-semibold text-construction-blue">Qualification:</span>
                  </div>
                  <p className="text-construction-gray">{job.qualification}</p>
                </div>
                
                <p className="text-construction-gray mb-6">{job.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-construction-blue text-construction-blue hover:bg-construction-blue hover:text-white flex-1"
                        onClick={() => setSelectedJob(job)}
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{selectedJob?.title}</DialogTitle>
                        <p className="text-construction-gray">{selectedJob?.company}</p>
                      </DialogHeader>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 mt-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-construction-gray" />
                          <span>{selectedJob?.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-construction-gray" />
                          <span>{selectedJob?.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-construction-gray" />
                          <span>{selectedJob?.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-construction-gray" />
                          <span>{selectedJob?.salary}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-construction-yellow" />
                          Qualification:
                        </h4>
                        <p className="mb-4">{selectedJob?.qualification}</p>
                      </div>
                      
                      <p className="mb-4">{selectedJob?.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-3">Required Skills & Experience:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {selectedJob?.requirements.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        className="bg-construction-blue text-white hover:bg-construction-blue/90 w-full"
                        onClick={() => window.open(selectedJob?.formLink, '_blank')}
                      >
                        Apply for this Position
                      </Button>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    className="bg-construction-yellow text-black hover:bg-construction-yellow/90 flex-1"
                    onClick={() => window.open(job.formLink, '_blank')}
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto animate-on-scroll">
            <h3 className="text-xl font-semibold text-construction-blue mb-4">
              Don't see a position that fits?
            </h3>
            <p className="text-construction-gray mb-4">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button 
              className="bg-construction-blue text-white hover:bg-construction-blue/90"
              onClick={() => window.open('https://forms.google.com/general-application', '_blank')}
            >
              Submit General Application
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Careers;
