
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What is sit amet, consectetur adipiscing elit, sed do?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      question: "What is sit amet, consectetur adipiscing elit, sed do?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat"
    },
    {
      question: "What is sit amet, consectetur adipiscing elit, sed do?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
      question: "What is sit amet, consectetur adipiscing elit, sed do?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
      question: "What is sit amet, consectetur adipiscing elit, sed do?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
      question: "What is sit amet, consectetur adipiscing elit, sed do?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat"
    }
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {faqs.slice(0, 3).map((faq, index) => (
              <Accordion key={index} type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          
          <div className="space-y-4">
            {faqs.slice(3, 6).map((faq, index) => (
              <Accordion key={index + 3} type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index + 3}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
