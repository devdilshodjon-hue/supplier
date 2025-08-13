import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Smartphone, Bot } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Professional Veb-saytlar', 'Mobil Ilovalar', 'Telegram Botlar', 'Raqamli Yechimlar'];

  useEffect(() => {
    const typeWriter = () => {
      const currentFullText = texts[currentIndex];
      
      if (currentText.length < currentFullText.length) {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => {
          setCurrentText('');
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    };

    const timer = setTimeout(typeWriter, 100);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 pt-20 sm:pt-0"
      role="banner"
      aria-label="Bosh sahifa qismi"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-blue-700/50 to-blue-800/50"></div>
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                transform: `scale(${0.5 + Math.random() * 1.5})`,
              }}
            />
          ))}
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              <div className="w-4 h-4 bg-white rotate-45 animate-spin" style={{
                animationDuration: `${10 + Math.random() * 10}s`
              }}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-8 sm:mt-0">
        <div className="mb-4 md:mb-8 animate-fade-in-up">
          <Bot className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-6 text-white animate-bounce"
               style={{ animationDuration: '2s' }} />
        </div>
        
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-8 animate-fade-in-up animation-delay-200" tabIndex={0}>
          <span className="inline-block animate-pulse">Biz</span>{' '}
          <span className="inline-block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-pulse animation-delay-400">
            Yaratamiz
          </span>
        </h1>
        
        <div className="h-16 sm:h-24 flex items-center justify-center mb-10">
          <span
            aria-live="polite"
            aria-label={`Hozir ko'rsatilayotgan xizmat: ${currentText}`}
            className="text-lg sm:text-2xl lg:text-4xl font-bold text-blue-200 animate-fade-in-up animation-delay-600"
          >
            {currentText}
            <span className="animate-pulse text-white">|</span>
          </span>
        </div>

        <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-800 leading-relaxed">
          G'oyalarni zamonaviy texnologiyalar va innovatsion yechimlar bilan raqamli haqiqatga aylantiramiz.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-1000 mb-16">
          <button
            onClick={() => scrollToSection('about')}
            className="group bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-base hover:bg-blue-50 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-white/20 relative overflow-hidden"
            aria-label="Biz haqimizda qismiga o'tish"
          >
            <span className="relative z-10">Boshlash</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="group border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-white hover:text-blue-600 transition-all duration-500 transform hover:scale-110 shadow-2xl relative overflow-hidden"
            aria-label="Portfolio qismiga o'tish"
          >
            <span className="relative z-10">Portfolio ko'rish</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in-up animation-delay-1200" role="list" aria-label="Xizmatlar ro'yxati">
          {[
            { icon: Code, label: 'Veb Dasturlash', delay: '0s' },
            { icon: Smartphone, label: 'Mobil Ilovalar', delay: '0.2s' },
            { icon: Bot, label: 'Telegram Botlar', delay: '0.4s' }
          ].map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-white/90 cursor-pointer transform hover:scale-110 transition-all duration-500"
              style={{ animationDelay: item.delay }}
              role="listitem"
              tabIndex={0}
              aria-label={`${item.label} xizmati`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  scrollToSection('services');
                }
              }}
            >
              <div className="relative mb-4">
                <item.icon className="w-10 h-10 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:scale-125 transition-transform duration-300"
        style={{ animationDuration: '2s' }}
        aria-label="Keyingi qismga o'tish"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
};

export default Hero;
