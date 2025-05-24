
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  name: string;
  href: string;
  onClick?: () => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, href, onClick, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`text-construction-gray hover:text-construction-blue font-medium transition-colors relative ${
        isActive ? 'text-construction-blue' : ''
      } ${className}`}
    >
      {name}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-construction-yellow mt-0.5 rounded-full"></span>
      )}
    </Link>
  );
};

export default NavLink;
