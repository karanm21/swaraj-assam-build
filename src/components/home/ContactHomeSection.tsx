
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactHomeSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="glass-card inline-block p-6 mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              GET IN <span className="text-construction-yellow">TOUCH</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to start your next project? Contact us for a consultation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300 animate-fade-in">
              <div className="flex items-center space-x-4">
                <div className="bg-construction-yellow/20 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-construction-yellow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Phone</h3>
                  <p className="text-white/80">+91 1234567890</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-4">
                <div className="bg-construction-yellow/20 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-construction-yellow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Email</h3>
                  <p className="text-white/80">info@swarajinfra.com</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4">
                <div className="bg-construction-yellow/20 p-4 rounded-full">
                  <MapPin className="h-6 w-6 text-construction-yellow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Address</h3>
                  <p className="text-white/80">123 Main Street, Guwahati, Assam, India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/90">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-construction-yellow"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/90">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-construction-yellow"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/90">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-construction-yellow"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/90">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-construction-yellow"
                  />
                </div>
                
                <Button type="submit" className="bg-construction-yellow text-black hover:bg-construction-yellow/90 w-full group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHomeSection;
