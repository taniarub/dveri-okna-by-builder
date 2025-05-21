
import React from 'react';
import { Truck, Calendar, Shield, Ruler, LayoutGrid, CreditCard, Award, DollarSign } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: <Truck className="w-6 h-6 text-brand-yellow" />,
      title: "Бесплатная доставка",
      description: "Доставим ваш заказ быстро и бесплатно в любой уголок страны."
    },
    {
      icon: <Calendar className="w-6 h-6 text-brand-yellow" />,
      title: "Работаем с 2009 года",
      description: "Многолетний опыт и надежность компании гарантируют качество услуг."
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-yellow" />,
      title: "Качество",
      description: "Только высококачественные товары и услуги для наших клиентов."
    },
    {
      icon: <Ruler className="w-6 h-6 text-brand-yellow" />,
      title: "Индивидуальный размер",
      description: "Окна и двери ПВХ под ваш размер с доставкой по всей стране."
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-brand-yellow" />,
      title: "Сложные конструкции",
      description: "Делаем любой сложности конструкции из ПВХ, ламинируем и тонируем стекло."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-brand-yellow" />,
      title: "Гибкая оплата",
      description: "Работаем с наличным и безналичным расчетом, предлагаем различные варианты оплаты."
    }
  ];

  return (
    <section id="advantages" className="bg-[#FFF5EC] py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold mb-16">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-5 mt-1 text-brand-yellow">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
