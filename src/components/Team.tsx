
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: "Rajesh Kumar Singh",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    bio: "With over 20 years of experience in the construction industry, Rajesh leads our team with vision and expertise in infrastructure development.",
    email: "rajesh@swarajinfra.com",
    facebook: "https://facebook.com/rajeshkumarsingh",
    instagram: "https://instagram.com/rajeshkumarsingh"
  },
  {
    name: "Priya Sharma",
    position: "Chief Architect & Co-Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    bio: "Priya's innovative architectural designs have won multiple awards and she brings creativity and technical excellence to every project.",
    email: "priya@swarajinfra.com",
    facebook: "https://facebook.com/priyasharma",
    instagram: "https://instagram.com/priyasharma"
  },
  {
    name: "Amit Patel",
    position: "Senior Civil Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    bio: "Amit specializes in structural engineering and ensures that all our projects meet the highest safety and quality standards.",
    email: "amit@swarajinfra.com",
    facebook: "https://facebook.com/amitpatel",
    instagram: "https://instagram.com/amitpatel"
  },
  {
    name: "Neha Gupta",
    position: "Project Engineer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    bio: "Neha's technical expertise in project management ensures that all our structures are delivered on time and within budget.",
    email: "neha@swarajinfra.com",
    facebook: "https://facebook.com/nehagupta",
    instagram: "https://instagram.com/nehagupta"
  },
  {
    name: "Suresh Borah",
    position: "Senior Site Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    bio: "Suresh oversees on-site operations and ensures quality control throughout the construction process with his 15 years of experience.",
    email: "suresh@swarajinfra.com",
    facebook: "https://facebook.com/sureshborah",
    instagram: "https://instagram.com/sureshborah"
  },
  {
    name: "Ankita Das",
    position: "Structural Engineer",
    image: "https://images.unsplash.com/photo-1494790108755-2616c2b2e29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    bio: "Ankita brings innovative structural solutions and advanced engineering techniques to our complex construction projects.",
    email: "ankita@swarajinfra.com",
    facebook: "https://facebook.com/ankitadas",
    instagram: "https://instagram.com/ankitadas"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-construction-blue mb-1">{member.name}</h3>
                <p className="text-construction-yellow font-medium mb-3">{member.position}</p>
                <p className="text-construction-gray text-sm mb-4">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white p-2"
                    onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                  >
                    📧
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white p-2"
                    onClick={() => window.open(member.facebook, '_blank')}
                  >
                    📘
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white p-2"
                    onClick={() => window.open(member.instagram, '_blank')}
                  >
                    📷
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
