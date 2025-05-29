
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-construction-lightgray relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title relative">
            Contact Us
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-construction-yellow rounded-full"></div>
          </h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto leading-relaxed mt-6">
            Reach out to us for inquiries about our services or to discuss your construction project needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Enhanced Contact Information */}
          <div className="space-y-6 animate-on-scroll">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="flex items-center p-6 space-x-4">
                <div className="bg-construction-yellow/20 p-4 rounded-full group-hover:bg-construction-yellow/30 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-construction-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-construction-darkblue group-hover:text-construction-blue transition-colors duration-300">Phone</h3>
                  <p className="text-construction-gray">+91 1234567890</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="flex items-center p-6 space-x-4">
                <div className="bg-construction-yellow/20 p-4 rounded-full group-hover:bg-construction-yellow/30 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-construction-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-construction-darkblue group-hover:text-construction-blue transition-colors duration-300">Email</h3>
                  <p className="text-construction-gray">info@swarajinfra.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="flex items-center p-6 space-x-4">
                <div className="bg-construction-yellow/20 p-4 rounded-full group-hover:bg-construction-yellow/30 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-construction-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-construction-darkblue group-hover:text-construction-blue transition-colors duration-300">Address</h3>
                  <p className="text-construction-gray">
                    123 Main Street, Guwahati, Assam, India
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="flex items-center p-6 space-x-4">
                <div className="bg-construction-yellow/20 p-4 rounded-full group-hover:bg-construction-yellow/30 transition-colors duration-300">
                  <Clock className="h-6 w-6 text-construction-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-construction-darkblue group-hover:text-construction-blue transition-colors duration-300">Business Hours</h3>
                  <p className="text-construction-gray">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2 animate-on-scroll">
            <Card className="border-none shadow-xl h-full relative overflow-hidden">
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-construction-yellow/10 to-transparent rounded-bl-full"></div>
              
              <CardContent className="p-8 h-full flex flex-col relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-construction-blue mb-2">Send us a Message</h3>
                  <p className="text-construction-gray">We'll get back to you within 24 hours</p>
                </div>
                
                <form className="space-y-6 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-construction-gray">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="border-construction-gray/30 focus:border-construction-blue transition-colors duration-300 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-construction-gray">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="border-construction-gray/30 focus:border-construction-blue transition-colors duration-300 h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-construction-gray">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className="border-construction-gray/30 focus:border-construction-blue transition-colors duration-300 h-12"
                    />
                  </div>
                  
                  <div className="space-y-2 flex-1">
                    <label htmlFor="message" className="text-sm font-medium text-construction-gray">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, timeline, and any specific details..."
                      className="min-h-[150px] border-construction-gray/30 focus:border-construction-blue transition-colors duration-300 flex-1 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-construction-blue text-white hover:bg-construction-blue/90 w-full h-12 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Assam Map Section */}
        <div className="mt-16 animate-on-scroll">
          <div className="relative bg-gradient-to-r from-construction-blue to-construction-darkblue p-8 rounded-2xl shadow-2xl overflow-hidden">
            {/* Assam Map Background */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0">
                {/* Simplified Assam state outline */}
                <path 
                  d="M50,80 L80,60 L120,50 L180,45 L220,55 L280,65 L320,80 L350,100 L360,130 L340,150 L300,160 L250,155 L200,150 L150,145 L100,140 L70,120 Z" 
                  fill="none" 
                  stroke="#F4C542" 
                  strokeWidth="2" 
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                {/* Guwahati marker */}
                <circle cx="180" cy="100" r="4" fill="#F4C542" className="animate-pulse" />
                <text x="190" y="105" fill="#F4C542" fontSize="12" className="font-semibold">Guwahati</text>
                
                {/* Decorative elements representing rivers */}
                <path 
                  d="M60,90 Q120,110 180,105 T300,120" 
                  fill="none" 
                  stroke="#F4C542" 
                  strokeWidth="1" 
                  strokeDasharray="3,3" 
                  opacity="0.6"
                />
                <path 
                  d="M80,130 Q140,135 200,130 T320,140" 
                  fill="none" 
                  stroke="#F4C542" 
                  strokeWidth="1" 
                  strokeDasharray="3,3" 
                  opacity="0.6"
                />
              </svg>
            </div>
            
            {/* Floating geometric elements */}
            <div className="absolute top-4 right-4 w-12 h-12 border-2 border-construction-yellow opacity-20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-construction-yellow opacity-20 rotate-45"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Visit Our Office in <span className="text-construction-yellow">Assam</span>
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
                Located in the heart of Guwahati, we serve construction projects across Assam. 
                Come visit us for a personalized consultation about your construction needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-construction-yellow text-construction-darkblue font-semibold px-8 py-4 rounded-lg hover:bg-construction-yellow/90 transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Directions to Guwahati
                </button>
                <div className="text-construction-yellow/80 text-sm">
                  📍 Serving all of Assam & Northeast India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
