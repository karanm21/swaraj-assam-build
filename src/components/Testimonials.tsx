
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    position: "CEO, Sharma Developers",
    text: "Swaraj Infra completed our office complex ahead of schedule. Their attention to detail and quality workmanship exceeded our expectations. We'll definitely be working with them on future projects.",
  },
  {
    name: "Priya Patel",
    position: "Director, Patel Housing",
    text: "Working with Swaraj Infra was a seamless experience. Their team was professional, responsive, and delivered exactly what they promised. The quality of construction was outstanding.",
  },
  {
    name: "Amit Bora",
    position: "Project Manager, Assam Highways",
    text: "Swaraj Infra's expertise in infrastructure projects is unmatched. They navigated complex challenges with ease and kept us informed throughout the entire process. A truly reliable partner.",
  },
];

const Testimonials: React.FC = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto">
            Hear from those who have experienced our dedication to excellence and quality construction.
          </p>
        </div>
        
        <div 
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-md mx-4">
                    <CardContent className="p-8">
                      <Quote className="h-10 w-10 text-construction-yellow mb-4 mx-auto" />
                      <p className="text-lg mb-6 text-construction-gray text-center">
                        "{testimonial.text}"
                      </p>
                      <div className="text-center">
                        <h4 className="font-semibold text-construction-darkblue">{testimonial.name}</h4>
                        <p className="text-construction-gray">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static inset-0 translate-y-0 bg-construction-blue text-white hover:bg-construction-blue/90" />
              <CarouselNext className="relative static inset-0 translate-y-0 bg-construction-blue text-white hover:bg-construction-blue/90" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
