
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SearchDialog from './navbar/SearchDialog';
import NavbarToggle from './navbar/NavbarToggle';
import DesktopMenu from './navbar/DesktopMenu';
import MobileMenu from './navbar/MobileMenu';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Who We Are', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/projects' },
    { name: 'Our Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/careers' },
    { name: 'Stats', href: '/stats' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        
        {/* Desktop Menu */}
        <DesktopMenu navLinks={navLinks} />

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <SearchDialog />
          <NavbarToggle isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} navLinks={navLinks} onLinkClick={closeMenu} />
    </nav>
  );
};

export default Navbar;
