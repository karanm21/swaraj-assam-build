
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-white/95 backdrop-blur-sm border border-construction-yellow/20 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-construction-blue mb-4">Our Vision</h3>
              <p className="text-lg text-construction-gray leading-relaxed">
                To be the leading construction company in Northeast India, transforming the region's infrastructure landscape with innovative solutions and sustainable practices.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm border border-construction-blue/20 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-construction-blue mb-4">Our Mission</h3>
              <p className="text-lg text-construction-gray leading-relaxed">
                Delivering world-class construction services that exceed client expectations while contributing to the economic growth and development of our community.
              </p>
            </div>
          </div>

          {/* Right Stats - Individual boxes */}
          <div className="grid grid-cols-2 gap-6">
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

        {/* Features Grid - Individual boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-none bg-white/95 backdrop-blur-sm shadow-lg">
              <CardContent className="p-0">
                <div className="text-construction-yellow mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-construction-blue mb-2">{feature.title}</h4>
                <p className="text-sm text-construction-gray">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
