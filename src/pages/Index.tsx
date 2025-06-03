
import React from 'react';
import Navbar from '@/components/Navbar';
import ParallaxHome from '@/components/ParallaxHome';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ParallaxHome />
      <Footer />
    </div>
  );
};

export default Index;
