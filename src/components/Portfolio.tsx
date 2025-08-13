import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platforma',
      description: 'Ilg\'or xususiyatlarga ega zamonaviy onlayn do\'kon',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Fitnes Mobil Ilova',
      description: 'Cross-platform fitnes kuzatuv ilovasi',
      image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Mijozlarni Qo\'llab-quvvatlash Boti',
      description: 'Mijozlarga xizmat ko\'rsatish uchun AI-ga asoslangan Telegram bot',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'bot',
      technologies: ['Python', 'Telegram API', 'OpenAI'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Korporativ Veb-sayt',
      description: 'CMS bilan professional biznes veb-sayti',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'web',
      technologies: ['Next.js', 'Tailwind', 'Strapi'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Ovqat Yetkazib Berish Ilovasi',
      description: 'Ovqat buyurtma qilish uchun mahalliy mobil ilova',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Yangiliklar Yig\'uvchi Bot',
      description: 'Avtomatlashtirilgan yangiliklar yig\'ish va tarqatish boti',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'bot',
      technologies: ['Node.js', 'Telegram API', 'RSS'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'Barcha Loyihalar' },
    { id: 'web', label: 'Veb Dasturlash' },
    { id: 'mobile', label: 'Mobil Ilovalar' },
    { id: 'bot', label: 'Telegram Botlar' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bizning Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Eng so\'nggi loyihalarimizni o\'rganing va bizneslarning raqamli maqsadlariga erishishda qanday yordam berganimizni ko\'ring.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                <Filter className="w-4 h-4 inline-block mr-2" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-50 transition-colors duration-200 transform hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-50 transition-colors duration-200 transform hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;