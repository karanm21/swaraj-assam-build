
import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
