import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import NavLink from './NavLink';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#buttons", label: "Buttons" },
  { href: "#contact", label: "Collaborate" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[rgba(0,0,0,0.4)] [box-shadow:20px_20px_40px_-6px_rgba(0,0,0,0.2)] backdrop-filter backdrop-blur-[20px] z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">  
          <div className="flex items-center">
            <Code className="h-8 w-8 text-indigo-600" />
            <a href="#home">
              <span className="ml-2 text-xl font-bold text-white hover:text-indigo-600">ButtonStudio</span></a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                 {isMenuOpen ? <X className="h-6 w-6 bg-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <NavLink key={link.href} {...link} mobile />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;