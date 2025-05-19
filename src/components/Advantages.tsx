
import React from 'react';

const Advantages = () => {
  return (
    <section id="advantages" className="bg-gray-50">
      <div className="container">
        <h2 className="section-title">Наши преимущества</h2>
        <p className="section-subtitle">
          Почему клиенты выбирают нас для установки окон и дверей?
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          <div className="bg-white p-10 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20V16H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Бесплатная доставка</h3>
            <p className="text-gray-600">
              Доставим ваш заказ быстро и бесплатно в любой уголок страны.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Работаем с 2009 года</h3>
            <p className="text-gray-600">
              Многолетний опыт и надежность компании гарантируют качество услуг.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16L16 11H13V7L9 12H12V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Качество</h3>
            <p className="text-gray-600">
              Только высококачественные товары и услуги для наших клиентов.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="bg-white p-10 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Индивидуальный размер</h3>
            <p className="text-gray-600">
              Окна и двери ПВХ под ваш размер с доставкой по всей стране.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.1277 15.8031 19.2094 16.6718 19.6365 17.4122C20.0637 18.1525 20.7999 18.6864 21.66 18.9C21.4135 19.7793 21.0209 20.6127 20.5 21.36C19.5486 21.0551 18.5235 21.1692 17.6612 21.6746C16.7989 22.1801 16.1717 23.0331 15.9 24C15.033 23.9696 14.1736 23.8609 13.34 23.68C13.1256 22.7451 12.5407 21.9359 11.7058 21.4326C10.8709 20.9293 9.85205 20.7712 8.88 21C8.3942 20.259 8.01385 19.4556 7.77 18.61C8.61065 18.3281 9.32551 17.7468 9.75233 16.9545C10.1791 16.1623 10.286 15.2379 10.05 14.37C10.8583 13.9839 11.6123 13.487 12.29 12.9C12.8969 13.5198 13.7099 13.9049 14.59 13.9849C15.4701 14.0648 16.345 13.8344 17.06 13.34C17.7353 13.9306 18.4892 14.4293 19.3 14.83L19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Сложные конструкции</h3>
            <p className="text-gray-600">
              Делаем любой сложности конструкции из ПВХ, ламинируем и тонируем стекло.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 10H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Гибкая оплата</h3>
            <p className="text-gray-600">
              Работаем с наличным и безналичным расчетом, предлагаем различные варианты оплаты.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
