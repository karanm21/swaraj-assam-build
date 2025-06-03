
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "I love lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaation ullamco 100%.",
      author: "Andy Smith",
      title: "Manager @Vista Social",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Testing these construction services is a pleasure. The quality and attention to detail is exceptional.",
      author: "Sarah Johnson",
      title: "Developer @Vista Construction",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1a9?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Wow, awesome work! The team delivered beyond our expectations.",
      author: "Mike Chen",
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
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 italic leading-relaxed">
              {testimonials[currentTestimonial].quote}
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].title}
                </div>
              </div>
            </div>
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
