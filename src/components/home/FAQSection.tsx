
import React from 'react';
import CustomAccordion from './CustomAccordion';

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 rounded-full px-6 py-2 mb-6">
            <span className="text-construction-blue font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex justify-center">
          <CustomAccordion
            text="What types of construction services do you offer?"
            text1="We provide comprehensive construction services including residential, commercial, and infrastructure development projects across Guwahati and Assam."
            text2="How do you ensure quality in your projects?"
            text3="We maintain strict quality control measures with experienced supervisors, regular inspections, and use of premium materials from certified suppliers."
            text4="What is your typical project timeline?"
            text5="Project timelines vary based on scope and complexity. We provide detailed schedules during planning phase and maintain transparent communication throughout."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
