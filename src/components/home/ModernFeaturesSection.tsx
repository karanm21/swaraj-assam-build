
import React from 'react';
import CustomFeature from './CustomFeature';

const ModernFeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Commercial Projects",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=64&h=64&fit=crop"
    },
    {
      title: "Expert Team", 
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop"
    },
    {
      title: "Project Analytics",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa", 
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop"
    },
    {
      title: "Flexible Payment",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=64&h=64&fit=crop"
    },
    {
      title: "Safe Construction", 
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa",
      thumbnail: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=64&h=64&fit=crop"
    },
    {
      title: "Project Milestones",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=64&h=64&fit=crop"
    },
    {
      title: "Quality Assurance",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop"
    },
    {
      title: "Cost Management", 
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=64&h=64&fit=crop"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <CustomFeature
              key={index}
              title={feature.title}
              description={feature.description}
              thumbnail={feature.thumbnail}
              thumbnailAlt={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeaturesSection;
