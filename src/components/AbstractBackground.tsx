
import React from 'react';

interface AbstractBackgroundProps {
  variant?: 'blue' | 'light';
}

const AbstractBackground: React.FC<AbstractBackgroundProps> = ({ variant = 'blue' }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Blueprint Grid Lines - More Visible */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path 
                d="M 40 0 L 0 0 0 40" 
                fill="none" 
                stroke={variant === 'blue' ? "#ffffff" : "#164B87"} 
                strokeWidth="1.5"
                strokeDasharray="3,3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
      </div>

      {/* Enhanced Diagonal Blueprint Lines - More Visible */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <path 
            d="M-50,100 L150,0 M100,100 L300,0 M250,100 L450,0 M400,100 L600,0 M550,100 L750,0 M700,100 L900,0 M-100,200 L200,0 M150,200 L450,0 M350,200 L650,0" 
            stroke={variant === 'blue' ? "#ffffff" : "#164B87"} 
            strokeWidth="2" 
            strokeDasharray="8,12"
          />
        </svg>
      </div>

      {/* Enhanced Floating Particles - More Visible */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              variant === 'blue' ? 'bg-white' : 'bg-construction-blue'
            } opacity-40 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Construction Frame Elements - More Visible */}
      <div className="absolute top-10 left-10 w-24 h-24 opacity-25">
        <svg width="100%" height="100%">
          <rect 
            width="100%" 
            height="100%" 
            fill="none" 
            stroke={variant === 'blue' ? "#ffffff" : "#164B87"} 
            strokeWidth="2.5"
            strokeDasharray="4,4"
          />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 w-20 h-20 opacity-25">
        <svg width="100%" height="100%">
          <circle 
            cx="50%" 
            cy="50%" 
            r="35" 
            fill="none" 
            stroke={variant === 'blue' ? "#ffffff" : "#164B87"} 
            strokeWidth="2.5"
            strokeDasharray="6,6"
          />
        </svg>
      </div>

      <div className="absolute top-1/2 left-5 w-16 h-28 opacity-25">
        <svg width="100%" height="100%">
          <polygon 
            points="32,0 64,56 0,56" 
            fill="none" 
            stroke={variant === 'blue' ? "#ffffff" : "#164B87"} 
            strokeWidth="2.5"
            strokeDasharray="3,3"
          />
        </svg>
      </div>

      {/* Additional Blueprint Elements */}
      <div className="absolute top-1/3 right-1/4 w-12 h-12 opacity-20">
        <svg width="100%" height="100%">
          <path 
            d="M0,24 L24,0 L48,24 L24,48 Z" 
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
