
import React from 'react';
import Navbar from '@/components/Navbar';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 bg-construction-lightgray">
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
