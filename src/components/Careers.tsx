
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Briefcase, Clock, MapPin } from 'lucide-react';

const jobOpenings = [
  {
    title: "Civil Engineer",
    location: "Guwahati",
    type: "Full-time",
    experience: "3-5 years",
    description: "We are looking for an experienced Civil Engineer to join our team and lead infrastructure projects across Assam.",
    responsibilities: [
      "Plan and design construction projects",
      "Ensure projects comply with legal requirements",
      "Oversee construction activities on site",
      "Prepare and monitor project schedules and budgets",
      "Coordinate with contractors and subcontractors"
    ],
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "3-5 years of experience in construction projects",
      "Knowledge of construction methods and technologies",
      "Strong problem-solving skills",
      "Good communication skills"
    ]
  },
  {
    title: "Project Manager",
    location: "Guwahati",
    type: "Full-time",
    experience: "5+ years",
    description: "Seeking an experienced Project Manager to oversee our residential and commercial construction projects.",
    responsibilities: [
      "Lead project planning and execution",
      "Manage project teams and resources",
      "Ensure projects are completed on time and within budget",
      "Maintain client relationships",
      "Report project status to senior management"
    ],
    requirements: [
      "Bachelor's degree in Engineering or Construction Management",
      "5+ years of experience in construction project management",
      "PMP certification preferred",
      "Excellent leadership and communication skills",
      "Strong organizational skills"
    ]
  },
  {
    title: "Site Supervisor",
    location: "Assam (Various Locations)",
    type: "Full-time",
    experience: "2-4 years",
    description: "We need reliable Site Supervisors to monitor day-to-day construction activities at our various project sites.",
    responsibilities: [
      "Supervise construction activities on site",
      "Ensure compliance with safety regulations",
      "Coordinate with contractors and workers",
      "Report progress to project managers",
      "Address issues that arise during construction"
    ],
    requirements: [
      "Diploma or degree in Civil Engineering",
      "2-4 years of experience in construction supervision",
      "Knowledge of construction methods and safety protocols",
      "Ability to read and interpret construction drawings",
      "Good communication and leadership skills"
    ]
  }
];

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  
  return (
    <section id="careers" className="section-padding bg-construction-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Careers at Swaraj Infra</h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto">
            Join our team of talented professionals and be part of Assam's growing infrastructure development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-construction-blue mb-3">{job.title}</h3>
                
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-construction-gray" />
                    <span className="text-construction-gray">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-construction-gray" />
                    <span className="text-construction-gray">{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-construction-gray" />
                    <span className="text-construction-gray">{job.experience}</span>
                  </div>
                </div>
                
                <p className="text-construction-gray mb-6 line-clamp-3">{job.description}</p>
                
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-construction-blue text-construction-blue hover:bg-construction-blue hover:text-white"
                        onClick={() => setSelectedJob(job)}
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{selectedJob?.title}</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 mt-2">
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
                      </div>
                      
                      <p className="mb-4">{selectedJob?.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-lg mb-2">Responsibilities:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {selectedJob?.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-2">Requirements:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {selectedJob?.requirements.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="bg-construction-blue text-white hover:bg-construction-blue/90 w-full">
                        Apply for this Position
                      </Button>
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-construction-yellow text-black hover:bg-construction-yellow/90">
                        Apply Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Apply for {job.title}</DialogTitle>
                      </DialogHeader>
                      <form className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="Enter your first name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Enter your last name" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" placeholder="Enter your phone number" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="resume">Upload Resume</Label>
                          <Input id="resume" type="file" />
                        </div>
                        <Button type="submit" className="bg-construction-blue text-white hover:bg-construction-blue/90 w-full">
                          Submit Application
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
