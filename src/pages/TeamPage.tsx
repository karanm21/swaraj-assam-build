
import React from 'react';
import Navbar from '@/components/Navbar';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-construction-lightgray">
      <Navbar />
      <div className="pt-20">
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
