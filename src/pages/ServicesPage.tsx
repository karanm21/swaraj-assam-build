
import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 bg-construction-lightgray">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
