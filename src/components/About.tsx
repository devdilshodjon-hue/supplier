import React from 'react';
import { Users, Award, Clock, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Mamnun Mijozlar' },
    { icon: Award, number: '100+', label: 'Tugallangan Loyihalar' },
    { icon: Clock, number: '5+', label: 'Yillik Tajriba' },
    { icon: Globe, number: '15+', label: 'Xizmat Ko\'rsatilgan Mamlakatlar' },
  ];

  const team = [
    {
      name: 'Dilshodjon Abdullayev',
      role: 'Bosh Dasturchi',
      expertise: 'Full-Stack Dasturlash',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Aziza Karimova',
      role: 'Mobil Ilova Mutaxassisi',
      expertise: 'iOS va Android Dasturlash',
      image: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Bobur Rahimov',
      role: 'Bot Dasturchisi',
      expertise: 'Telegram Bot Yaratish',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Madina Toshmatova',
      role: 'UI/UX Dizayner',
      expertise: 'Dizayn va Foydalanuvchi Tajribasi',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Supplier IT Haqida
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Biz ajoyib raqamli tajribalar yaratishga bag'ishlangan ishtiyoqli dasturchilar va dizaynerlar jamoasimiz. 
            O'zbekistonda joylashgan bo'lib, butun dunyo bo'ylab mijozlarga innovatsion texnologik yechimlar taqdim etamiz.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Bizning Mutaxassis Jamoamiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;