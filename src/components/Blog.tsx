import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { typography, getTextColors } from '../utils/typography';

const Blog: React.FC = () => {
  const { isDark } = useTheme();
  const textColors = getTextColors(isDark);

  const blogPosts = [
    {
      id: 1,
      title: '2024-yilda Veb Dasturlashning 10 ta Muhim Trendi',
      excerpt: 'AI integratsiyasidan progressiv veb-ilovalargacha, veb dasturlash kelajagini shakllantirayotgan eng so\'nggi trendlarni kashf eting.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dilshodjon Abdullayev',
      date: '2024-01-15',
      readTime: '5 daqiqa',
      category: 'Veb Dasturlash'
    },
    {
      id: 2,
      title: 'Mobil Ilova Xavfsizligi: 2024 uchun Eng Yaxshi Amaliyotlar',
      excerpt: 'Ushbu muhim xavfsizlik amaliyotlari bilan mobil ilovalaringizni xavfsizlik tahdidlaridan qanday himoya qilishni o\'rganing.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Aziza Karimova',
      date: '2024-01-10',
      readTime: '7 daqiqa',
      category: 'Mobil Dasturlash'
    },
    {
      id: 3,
      title: 'AI bilan Aqlli Telegram Botlar Yaratish',
      excerpt: 'Zamonaviy AI texnologiyalari va Telegram Bot API yordamida aqlli chatbotlarni qanday yaratishni o\'rganing.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Bobur Rahimov',
      date: '2024-01-05',
      readTime: '6 daqiqa',
      category: 'Bot Dasturlash'
    },
    {
      id: 4,
      title: 'Yaxshi Foydalanuvchi Tajribasi uchun UI/UX Dizayn Tamoyillari',
      excerpt: 'Jozibali va intuitiv foydalanuvchi interfeyslari yaratadigan asosiy dizayn tamoyillarini o\'zlashtirib oling.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Madina Toshmatova',
      date: '2024-01-01',
      readTime: '8 daqiqa',
      category: 'Dizayn'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Veb Dasturlash': 'bg-blue-100 text-blue-700',
      'Mobil Dasturlash': 'bg-green-100 text-green-700',
      'Bot Dasturlash': 'bg-purple-100 text-purple-700',
      'Dizayn': 'bg-pink-100 text-pink-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            So'nggi Ma'lumotlar
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Texnologiya va dasturlash dunyosidagi eng so\'nggi trendlar, maslahatlar va ma\'lumotlar bilan yangilanib turing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Post */}
          <div className="md:col-span-2 lg:col-span-1">
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group cursor-pointer h-full">
              <div className="relative overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(blogPosts[0].category)}`}>
                    {blogPosts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </article>
          </div>

          {/* Side Posts */}
          <div className="space-y-6">
            {blogPosts.slice(1).map((post, index) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
              >
                <div className="flex">
                  <div className="relative w-1/3 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-2">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Barcha Maqolalarni Ko'rish
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
