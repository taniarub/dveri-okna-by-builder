
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">О нас</h2>
          <p className="text-xl text-gray-600">
            Мы - команда профессионалов с более чем <span className="text-brand-orange font-bold">15-летним</span> опытом в установке и обслуживании окон
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="text-4xl font-bold mb-4">
              <span className="text-brand-orange">15+</span>
            </div>
            <p className="text-lg text-gray-600">
              лет опыта работы в сфере оконных технологий
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="text-4xl font-bold mb-4">
              <span className="text-brand-orange">5000+</span>
            </div>
            <p className="text-lg text-gray-600">
              установленных окон в жилых и коммерческих помещениях
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="text-4xl font-bold mb-4">
              <span className="text-brand-orange">10000+</span>
            </div>
            <p className="text-lg text-gray-600">
              довольных клиентов рекомендуют нас своим знакомым
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#calculator" className="btn-primary">
            Рассчитать стоимость
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
