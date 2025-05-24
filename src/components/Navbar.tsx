
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, Search } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Search functionality
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Implement search functionality here
      console.log('Searching for:', searchQuery);
      // For now, we'll just alert the search term
      alert(`Searching for: ${searchQuery}`);
    }
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
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`text-construction-gray hover:text-construction-blue font-medium transition-colors relative ${
                location.pathname === link.href ? 'text-construction-blue' : ''
              }`}
            >
              {link.name}
              {location.pathname === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-construction-yellow mt-0.5 rounded-full"></span>
              )}
            </Link>
          ))}
          
          {/* Search Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5 text-construction-blue" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Search</DialogTitle>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search the website..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" onClick={handleSearch}>
                  Search
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Link to="/contact">
            <Button 
              className="bg-construction-yellow text-black hover:bg-construction-yellow/90"
            >
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2" aria-label="Search">
                <Search className="h-5 w-5 text-construction-blue" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Search</DialogTitle>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search the website..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" onClick={handleSearch}>
                  Search
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? (
              <X size={24} className="text-construction-blue" />
            ) : (
              <Menu size={24} className="text-construction-blue" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={closeMenu}
                className={`text-construction-gray hover:text-construction-blue font-medium py-2 transition-colors text-left ${
                  location.pathname === link.href ? 'text-construction-blue' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={closeMenu}>
              <Button 
                className="bg-construction-yellow text-black hover:bg-construction-yellow/90 w-full"
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
