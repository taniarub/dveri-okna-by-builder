
import React from 'react';
import { Truck, Calendar, Shield, Ruler, LayoutGrid, CreditCard } from 'lucide-react';

const Advantages = () => {
  return (
    <section id="advantages" className="bg-[#FDE1D3]">
      <div className="container">
        <h2 className="section-title">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          <div className="bg-white p-10 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <Truck className="w-10 h-10 text-brand-orange" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Бесплатная доставка</h3>
            <p className="text-gray-600">
              Доставим ваш заказ быстро и бесплатно в любой уголок страны.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <Calendar className="w-10 h-10 text-brand-orange" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Работаем с 2009 года</h3>
            <p className="text-gray-600">
              Многолетний опыт и надежность компании гарантируют качество услуг.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <Shield className="w-10 h-10 text-brand-orange" />
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
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <Ruler className="w-10 h-10 text-brand-orange" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Индивидуальный размер</h3>
            <p className="text-gray-600">
              Окна и двери ПВХ под ваш размер с доставкой по всей стране.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <LayoutGrid className="w-10 h-10 text-brand-orange" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Сложные конструкции</h3>
            <p className="text-gray-600">
              Делаем любой сложности конструкции из ПВХ, ламинируем и тонируем стекло.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <CreditCard className="w-10 h-10 text-brand-orange" />
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
