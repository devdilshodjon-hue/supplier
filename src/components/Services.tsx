import React, { useState } from 'react';
import { Code, Smartphone, Bot, Palette, Server, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Veb Dasturlash',
      description: 'Zamonaviy texnologiyalar bilan qurilgan maxsus veb-saytlar va veb-ilovalar.',
      features: ['React & Next.js', 'Moslashuvchan Dizayn', 'SEO Optimallashtirish', 'Samaradorlikka Yo\'naltirilgan'],
      color: 'blue'
    },
    {
      icon: Smartphone,
      title: 'Mobil Ilovalar',
      description: 'iOS va Android uchun mahalliy va cross-platform mobil ilovalar.',
      features: ['Mahalliy Dasturlash', 'Cross-Platform', 'App Store Nashr', 'Push Bildirishnomalar'],
      color: 'green'
    },
    {
      icon: Bot,
      title: 'Telegram Botlar',
      description: 'Biznes avtomatlashtirish va mijozlar bilan muloqot uchun aqlli chatbotlar.',
      features: ['Maxsus Buyruqlar', 'API Integratsiya', 'To\'lov Jarayoni', '24/7 Avtomatlashtirish'],
      color: 'purple'
    },
    {
      icon: Palette,
      title: 'UI/UX Dizayn',
      description: 'Foydalanuvchi tajribasini yaxshilaydigan chiroyli va intuitiv interfeylar.',
      features: ['Foydalanuvchi Tadqiqoti', 'Wireframing', 'Prototiplash', 'Dizayn Tizimlari'],
      color: 'pink'
    },
    {
      icon: Server,
      title: 'Backend Dasturlash',
      description: 'Mustahkam server tomoni yechimlari va API dasturlash.',
      features: ['REST APIs', 'Ma\'lumotlar Bazasi Dizayni', 'Cloud Deployment', 'Mikroservislar'],
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'Xavfsizlik va Texnik Xizmat',
      description: 'Keng qamrovli xavfsizlik yechimlari va doimiy texnik xizmat ko\'rsatish.',
      features: ['Xavfsizlik Auditi', 'Muntazam Yangilanishlar', 'Zaxira Yechimlari', '24/7 Monitoring'],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colors = {
      blue: {
        bg: isHovered ? 'bg-blue-500' : 'bg-blue-50',
        text: isHovered ? 'text-white' : 'text-blue-600',
        icon: isHovered ? 'text-white' : 'text-blue-500',
        border: 'border-blue-200 hover:border-blue-500'
      },
      green: {
        bg: isHovered ? 'bg-green-500' : 'bg-green-50',
        text: isHovered ? 'text-white' : 'text-green-600',
        icon: isHovered ? 'text-white' : 'text-green-500',
        border: 'border-green-200 hover:border-green-500'
      },
      purple: {
        bg: isHovered ? 'bg-purple-500' : 'bg-purple-50',
        text: isHovered ? 'text-white' : 'text-purple-600',
        icon: isHovered ? 'text-white' : 'text-purple-500',
        border: 'border-purple-200 hover:border-purple-500'
      },
      pink: {
        bg: isHovered ? 'bg-pink-500' : 'bg-pink-50',
        text: isHovered ? 'text-white' : 'text-pink-600',
        icon: isHovered ? 'text-white' : 'text-pink-500',
        border: 'border-pink-200 hover:border-pink-500'
      },
      yellow: {
        bg: isHovered ? 'bg-yellow-500' : 'bg-yellow-50',
        text: isHovered ? 'text-white' : 'text-yellow-600',
        icon: isHovered ? 'text-white' : 'text-yellow-500',
        border: 'border-yellow-200 hover:border-yellow-500'
      },
      red: {
        bg: isHovered ? 'bg-red-500' : 'bg-red-50',
        text: isHovered ? 'text-white' : 'text-red-600',
        icon: isHovered ? 'text-white' : 'text-red-500',
        border: 'border-red-200 hover:border-red-500'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bizning Xizmatlarimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Biznesingizni zamonaviy dunyoda rivojlantirishga yordam beradigan keng qamrovli raqamli yechimlarni taklif etamiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const colorClasses = getColorClasses(service.color, isHovered);
            
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 transform hover:scale-105 hover:shadow-xl cursor-pointer ${colorClasses.border} ${colorClasses.bg}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="p-8">
                  <service.icon className={`w-12 h-12 mb-6 transition-colors duration-300 ${colorClasses.icon}`} />
                  <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${colorClasses.text}`}>
                    {service.title}
                  </h3>
                  <p className={`mb-6 transition-colors duration-300 ${isHovered ? 'text-white/90' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className={`flex items-center text-sm transition-colors duration-300 ${isHovered ? 'text-white/80' : 'text-gray-500'}`}
                      >
                        <div className={`w-2 h-2 rounded-full mr-3 transition-colors duration-300 ${isHovered ? 'bg-white/60' : 'bg-gray-400'}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Animated background effect */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-10' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;