
import React from 'react';

interface AbstractBackgroundProps {
  variant?: 'blue' | 'light';
}

const AbstractBackground: React.FC<AbstractBackgroundProps> = ({ variant = 'blue' }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Blueprint Grid Lines */}
      <div className="absolute inset-0 opacity-20">
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

      {/* Enhanced Diagonal Blueprint Lines */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" className="absolute inset-0">
          <path 
            d="M-50,100 L150,0 M100,100 L300,0 M250,100 L450,0 M400,100 L600,0 M550,100 L750,0 M700,100 L900,0 M-100,200 L200,0 M150,200 L450,0 M350,200 L650,0" 
            stroke={variant === 'blue' ? "#ffffff" : "#164B87"} 
            strokeWidth="2" 
            strokeDasharray="8,12"
          />
        </svg>
      </div>

      {/* Animated Connecting Dots Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <animate id="dot-animation" 
              attributeName="opacity" 
              values="0.3;0.8;0.3" 
              dur="3s" 
              repeatCount="indefinite"
            />
          </defs>
          
          {/* Dot Grid */}
          {Array.from({ length: 8 }, (_, row) =>
            Array.from({ length: 12 }, (_, col) => {
              const x = (col + 1) * 100;
              const y = (row + 1) * 80;
              return (
                <g key={`${row}-${col}`}>
                  <circle
                    cx={x}
                    cy={y}
                    r="2"
                    fill={variant === 'blue' ? "#ffffff" : "#164B87"}
                    opacity="0.4"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.2;0.7;0.2"
                      dur={`${2 + Math.random() * 2}s`}
                      repeatCount="indefinite"
                      begin={`${Math.random() * 2}s`}
                    />
                  </circle>
                  
                  {/* Connecting Lines */}
                  {col < 11 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x + 100}
                      y2={y}
                      stroke={variant === 'blue' ? "#ffffff" : "#164B87"}
                      strokeWidth="1"
                      opacity="0.2"
                      strokeDasharray="2,4"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.1;0.4;0.1"
                        dur="4s"
                        repeatCount="indefinite"
                        begin={`${Math.random() * 3}s`}
                      />
                    </line>
                  )}
                  
                  {row < 7 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x}
                      y2={y + 80}
                      stroke={variant === 'blue' ? "#ffffff" : "#164B87"}
                      strokeWidth="1"
                      opacity="0.2"
                      strokeDasharray="2,4"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.1;0.4;0.1"
                        dur="4s"
                        repeatCount="indefinite"
                        begin={`${Math.random() * 3}s`}
                      />
                    </line>
                  )}
                  
                  {/* Diagonal Connections */}
                  {col < 11 && row < 7 && Math.random() > 0.7 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x + 100}
                      y2={y + 80}
                      stroke={variant === 'blue' ? "#ffffff" : "#164B87"}
                      strokeWidth="1"
                      opacity="0.15"
                      strokeDasharray="1,3"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.05;0.3;0.05"
                        dur="5s"
                        repeatCount="indefinite"
                        begin={`${Math.random() * 4}s`}
                      />
                    </line>
                  )}
                </g>
              );
            })
          )}
        </svg>
      </div>

      {/* Enhanced Construction Frame Elements */}
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
