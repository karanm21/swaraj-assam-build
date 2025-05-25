
import React from 'react';
import { Building2, Hammer } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Building2 className="h-8 w-8 text-construction-blue" />
        <Hammer className="h-4 w-4 text-construction-yellow absolute -bottom-1 -right-1" />
      </div>
      <div className="font-bold text-xl md:text-2xl">
        <span className="text-construction-blue">Swaraj</span>
        <span className="text-construction-yellow">Infra</span>
      </div>
    </div>
  );
};

export default Logo;
