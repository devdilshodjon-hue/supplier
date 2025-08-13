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

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-blue-700/50 to-blue-800/50"></div>
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-4 md:mb-8 animate-fade-in-up">
          <Bot className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 text-white animate-bounce" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
          Biz Yaratamiz
        </h1>
        
        <div className="h-20 sm:h-24 flex items-center justify-center mb-8">
          <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-blue-200 animate-fade-in-up animation-delay-400">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-lg sm:text-xl text-blue-100 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
          G'oyalarni zamonaviy texnologiyalar va innovatsion yechimlar bilan raqamli haqiqatga aylantiramiz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
          <button 
            onClick={scrollToAbout}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Boshlash
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
            Portfolio ko'rish
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in-up animation-delay-1000">
          <div className="flex flex-col items-center text-white/90">
            <Code className="w-8 h-8 mb-2" />
            <span className="text-sm">Veb Dasturlash</span>
          </div>
          <div className="flex flex-col items-center text-white/90">
            <Smartphone className="w-8 h-8 mb-2" />
            <span className="text-sm">Mobil Ilovalar</span>
          </div>
          <div className="flex flex-col items-center text-white/90">
            <Bot className="w-8 h-8 mb-2" />
            <span className="text-sm">Telegram Botlar</span>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;