
import React from 'react';
import Navbar from '@/components/Navbar';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;
