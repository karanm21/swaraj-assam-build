
import React from 'react';
import './feature.css';

interface FeatureProps {
  title?: string;
  description?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  rootClassName?: string;
}

const CustomFeature: React.FC<FeatureProps> = ({
  title = "Construction",
  description = "Professional construction services with quality materials and experienced team",
  thumbnail = "/vector.svg",
  thumbnailAlt = "feature icon",
  rootClassName = ""
}) => {
  return (
    <div className={`feature-feature ${rootClassName}`}>
      <img
        alt={thumbnailAlt}
        src={thumbnail}
        className="feature-image"
      />
      <div className="feature-content">
        <span className="feature-title">{title}</span>
        <span className="feature-description">{description}</span>
      </div>
    </div>
  );
};

export default CustomFeature;
