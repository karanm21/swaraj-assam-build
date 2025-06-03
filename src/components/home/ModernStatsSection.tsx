
import React from 'react';

const ModernStatsSection: React.FC = () => {
  const stats = [
    {
      number: "200k",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing"
    },
    {
      number: "$3,5 billions",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing"
    },
    {
      number: "10.000 +",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl lg:text-6xl font-bold text-construction-darkblue mb-4">
                {stat.number}
              </div>
              <div className="text-gray-600 text-lg">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernStatsSection;
