
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: "Rajesh Kumar",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    bio: "With over 20 years of experience in the construction industry, Rajesh leads our team with vision and expertise."
  },
  {
    name: "Priya Sharma",
    position: "Chief Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    bio: "Priya's innovative designs have won multiple awards and she brings creativity to every project."
  },
  {
    name: "Amit Patel",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    bio: "Amit ensures that all our projects are delivered on time and within budget with meticulous planning."
  },
  {
    name: "Neha Gupta",
    position: "Civil Engineer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    bio: "Neha's technical expertise ensures that all our structures are safe, stable and built to last."
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="section-padding bg-construction-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Team</h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto">
            Meet the dedicated professionals behind Swaraj Infra who bring expertise and passion to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-construction-blue mb-1">{member.name}</h3>
                <p className="text-construction-yellow font-medium mb-3">{member.position}</p>
                <p className="text-construction-gray text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
