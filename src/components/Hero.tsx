
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = heroContentRef.current;
    if (element) {
      element.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <div className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Background image with improved overlay gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/lovable-uploads/c60390eb-284e-4644-bc76-ff3f4935022a.png')`,
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 md:py-28">
        <div 
          ref={heroContentRef}
          className="max-w-3xl text-white opacity-0 transition-opacity duration-1000"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Двери и окна ПВХ с бесплатной доставкой по РБ
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Профессиональная установка окон с гарантией качества, 
            современными технологиями и доступными ценами.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link 
              to="/calculator" 
              className="bg-[#f5a623] hover:bg-[#e69816] text-white font-medium px-10 py-4 rounded-md transition-colors text-lg"
            >
              Рассчитать стоимость
            </Link>
            <a 
              href="#contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium px-10 py-4 rounded-md transition-colors text-lg"
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
