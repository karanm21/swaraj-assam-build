
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CustomQuote from './CustomQuote';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "I love working with Swaraj Infra. Their construction quality and attention to detail is exceptional, delivering projects 100% on time.",
      author: "Rajesh Kumar",
      title: "Manager @Vista Construction",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Testing these construction services is a pleasure. The quality and attention to detail is exceptional.",
      author: "Priya Sharma",
      title: "Developer @Vista Infrastructure", 
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1a9?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Wow, awesome work! The team delivered beyond our expectations.",
      author: "Amit Bora",
      title: "Designer @OhBoy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="bg-construction-blue rounded-2xl p-4 w-16 h-16 mx-auto mb-8 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">S</span>
          </div>
        </div>

        <div className="relative">
          <div className="text-center mb-8">
            <CustomQuote
              quote={testimonials[currentTestimonial].quote}
              author={testimonials[currentTestimonial].author}
              title={testimonials[currentTestimonial].title}
              avatar={testimonials[currentTestimonial].avatar}
            />
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-gray-200 hover:border-construction-blue hover:bg-construction-blue hover:text-white transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-gray-200 hover:border-construction-blue hover:bg-construction-blue hover:text-white transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <span className="text-gray-600">Need any help?</span>
          <button className="ml-2 text-construction-blue hover:underline font-medium">
            Get in touch with us right away →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
