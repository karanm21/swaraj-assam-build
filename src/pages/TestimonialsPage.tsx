
import React from 'react';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
