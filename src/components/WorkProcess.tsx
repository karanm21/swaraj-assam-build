
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ClipboardList, 
  PenTool, 
  HardHat, 
  Ruler,
  FileCheck,
  Award
} from 'lucide-react';

const processSteps = [
  {
    icon: <ClipboardList className="h-12 w-12 text-construction-yellow" />,
    title: "Project Planning",
    description: "We begin with thorough planning, understanding your requirements and setting clear objectives for the project."
  },
  {
    icon: <PenTool className="h-12 w-12 text-construction-yellow" />,
    title: "Design & Engineering",
    description: "Our expert team develops detailed designs and engineering plans, ensuring both aesthetics and structural integrity."
  },
  {
    icon: <Ruler className="h-12 w-12 text-construction-yellow" />,
    title: "Material Selection",
    description: "We carefully select high-quality materials that match your requirements for durability, sustainability, and budget."
  },
  {
    icon: <HardHat className="h-12 w-12 text-construction-yellow" />,
    title: "Construction",
    description: "Our skilled workforce executes the construction with precision, adhering to safety standards and timelines."
  },
  {
    icon: <FileCheck className="h-12 w-12 text-construction-yellow" />,
    title: "Quality Assurance",
    description: "Rigorous quality checks are performed throughout the construction process to ensure the highest standards."
  },
  {
    icon: <Award className="h-12 w-12 text-construction-yellow" />,
    title: "Project Delivery",
    description: "We hand over the completed project on time, providing all necessary documentation and support."
  }
];

const WorkProcess: React.FC = () => {
  return (
    <section id="work-process" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Work Process</h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto">
            We follow a comprehensive approach to ensure successful project delivery from conception to completion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {processSteps.map((step, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-construction-blue/10 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-construction-blue mb-3">
                  {step.title}
                </h3>
                <p className="text-construction-gray">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
