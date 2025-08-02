import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
      <img
          src="/Logo.svg"
          alt="Arkline Studio Logo"
          className="h-8 w-8 object-contain scale-[4.0]"
/>
          <div className="flex items-center">
 <h1
  className="text-2xl not-italic text-gray-900 underline underline-offset-4 decoration-black"
  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
  Arkline Studio
</h1>
            {/* <span className="ml-2 text-sm text-gray-600">Interior Design</span> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+919876543210" className="flex items-center text-sm text-gray-600 hover:text-amber-600">
              <Phone className="h-4 w-4 mr-1" />
              +91 98765 43210
            </a>
            <a href="mailto:contact@arklinestudio.com" className="flex items-center text-sm text-gray-600 hover:text-amber-600">
              <Mail className="h-4 w-4 mr-1" />
              contact@arklinestudio.com
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate(item.path);
                  }}
                  className={`block py-2 text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-amber-600'
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;