
import React from 'react';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 bg-white">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
