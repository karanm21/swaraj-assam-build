
import React from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
