
import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-construction-lightgray">
      <Navbar />
      <div className="pt-20">
        <div className="bg-construction-lightgray">
          <Services />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
