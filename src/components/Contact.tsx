import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Yuboring',
      details: 'dev.dilshodjon@gmail.com',
      description: 'Istalgan vaqtda email yuboring!'
    },
    {
      icon: Phone,
      title: 'Qo\'ng\'iroq Qiling',
      details: '+998 99 534 03 13',
      description: 'Dush-Jum 9:00 dan 18:00 gacha'
    },
    {
      icon: MapPin,
      title: 'Bizni Ziyorat Qiling',
      details: 'Toshkent, O\'zbekiston',
      description: 'Ofisimizga tashrif buyuring'
    }
  ];

  const subjects = [
    'Veb Dasturlash',
    'Mobil Ilova Dasturlash',
    'Telegram Bot Dasturlash',
    'UI/UX Dizayn',
    'Maslahat',
    'Boshqa'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bog\'laning
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Loyihangizni boshlashga tayyormisiz? G\'oyalaringizni hayotga tatbiq etishda qanday yordam bera olishimizni muhokama qilaylik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Suhbatni Boshlaylik</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 group cursor-pointer p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <info.icon className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-blue-600 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Nega Supplier IT ni Tanlash Kerak?</h4>
              <ul className="space-y-3">
                {[
                  '5+ yillik tajribaga ega mutaxassis jamoa',
                  'Zamonaviy texnologiyalar va eng yaxshi amaliyotlar',
                  'Raqobatbardosh narxlar va tez yetkazib berish',
                  '24/7 qo\'llab-quvvatlash va texnik xizmat',
                  'Biznes ehtiyojlaringiz uchun maxsus yechimlar'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    To'liq Ism *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Sizning to'liq ismingiz"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Manzil *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="sizning@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon Raqam
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+998 99 534 03 13"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Mavzu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Xizmatni tanlang</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Xabar *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Loyihangiz haqida bizga ayting..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Xabar Yuborish</span>
                  </>
                )}
              </button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Xabar Yuborildi!</h3>
                  <p className="text-gray-600">Xabaringiz uchun rahmat. Tez orada siz bilan bog'lanamiz!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;