
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-construction-darkblue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-white/80 mt-4">
              A leading construction company in Guwahati, Assam, dedicated to building exceptional structures with quality and integrity.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-construction-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-construction-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-construction-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/80 hover:text-construction-yellow transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-construction-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-white/80">Commercial Construction</li>
              <li className="text-white/80">Residential Projects</li>
              <li className="text-white/80">Infrastructure Development</li>
              <li className="text-white/80">Industrial Construction</li>
              <li className="text-white/80">Land Development</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <address className="not-italic text-white/80 space-y-2">
              <p>123 Main Street, Guwahati, Assam, India</p>
              <p>Phone: +91 1234567890</p>
              <p>Email: info@swarajinfra.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/70">
          <p>&copy; {currentYear} Swaraj Infra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
