
import React from 'react';
import Navbar from '@/components/Navbar';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const StatsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-construction-lightgray">
      <Navbar />
      <div className="pt-20">
        <Stats />
      </div>
      <Footer />
    </div>
  );
};

export default StatsPage;
