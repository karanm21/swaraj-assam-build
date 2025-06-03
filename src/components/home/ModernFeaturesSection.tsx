
import React from 'react';
import { Building, Users, BarChart, CreditCard, Shield, Target, TrendingUp, Wallet } from 'lucide-react';

const ModernFeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial Projects",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Project Analytics",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Flexible Payment",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe Construction",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Project Milestones",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa"
    },
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Cost Management",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 rounded-full px-6 py-2 mb-6">
            <span className="text-construction-blue font-medium">Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you get with Swaraj Infra
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-100 hover:border-construction-blue/20 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-construction-blue mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeaturesSection;
