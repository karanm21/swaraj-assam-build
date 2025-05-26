
import React from 'react';
import NavLink from './NavLink';
import SearchDialog from './SearchDialog';

interface DesktopMenuProps {
  navLinks: { name: string; href: string }[];
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ navLinks }) => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          name={link.name}
          href={link.href}
        />
      ))}
      
      <SearchDialog />
    </div>
  );
};

export default DesktopMenu;
