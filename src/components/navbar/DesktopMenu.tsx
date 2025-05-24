
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavLink from './NavLink';
import SearchDialog from './SearchDialog';

interface DesktopMenuProps {
  navLinks: { name: string; href: string }[];
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ navLinks }) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          name={link.name}
          href={link.href}
        />
      ))}
      
      <SearchDialog />
      
      <Link to="/contact">
        <Button 
          className="bg-construction-yellow text-black hover:bg-construction-yellow/90"
        >
          Get a Quote
        </Button>
      </Link>
    </div>
  );
};

export default DesktopMenu;
