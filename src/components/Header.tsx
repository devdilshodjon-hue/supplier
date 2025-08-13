import React, { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['hero', 'about', 'services', 'portfolio', 'contact', 'blog'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
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

  const isHeroSection = activeSection === 'hero';
  const textColor = isHeroSection ? 'text-white' : 'text-gray-900';
  const logoColor = isHeroSection ? 'text-white' : 'text-blue-600';

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled && !isHeroSection ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection('hero')}
            role="button"
            tabIndex={0}
            aria-label="Supplier IT bosh sahifaga o'tish"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToSection('hero');
              }
            }}
          >
            <Bot className={`w-8 h-8 transition-all duration-500 ${logoColor} hover:rotate-12`} />
            <span className={`text-xl font-bold transition-all duration-500 ${textColor}`}>
              Supplier IT
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Asosiy navigatsiya">
            <button
              onClick={() => scrollToSection('hero')}
              className={`relative transition-all duration-300 font-medium hover:scale-105 ${textColor} hover:text-blue-400 ${
                activeSection === 'hero' ? 'text-blue-400' : ''
              }`}
            >
              Bosh sahifa
              {activeSection === 'hero' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full animate-pulse"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`relative transition-all duration-300 font-medium hover:scale-105 ${textColor} hover:text-blue-400 ${
                activeSection === 'about' ? 'text-blue-400' : ''
              }`}
            >
              Biz haqimizda
              {activeSection === 'about' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full animate-pulse"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`relative transition-all duration-300 font-medium hover:scale-105 ${textColor} hover:text-blue-400 ${
                activeSection === 'services' ? 'text-blue-400' : ''
              }`}
            >
              Xizmatlar
              {activeSection === 'services' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full animate-pulse"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`relative transition-all duration-300 font-medium hover:scale-105 ${textColor} hover:text-blue-400 ${
                activeSection === 'portfolio' ? 'text-blue-400' : ''
              }`}
            >
              Portfolio
              {activeSection === 'portfolio' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full animate-pulse"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className={`relative transition-all duration-300 font-medium hover:scale-105 ${textColor} hover:text-blue-400 ${
                activeSection === 'blog' ? 'text-blue-400' : ''
              }`}
            >
              Blog
              {activeSection === 'blog' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full animate-pulse"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg"
            >
              Bog'lanish
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 transform hover:scale-110 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 transition-all duration-300 ${textColor}`} />
            ) : (
              <Menu className={`w-6 h-6 transition-all duration-300 ${textColor}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4 animate-fade-in-up rounded-b-2xl shadow-xl"
            role="navigation"
            aria-label="Mobil navigatsiya"
          >
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className={`text-left transition-all duration-300 font-medium px-4 py-2 hover:bg-blue-50 rounded-lg transform hover:translate-x-2 ${
                  activeSection === 'hero' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Bosh sahifa
                {activeSection === 'hero' && <span className="ml-2 text-blue-400">●</span>}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-left transition-all duration-300 font-medium px-4 py-2 hover:bg-blue-50 rounded-lg transform hover:translate-x-2 ${
                  activeSection === 'about' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Biz haqimizda
                {activeSection === 'about' && <span className="ml-2 text-blue-400">●</span>}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`text-left transition-all duration-300 font-medium px-4 py-2 hover:bg-blue-50 rounded-lg transform hover:translate-x-2 ${
                  activeSection === 'services' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Xizmatlar
                {activeSection === 'services' && <span className="ml-2 text-blue-400">●</span>}
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`text-left transition-all duration-300 font-medium px-4 py-2 hover:bg-blue-50 rounded-lg transform hover:translate-x-2 ${
                  activeSection === 'portfolio' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Portfolio
                {activeSection === 'portfolio' && <span className="ml-2 text-blue-400">●</span>}
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className={`text-left transition-all duration-300 font-medium px-4 py-2 hover:bg-blue-50 rounded-lg transform hover:translate-x-2 ${
                  activeSection === 'blog' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Blog
                {activeSection === 'blog' && <span className="ml-2 text-blue-400">●</span>}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium mx-4 transform hover:scale-105 shadow-lg"
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
