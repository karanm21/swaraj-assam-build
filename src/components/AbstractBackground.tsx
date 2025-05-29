
import React from 'react';

interface AbstractBackgroundProps {
  variant?: 'blue' | 'light';
}

const AbstractBackground: React.FC<AbstractBackgroundProps> = ({ variant = 'blue' }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="blueprint-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path 
                d="M 50 0 L 0 0 0 50" 
                fill="none" 
                stroke={variant === 'blue' ? "#ffffff" : "#164B87"} 
                strokeWidth="1"
                strokeDasharray="2,2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
      </div>

      {/* Diagonal Blueprint Lines */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <path 
            d="M-50,100 L150,0 M100,100 L300,0 M250,100 L450,0 M400,100 L600,0 M550,100 L750,0 M700,100 L900,0" 
            stroke={variant === 'blue' ? "#ffffff" : "#164B87"} 
            strokeWidth="2" 
            strokeDasharray="5,10"
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              variant === 'blue' ? 'bg-white' : 'bg-construction-blue'
            } opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Construction Frame Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 opacity-10">
        <svg width="100%" height="100%">
          <rect 
            width="100%" 
            height="100%" 
            fill="none" 
            stroke={variant === 'blue' ? "#ffffff" : "#164B87"} 
            strokeWidth="2"
            strokeDasharray="3,3"
          />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 w-16 h-16 opacity-10">
        <svg width="100%" height="100%">
          <circle 
            cx="50%" 
            cy="50%" 
            r="30" 
            fill="none" 
            stroke={variant === 'blue' ? "#ffffff" : "#164B87"} 
            strokeWidth="2"
            strokeDasharray="4,4"
          />
        </svg>
      </div>

      <div className="absolute top-1/2 left-5 w-12 h-24 opacity-10">
        <svg width="100%" height="100%">
          <polygon 
            points="24,0 48,48 0,48" 
            fill="none" 
            stroke={variant === 'blue' ? "#ffffff" : "#164B87"} 
            strokeWidth="2"
            strokeDasharray="2,2"
          />
        </svg>
      </div>
    </div>
  );
};

export default AbstractBackground;
