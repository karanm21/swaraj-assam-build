
import React from 'react';
import './quote.css';

interface QuoteProps {
  quote?: string;
  author?: string;
  title?: string;
  avatar?: string;
  rootClassName?: string;
}

const CustomQuote: React.FC<QuoteProps> = ({
  quote = "Working with Swaraj Infra was an exceptional experience. Their attention to detail and commitment to quality exceeded all our expectations.",
  author = "Rajesh Kumar",
  title = "Project Manager @ Assam Infrastructure",
  avatar = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  rootClassName = ""
}) => {
  return (
    <div className={`quote-quote1 ${rootClassName}`}>
      <div className="quote-quote2">
        <span className="quote-quote3">"{quote}"</span>
      </div>
      <div className="quote-people">
        <div className="quote-person">
          <img
            alt="person-avatar"
            src={avatar}
            className="quote-avatar"
          />
          <div className="quote-person-details">
            <span className="quote-text1">{author}</span>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomQuote;
