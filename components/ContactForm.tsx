
'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification({ type: null, message: '' }), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification({ type: null, message: '' });

    // Валидация на клиенте
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      showNotification('error', 'Имя должно содержать минимум 2 символа');
      setIsSubmitting(false);
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      showNotification('error', 'Телефон должен содержать минимум 10 символов');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        showNotification('success', 'Сообщение отправлено успешно! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        showNotification('error', result.message || 'Ошибка при отправке сообщения. Попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Error:', error);
      showNotification('error', 'Ошибка сети. Проверьте подключение к интернету и попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="bg-[#FFF5EC] py-16 md:py-20">
      <div className="container">

        
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
          <div className="bg-white p-8 rounded-lg shadow-sm relative">
            {/* Notification */}
            {notification.type && (
              <div className={`absolute top-4 right-4 p-4 rounded-lg shadow-lg z-10 max-w-sm ${
                notification.type === 'success' 
                  ? 'bg-green-100 border border-green-400 text-green-700' 
                  : 'bg-red-100 border border-red-400 text-red-700'
              }`}>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {notification.type === 'success' ? (
                      <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{notification.message}</p>
                  </div>
                  <div className="ml-auto pl-3">
                    <button
                      onClick={() => setNotification({ type: null, message: '' })}
                      className="inline-flex text-gray-400 hover:text-gray-600"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Ваше имя</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue" 
                  placeholder="Введите ваше имя"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue" 
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
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
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue" 
                  placeholder="Введите ваше сообщение"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-brand-orange text-white px-8 py-3 rounded-md hover:bg-[#e69816] transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Отправка...
                  </>
                ) : (
                  'Отправить заявку'
                )}
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                Нажимая кнопку, вы соглашаетесь на <Link href="/privacy" className="text-brand-blue hover:underline">обработку персональных данных</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
