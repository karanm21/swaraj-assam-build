
import React from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 bg-white">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
