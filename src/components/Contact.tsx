
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-construction-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto">
            Reach out to us for inquiries about our services or to discuss your construction project needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-none shadow-md">
              <CardContent className="flex items-center p-6 space-x-4">
                <div className="bg-construction-yellow/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-construction-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-construction-darkblue">Phone</h3>
                  <p className="text-construction-gray">+91 1234567890</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="flex items-center p-6 space-x-4">
                <div className="bg-construction-yellow/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-construction-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-construction-darkblue">Email</h3>
                  <p className="text-construction-gray">info@swarajinfra.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="flex items-center p-6 space-x-4">
                <div className="bg-construction-yellow/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-construction-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-construction-darkblue">Address</h3>
                  <p className="text-construction-gray">
                    123 Main Street, Guwahati, Assam, India
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-md h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <form className="space-y-6 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-construction-gray">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="border-construction-gray/30 focus:border-construction-blue"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-construction-gray">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="border-construction-gray/30 focus:border-construction-blue"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-construction-gray">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className="border-construction-gray/30 focus:border-construction-blue"
                    />
                  </div>
                  
                  <div className="space-y-2 flex-1">
                    <label htmlFor="message" className="text-sm font-medium text-construction-gray">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="min-h-[150px] border-construction-gray/30 focus:border-construction-blue flex-1"
                    />
                  </div>
                  
                  <Button type="submit" className="bg-construction-blue text-white hover:bg-construction-blue/90 w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
