import React from 'react';
import { Code, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-labs-dark py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-6 w-6 text-labs-green mr-2" />
            <span className="text-white font-bold">Just Create Labs</span>
          </div>
          
          <div className="text-labs-muted text-sm">
            © {new Date().getFullYear()} Just Create Labs. All rights reserved.
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-labs-muted hover:text-labs-green transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-labs-muted hover:text-labs-green transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-labs-muted hover:text-labs-green transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;