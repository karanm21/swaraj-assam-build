
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

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine which section is in view
      const sections = ['hero', 'about', 'services', 'projects', 'team', 'gallery', 'careers', 'contact'];
      let currentSection = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80, // Adjusting for navbar height
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
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

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Who We Are', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Our Work', href: 'projects' },
    { name: 'Our Team', href: 'team' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Careers', href: 'careers' },
    { name: 'Contact Us', href: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.href)}
              className={`text-construction-gray hover:text-construction-blue font-medium transition-colors relative ${
                activeSection === link.href ? 'text-construction-blue' : ''
              }`}
            >
              {link.name}
              {activeSection === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-construction-yellow mt-0.5 rounded-full"></span>
              )}
            </button>
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
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-construction-yellow text-black hover:bg-construction-yellow/90"
          >
            Get a Quote
          </Button>
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
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className={`text-construction-gray hover:text-construction-blue font-medium py-2 transition-colors text-left ${
                  activeSection === link.href ? 'text-construction-blue' : ''
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-construction-yellow text-black hover:bg-construction-yellow/90 w-full"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
