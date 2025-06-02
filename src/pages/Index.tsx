
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Team from '@/components/Team';
import Gallery from '@/components/Gallery';
import Careers from '@/components/Careers';
import AssamMapSection from '@/components/Map';


const Index: React.FC = () => {
  // Add scroll animation
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add('is-visible');
        }
      });
    };
    
    // Initial check for elements already in view
    animateOnScroll();
    
    // Add event listener for scroll
    window.addEventListener('scroll', animateOnScroll);
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <About />
        <div className="bg-construction-lightgray">
          <Services />
        </div>
        <Projects />
        <div className="bg-construction-lightgray">
          <Team />
        </div>
        <Gallery />
        <div className="bg-construction-lightgray">
          <Careers />
        </div>
        <Stats />
        <div className="bg-construction-lightgray">
          <Testimonials />
        </div>
        <Contact />
        <AssamMapSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
