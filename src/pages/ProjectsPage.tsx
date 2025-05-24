
import React from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
