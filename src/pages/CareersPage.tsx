
import React from 'react';
import Navbar from '@/components/Navbar';
import Careers from '@/components/Careers';
import Footer from '@/components/Footer';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 bg-construction-lightgray">
        <Careers />
      </div>
      <Footer />
    </div>
  );
};

export default CareersPage;
