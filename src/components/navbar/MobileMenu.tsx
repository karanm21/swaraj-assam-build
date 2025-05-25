
import React from 'react';
import NavLink from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: { name: string; href: string }[];
  onLinkClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navLinks, onLinkClick }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            name={link.name}
            href={link.href}
            onClick={onLinkClick}
            className="py-2 text-left"
          />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
