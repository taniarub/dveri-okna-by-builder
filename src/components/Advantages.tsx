
import { CheckCircle, Shield, Award, Users, Clock, Star } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: <CheckCircle className="w-8 h-8 text-brand-orange" />,
      title: "Качественные материалы",
      description: "Используем только проверенные профили и фурнитуру от ведущих производителей"
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-orange" />,
      title: "Гарантия качества",
      description: "Предоставляем расширенную гарантию на все виды работ и материалы"
    },
    {
      icon: <Award className="w-8 h-8 text-brand-orange" />,
      title: "Профессиональная команда",
      description: "Опытные мастера с многолетним стажем работы в оконной индустрии"
    },
    {
      icon: <Users className="w-8 h-8 text-brand-orange" />,
      title: "Индивидуальный подход",
      description: "Учитываем все ваши пожелания и особенности помещения"
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-orange" />,
      title: "Соблюдение сроков",
      description: "Выполняем работы точно в оговоренные сроки без задержек"
    },
    {
      icon: <Star className="w-8 h-8 text-brand-orange" />,
      title: "Конкурентные цены",
      description: "Предлагаем лучшие цены на рынке без скрытых доплат"
    }
  ];

  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 transform -skew-x-12 px-8 py-4 inline-block shadow-2xl rounded-xl border border-white/20">
            <h2 className="text-4xl font-bold transform skew-x-12 text-white">6 причин выбрать нас</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
