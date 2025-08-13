import React, { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Bot className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Supplier IT</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Bosh sahifa
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Biz haqimizda
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Xizmatlar
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Bog'lanish
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2"
              >
                Bosh sahifa
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2"
              >
                Biz haqimizda
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2"
              >
                Xizmatlar
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium mx-4"
              >
                Bog'lanish
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;