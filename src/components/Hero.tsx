
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-gray-100 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/c60390eb-284e-4644-bc76-ff3f4935022a.png')`,
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container relative z-10 px-4 py-16 md:py-24 animate-fade-in">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Двери и окна ПВХ с бесплатной доставкой по РБ
          </h1>
          <p className="text-xl mb-8 animate-fade-in" style={{animationDelay: "0.4s"}}>
            Профессиональная установка окон с гарантией качества, 
            современными технологиями и доступными ценами.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <Link 
              to="/calculator" 
              className="bg-brand-red hover:bg-red-700 text-white font-medium px-8 py-3 rounded-md transition-colors"
            >
              Рассчитать стоимость
            </Link>
            <a 
              href="#contact" 
              className="border border-white text-white hover:bg-white hover:text-brand-blue font-medium px-8 py-3 rounded-md transition-colors"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
