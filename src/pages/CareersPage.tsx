
import React from 'react';
import Navbar from '@/components/Navbar';
import Careers from '@/components/Careers';
import Footer from '@/components/Footer';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Careers />
      <Footer />
    </div>
  );
};

export default CareersPage;
