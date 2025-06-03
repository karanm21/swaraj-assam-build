
import React, { useEffect } from 'react';
import './accordion.css';

interface AccordionProps {
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
}

const CustomAccordion: React.FC<AccordionProps> = ({
  text = "What types of construction services do you offer?",
  text1 = "We provide comprehensive construction services including residential, commercial, and infrastructure development projects across Guwahati and Assam.",
  text2 = "How do you ensure quality in your projects?",
  text3 = "We maintain strict quality control measures with experienced supervisors, regular inspections, and use of premium materials from certified suppliers.",
  text4 = "What is your typical project timeline?",
  text5 = "Project timelines vary based on scope and complexity. We provide detailed schedules during planning phase and maintain transparent communication throughout."
}) => {
  useEffect(() => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]');
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]');
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]');

    accordionContents.forEach((accordionContent) => {
      (accordionContent as HTMLElement).style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
          (accordionContent as HTMLElement).style.display = "none";
        });

        accordionIcons.forEach((accordionIcon) => {
          (accordionIcon as HTMLElement).style.transform = "rotate(0deg)";
        });

        (accordionContents[index] as HTMLElement).style.display = "flex";
        (accordionIcons[index] as HTMLElement).style.transform = "rotate(180deg)";
      });
    });
  }, []);

  return (
    <div className="accordion-accordion">
      <div
        data-role="accordion-container"
        className="accordion-element1 accordion-element"
      >
        <div className="accordion-details1">
          <span className="accordion-text1">{text}</span>
          <span data-role="accordion-content" className="accordion-text2">
            {text1}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon1"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element2 accordion-element"
      >
        <div className="accordion-details2">
          <span className="accordion-text3">{text2}</span>
          <span data-role="accordion-content" className="accordion-text4">
            {text3}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon3"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element3 accordion-element"
      >
        <div className="accordion-details3">
          <span className="accordion-text5">{text4}</span>
          <span data-role="accordion-content" className="accordion-text6">
            {text5}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon5"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
    </div>
  );
};

export default CustomAccordion;
