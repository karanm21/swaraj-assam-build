
import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const NavbarToggle: React.FC<NavbarToggleProps> = ({ isOpen, onClick }) => {
  return (
    <button onClick={onClick} className="p-2">
      {isOpen ? (
        <X size={24} className="text-construction-blue" />
      ) : (
        <Menu size={24} className="text-construction-blue" />
      )}
    </button>
  );
};

export default NavbarToggle;
