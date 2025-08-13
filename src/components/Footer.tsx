import React from 'react';
import { Bot, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { typography, getTextColors } from '../utils/typography';

const Footer: React.FC = () => {
  const { isDark } = useTheme();
  const textColors = getTextColors(isDark);

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  const quickLinks = [
    { label: 'Biz Haqimizda', href: '#about' },
    { label: 'Xizmatlar', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Aloqa', href: '#contact' }
  ];

  const services = [
    'Veb Dasturlash',
    'Mobil Ilovalar',
    'Telegram Botlar',
    'UI/UX Dizayn',
    'Backend Dasturlash',
    'Maslahat'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-800 text-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Bot className="w-8 h-8 text-blue-400" />
              <span className={`${typography.navLarge} font-bold`}>Supplier IT</span>
            </div>
            <p className={`${typography.body} mb-6 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-300'
            }`}>
              G'oyalarni zamonaviy texnologiyalar va innovatsion yechimlar bilan raqamli haqiqatga aylantiramiz. 
              Veb dasturlash, mobil ilovalar va avtomatlashtirish sohasidagi ishonchli hamkoringiz.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 ${
                    isDark ? 'bg-gray-800' : 'bg-gray-700'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`${typography.footerTitle} font-semibold mb-6`}>Tezkor Havolalar</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`${typography.footerText} transition-colors duration-300 hover:translate-x-1 transform inline-block ${
                      isDark ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-gray-100'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`${typography.footerTitle} font-semibold mb-6`}>Bizning Xizmatlarimiz</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className={`${typography.footerText} transition-colors duration-300 cursor-pointer hover:translate-x-1 transform inline-block ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-gray-100'
                  }`}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`${typography.footerTitle} font-semibold mb-6`}>Aloqa Ma'lumotlari</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className={`${typography.footerText} ${
                    isDark ? 'text-gray-400' : 'text-gray-300'
                  }`}>Toshkent, O'zbekiston</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+998995340313" className={`${typography.footerText} transition-colors duration-300 ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-gray-100'
                }`}>
                  +998 99 534 03 13
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:dev.dilshodjon@gmail.com" className={`${typography.footerText} transition-colors duration-300 ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-gray-100'
                }`}>
                  dev.dilshodjon@gmail.com
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className={`${typography.footerText} font-semibold mb-3`}>Yangilanib Turing</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Sizning emailingiz"
                  className={`flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 ${
                    isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-700 border-gray-600 text-gray-100'
                  } placeholder-gray-400`}
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Supplier IT. All rights reserved. | supplier.uz
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Maxfiylik Siyosati</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Xizmat Shartlari</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Sayt Xaritasi</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
