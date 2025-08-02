'use client'

import { useEffect, useRef } from "react";

const ContactInfo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const element = sectionRef.current;

      if (element) {
        const position = element.offsetTop;
        if (scrollY > position - window.innerHeight * 0.8) {
          element.classList.add('animate-fade-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="contact" className="bg-gradient-to-br from-[#FFF5EC] to-[#FFF0E6] py-8 md:py-12 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-brand-orange/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-brand-blue/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/10 rounded-full blur-lg"></div>
      </div>
      
      <div className="container relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white transform -skew-x-6 px-8 py-4 inline-block shadow-2xl rounded-xl border border-white/20 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold transform skew-x-6">Свяжитесь с нами</h2>
          </div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Готовы ответить на все ваши вопросы и предоставить профессиональную консультацию
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div 
            ref={sectionRef}
            className="opacity-0 transition-all duration-1000 bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-white/50 hover:shadow-3xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Телефоны */}
              <div className="group text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl text-gray-800">Телефоны</h4>
                </div>
                <div className="space-y-2">
                  <a href="tel:+375293423221" className="block text-gray-600 hover:text-brand-blue transition-colors text-lg font-medium hover:scale-105 transform transition-transform duration-200">
                    +375 (29) 342-32-21
                  </a>
                  <a href="tel:+375292589210" className="block text-gray-600 hover:text-brand-blue transition-colors text-lg font-medium hover:scale-105 transform transition-transform duration-200">
                    +375 (29) 258-92-10
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="group text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl text-gray-800">Email</h4>
                </div>
                <div>
                  <a href="mailto:vitaliy9977@mail.ru" className="text-gray-600 hover:text-brand-blue transition-colors text-lg font-medium hover:scale-105 transform transition-transform duration-200 inline-block">
                    vitaliy9977@mail.ru
                  </a>
                </div>
              </div>
              
              {/* Режим работы */}
              <div className="group text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl text-gray-800">Режим работы</h4>
                </div>
                <div>
                  <p className="text-gray-600 text-lg">
                    <span className="font-semibold text-brand-orange">9:00 – 19:00</span><br />
                    <span className="text-green-600 font-medium">Без выходных</span>
                  </p>
                </div>
              </div>
              
              {/* География работы */}
              <div className="group text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl text-gray-800">География работы</h4>
                </div>
                <div>
                  <p className="text-gray-600 text-lg">
                    <span className="font-semibold text-brand-orange">Работаем по всей Беларуси</span><br />
                    <span className="text-green-600 font-medium">Доставка включена</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Социальные сети */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-center font-bold text-xl text-gray-800 mb-6">Мы в соцсетях</h4>
              <div className="flex space-x-6 items-center justify-center">
                <a 
                  href="viber://chat?number=%2B375293423221" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg group border border-gray-200"
                >
                  <img 
                    src="/lovable-uploads/aee8cfd2-6b4f-4a4b-a2b1-42890379f49f.png" 
                    alt="Viber" 
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" 
                  />
                </a>
                <a 
                  href="https://wa.me/375293423221" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg group border border-gray-200"
                >
                  <img 
                    src="/lovable-uploads/653de03b-05d0-4cd5-b6bf-515fa14a31d6.png" 
                    alt="WhatsApp" 
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" 
                  />
                </a>
                <a 
                  href="https://www.instagram.com/dveri_okna_krovlya_lelchicy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg group border border-gray-200"
                >
                  <img 
                    src="/lovable-uploads/76c10cc3-6dab-4728-9d5f-264aa6a1e4b8.png" 
                    alt="Instagram" 
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" 
                  />
                </a>
              </div>
              <p className="text-center text-gray-500 mt-4 text-sm">
                Выберите удобный способ связи
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;