
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import VideoSection from '@/components/home/VideoSection';
import ModernStatsSection from '@/components/home/ModernStatsSection';
import ModernFeaturesSection from '@/components/home/ModernFeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <ModernStatsSection />
      <ModernFeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
