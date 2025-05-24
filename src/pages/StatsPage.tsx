
import React from 'react';
import Navbar from '@/components/Navbar';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const StatsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Stats />
      <Footer />
    </div>
  );
};

export default StatsPage;
