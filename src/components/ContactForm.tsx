
import React from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-[#FFF5EC] py-16 md:py-20">
      <div className="container">
        <h2 className="section-title mb-12">Нужна консультация? Перезвоним в удобное время!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-4">Телефоны</h4>
                <p className="text-gray-600">
                  <a href="tel:+375293423221" className="block hover:text-brand-blue transition-colors">+375 (29) 342-32-21</a>
                  <a href="tel:+375292589210" className="block hover:text-brand-blue transition-colors">+375 (29) 258-92-10</a>
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Email</h4>
                <p className="text-gray-600">
                  <a href="mailto:vitaliy9977@mail.ru" className="hover:text-brand-blue transition-colors">vitaliy9977@mail.ru</a>
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Режим работы</h4>
                <p className="text-gray-600">
                  9:00 – 19:00<br />Без выходных
                </p>
              </div>
              
              <div className="flex space-x-4 items-center pt-4">
                <a 
                  href="viber://chat?number=%2B375293423221" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/aee8cfd2-6b4f-4a4b-a2b1-42890379f49f.png" 
                    alt="Viber" 
                    className="w-10 h-10" 
                  />
                </a>
                <a 
                  href="https://wa.me/375293423221" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/653de03b-05d0-4cd5-b6bf-515fa14a31d6.png" 
                    alt="WhatsApp" 
                    className="w-10 h-10" 
                  />
                </a>
                <a 
                  href="https://www.instagram.com/dveri_okna_krovlya_lelchicy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/76c10cc3-6dab-4728-9d5f-264aa6a1e4b8.png" 
                    alt="Instagram" 
                    className="w-10 h-10" 
                  />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form action="https://formspree.io/f/myzwrqvo" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Ваше имя</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue" 
                  placeholder="Введите ваше имя"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue" 
                  placeholder="+375 XX XXX XX XX"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Сообщение</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue" 
                  placeholder="Введите ваше сообщение"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-brand-orange text-white px-8 py-3 rounded-md hover:bg-[#e69816] transition-colors w-full"
              >
                Отправить заявку
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                Нажимая кнопку, вы соглашаетесь на <Link to="/privacy" className="text-brand-blue hover:underline">обработку персональных данных</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
