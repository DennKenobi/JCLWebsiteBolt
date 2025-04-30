import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-labs-dark bg-opacity-95 shadow-lg py-3' : 'bg-transparent py-5'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code className="h-8 w-8 text-labs-green mr-2" />
          <span className="text-white font-bold text-xl">Just Create Labs</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a 
            onClick={() => scrollToSection('hero')}
            className={`nav-link cursor-pointer ${activeSection === 'hero' ? 'active' : ''}`}
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection('about')}
            className={`nav-link cursor-pointer ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection('cyber-division')}
            className={`nav-link cursor-pointer ${activeSection === 'cyber-division' ? 'active' : ''}`}
          >
            Cyber Division
          </a>
          <a 
            onClick={() => scrollToSection('coming-soon')}
            className={`nav-link cursor-pointer ${activeSection === 'coming-soon' ? 'active' : ''}`}
          >
            What's Next
          </a>
          <a 
            onClick={() => scrollToSection('contact')}
            className={`nav-link cursor-pointer ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>
        </nav>
        
        {/* Mobile Navigation Icon */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <X 
              className="h-8 w-8 text-labs-green cursor-pointer" 
              onClick={() => setIsMenuOpen(false)} 
            />
          ) : (
            <Menu 
              className="h-8 w-8 text-labs-green cursor-pointer" 
              onClick={() => setIsMenuOpen(true)} 
            />
          )}
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-labs-dark bg-opacity-95 shadow-lg py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a 
              onClick={() => scrollToSection('hero')}
              className={`nav-link cursor-pointer ${activeSection === 'hero' ? 'active' : ''}`}
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('about')}
              className={`nav-link cursor-pointer ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>
            <a 
              onClick={() => scrollToSection('cyber-division')}
              className={`nav-link cursor-pointer ${activeSection === 'cyber-division' ? 'active' : ''}`}
            >
              Cyber Division
            </a>
            <a 
              onClick={() => scrollToSection('coming-soon')}
              className={`nav-link cursor-pointer ${activeSection === 'coming-soon' ? 'active' : ''}`}
            >
              What's Next
            </a>
            <a 
              onClick={() => scrollToSection('contact')}
              className={`nav-link cursor-pointer ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;