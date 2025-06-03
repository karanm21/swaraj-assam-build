
import React from 'react';
import './announcement.css';

interface AnnouncementProps {
  title?: string;
  button?: string;
  rootClassName?: string;
}

const CustomAnnouncement: React.FC<AnnouncementProps> = ({
  title = "We updated our construction processes and safety standards.",
  button = "Learn more →",
  rootClassName = ""
}) => {
  return (
    <div className={`announcement-announcement ${rootClassName}`}>
      <span className="announcement-title">{title}</span>
      <div className="announcement-button">
        <span className="announcement-button-text">{button}</span>
      </div>
    </div>
  );
};

export default CustomAnnouncement;
