import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-amber-800">
              Venedik <span className="text-amber-600">Pastanesi</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Lezzetlerimiz
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              İletişim
            </button>
          </nav>

          {/* Phone Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+903224351435">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Ara
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left px-4"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left px-4"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left px-4"
              >
                Lezzetlerimiz
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left px-4"
              >
                İletişim
              </button>
              <div className="px-4">
                <a href="tel:+903224351435">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Ara
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;