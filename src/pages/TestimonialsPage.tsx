
import React from 'react';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 bg-construction-lightgray">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
