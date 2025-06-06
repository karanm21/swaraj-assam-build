
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { icon: <CheckCircle className="h-6 w-6" />, title: "Quality Craftsmanship", description: "Delivering excellence in every project with attention to detail" },
    { icon: <Clock className="h-6 w-6" />, title: "Timely Delivery", description: "Meeting deadlines without compromising on quality standards" },
    { icon: <Users className="h-6 w-6" />, title: "Professional Team", description: "Skilled professionals with years of industry experience" },
    { icon: <Award className="h-6 w-6" />, title: "Customer Satisfaction", description: "Building lasting relationships through exceptional service" }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Simple Header without box */}
        <div className="text-center mb-16">
          <h2 className="section-title relative text-4xl font-bold text-construction-blue mb-6">
            ABOUT SWARAJ INFRA
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-construction-yellow rounded-full"></div>
          </h2>
          <p className="text-xl text-construction-gray max-w-4xl mx-auto leading-relaxed">
            Building the future of Assam with over a decade of excellence in construction and infrastructure development
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-construction-blue/10 to-construction-blue/5 backdrop-blur-sm border border-construction-yellow/20 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-construction-blue mb-4">Our Vision</h3>
              <p className="text-lg text-construction-gray leading-relaxed">
                To be the leading construction company in Northeast India, transforming the region's infrastructure landscape with innovative solutions and sustainable practices.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-construction-yellow/10 to-construction-yellow/5 backdrop-blur-sm border border-construction-blue/20 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-construction-blue mb-4">Our Mission</h3>
              <p className="text-lg text-construction-gray leading-relaxed">
                Delivering world-class construction services that exceed client expectations while contributing to the economic growth and development of our community.
              </p>
            </div>
          </div>

          {/* Right Stats - Individual boxes aligned to center */}
          <div className="grid grid-cols-2 gap-6 self-center">
            <Card className="text-center p-6 border-2 border-construction-yellow/20 hover:border-construction-yellow transition-colors bg-white/95 backdrop-blur-sm shadow-lg">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-construction-blue mb-2">10+</div>
                <div className="text-construction-gray">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-construction-blue/20 hover:border-construction-blue transition-colors bg-white/95 backdrop-blur-sm shadow-lg">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-construction-blue mb-2">250+</div>
                <div className="text-construction-gray">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-construction-yellow/20 hover:border-construction-yellow transition-colors bg-white/95 backdrop-blur-sm shadow-lg">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-construction-blue mb-2">120+</div>
                <div className="text-construction-gray">Team Members</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-construction-blue/20 hover:border-construction-blue transition-colors bg-white/95 backdrop-blur-sm shadow-lg">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-construction-blue mb-2">100%</div>
                <div className="text-construction-gray">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Grid - Individual boxes with hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-none bg-white/95 backdrop-blur-sm shadow-lg group">
              <CardContent className="p-0">
                <div className="text-construction-yellow mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-construction-blue mb-2 group-hover:text-construction-yellow transition-colors duration-300">{feature.title}</h4>
                <p className="text-sm text-construction-gray">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Swaraj Infra section without box */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-construction-blue mb-6">Why Choose Swaraj Infra?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-black font-bold text-lg">1</span>
              </div>
              <div>
                <h4 className="font-bold text-construction-blue mb-2 text-lg group-hover:text-construction-yellow transition-colors duration-300">Quality Assurance</h4>
                <p className="text-construction-gray">We maintain the highest standards in every project we undertake with rigorous quality control.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-black font-bold text-lg">2</span>
              </div>
              <div>
                <h4 className="font-bold text-construction-blue mb-2 text-lg group-hover:text-construction-yellow transition-colors duration-300">Timely Delivery</h4>
                <p className="text-construction-gray">Our projects are completed on schedule without compromising quality through efficient project management.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-black font-bold text-lg">3</span>
              </div>
              <div>
                <h4 className="font-bold text-construction-blue mb-2 text-lg group-hover:text-construction-yellow transition-colors duration-300">Customer Focus</h4>
                <p className="text-construction-gray">Your satisfaction is our priority from initial consultation to project completion and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
