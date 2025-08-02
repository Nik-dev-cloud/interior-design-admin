import React from 'react';
import { Instagram, Facebook, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Arkline Studio</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Creating beautiful, functional spaces that enhance your daily life. Every design tells a story, and I'm here to help you tell yours.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Residential Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design Consultation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Interior Styling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Virtual Design</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">+91 98765 43210</li>
              <li><a href="mailto:contact@arklinestudio.com" className="text-gray-400 hover:text-white transition-colors">contact@arklinestudio.com</a></li>
              <li className="text-gray-400">
                Sanala Road<br />
                Morbi-363641<br />
                Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © 2025 Arkline Studio Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for beautiful spaces.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;