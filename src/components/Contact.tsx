
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

        {/* Enhanced Assam Map Section with Real Map Background */}
        <div className="mt-16 animate-on-scroll">
          <div className="relative bg-gradient-to-r from-construction-blue to-construction-darkblue p-8 rounded-2xl shadow-2xl overflow-hidden min-h-[400px]">
            {/* Real Assam Map Background */}
            <div className="absolute inset-0 opacity-30">
              <svg viewBox="0 0 800 400" className="w-full h-full absolute inset-0">
                {/* Detailed Assam state outline with realistic proportions */}
                <path 
                  d="M100,150 L140,120 L200,100 L280,90 L360,95 L440,110 L520,130 L580,150 L650,170 L720,190 L740,220 L720,250 L680,280 L620,300 L560,310 L500,315 L440,310 L380,300 L320,290 L260,280 L200,270 L150,250 L110,220 Z" 
                  fill="rgba(244, 197, 66, 0.2)" 
                  stroke="#F4C542" 
                  strokeWidth="3" 
                  strokeDasharray="8,4"
                  className="animate-pulse"
                />
                
                {/* Major cities */}
                <circle cx="320" cy="200" r="6" fill="#F4C542" className="animate-pulse" />
                <text x="330" y="205" fill="#F4C542" fontSize="14" className="font-bold">Guwahati</text>
                
                <circle cx="480" cy="180" r="4" fill="#F4C542" opacity="0.8" />
                <text x="490" y="185" fill="#F4C542" fontSize="12" opacity="0.8">Jorhat</text>
                
                <circle cx="620" cy="200" r="4" fill="#F4C542" opacity="0.8" />
                <text x="630" y="205" fill="#F4C542" fontSize="12" opacity="0.8">Dibrugarh</text>
                
                <circle cx="280" cy="240" r="4" fill="#F4C542" opacity="0.8" />
                <text x="290" y="245" fill="#F4C542" fontSize="12" opacity="0.8">Silchar</text>
                
                {/* Brahmaputra River */}
                <path 
                  d="M120,180 Q200,190 320,195 Q440,200 580,210 Q650,215 720,220" 
                  fill="none" 
                  stroke="#4A90E2" 
                  strokeWidth="4" 
                  strokeDasharray="6,3" 
                  opacity="0.6"
                />
                <text x="400" y="230" fill="#4A90E2" fontSize="11" opacity="0.7">Brahmaputra River</text>
                
                {/* Mountain ranges indicated by triangular patterns */}
                <path d="M100,120 L120,100 L140,120 L160,100 L180,120" stroke="#F4C542" strokeWidth="2" fill="none" opacity="0.4" />
                <path d="M600,140 L620,120 L640,140 L660,120 L680,140" stroke="#F4C542" strokeWidth="2" fill="none" opacity="0.4" />
                
                {/* State boundaries indication */}
                <path d="M100,150 L80,200" stroke="#F4C542" strokeWidth="2" strokeDasharray="3,3" opacity="0.5" />
                <text x="50" y="190" fill="#F4C542" fontSize="10" opacity="0.7">West Bengal</text>
                
                <path d="M740,220 L760,250" stroke="#F4C542" strokeWidth="2" strokeDasharray="3,3" opacity="0.5" />
                <text x="720" y="280" fill="#F4C542" fontSize="10" opacity="0.7">Arunachal Pradesh</text>
                
                {/* Grid overlay for map authenticity */}
                <defs>
                  <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F4C542" strokeWidth="0.5" opacity="0.2"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapGrid)" />
              </svg>
            </div>
            
            {/* Floating geometric elements representing infrastructure */}
            <div className="absolute top-8 right-8 w-16 h-16 border-2 border-construction-yellow opacity-30 rounded-lg animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-construction-yellow opacity-20 rotate-45 animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-construction-yellow opacity-25 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-4xl font-bold text-white mb-6">
                Visit Our Office in <span className="text-construction-yellow">Guwahati, Assam</span>
              </h3>
              <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Strategically located in the heart of Guwahati, we serve construction projects across all districts of Assam. 
                Our central location allows us to efficiently manage projects throughout the Northeast region.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="bg-construction-yellow text-construction-darkblue font-bold px-10 py-4 rounded-xl hover:bg-construction-yellow/90 transition-all duration-300 hover:scale-105 shadow-xl text-lg">
                  🗺️ Get Directions to Our Guwahati Office
                </button>
                <div className="flex flex-col items-center">
                  <div className="text-construction-yellow font-semibold text-lg mb-2">
                    📍 Service Coverage Area
                  </div>
                  <div className="text-construction-yellow/80 text-sm text-center">
                    All 33 Districts of Assam<br/>
                    Complete Northeast India
                  </div>
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
