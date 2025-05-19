
import React from 'react';

const Advantages = () => {
  return (
    <section id="advantages" className="bg-gray-50">
      <div className="container">
        <h2 className="section-title">Наши преимущества</h2>
        <p className="section-subtitle">
          Более 15 лет мы производим и устанавливаем окна ПВХ высочайшего качества
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          <div className="bg-white p-10 rounded-lg shadow-sm">
            <div className="text-center mb-6">
              <span className="stat-number text-6xl font-bold">15+</span>
              <p className="text-gray-700 mt-2">Лет опыта</p>
            </div>
            <p className="text-gray-600 text-center">
              Многолетний опыт работы с окнами ПВХ позволяет нам безошибочно определять потребности каждого клиента.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-lg shadow-sm">
            <div className="text-center mb-6">
              <span className="stat-number text-6xl font-bold">5000+</span>
              <p className="text-gray-700 mt-2">Довольных клиентов</p>
            </div>
            <p className="text-gray-600 text-center">
              Более 5000 клиентов уже оценили качество наших окон и уровень сервиса, который мы предоставляем.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-lg shadow-sm">
            <div className="text-center mb-6">
              <span className="stat-number text-6xl font-bold">10000+</span>
              <p className="text-gray-700 mt-2">Установленных окон</p>
            </div>
            <p className="text-gray-600 text-center">
              Мы установили более 10 000 окон в жилых и коммерческих помещениях, обеспечивая тепло и комфорт.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Высокое качество</h3>
            <p className="text-gray-600">
              Используем только проверенные материалы и комплектующие от ведущих производителей. Наши окна соответствуют всем необходимым стандартам качества и безопасности.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Гарантия</h3>
            <p className="text-gray-600">
              Предоставляем гарантию на все наши изделия и монтажные работы. Вы можете быть уверены в долговечности наших окон.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Профессиональный монтаж</h3>
            <p className="text-gray-600">
              Наши специалисты имеют большой опыт и регулярно проходят обучение современным технологиям монтажа, что гарантирует качественную установку.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Доступные цены</h3>
            <p className="text-gray-600">
              Предлагаем конкурентные цены на все виды окон и дополнительные услуги. Работаем напрямую с производителями, что позволяет избегать наценок.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
