
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CalculatorBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const element = bannerRef.current;

      if (element) {
        const position = element.offsetTop;
        if (scrollY > position - window.innerHeight * 0.75) {
          element.classList.add('animate-fade-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-[#FFF5EC] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform -skew-x-12 px-8 py-4 inline-block shadow-2xl rounded-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold transform skew-x-12 text-white">Калькулятор стоимости</h2>
          </div>
        </div>
        
        <div 
          ref={bannerRef}
          className="opacity-0 transition-opacity duration-1000 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left side content */}
          <div>
            <h3 className="text-xl font-medium mb-2">Рассчитайте предварительную стоимость</h3>
            <p className="text-gray-600">Рассчитайте предварительную стоимость окон с учетом ваших требований.</p>
          </div>

          {/* Right side - Window image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/37587afc-ddc1-45b5-9a47-86b1dfa75cd4.png" 
                alt="Открытое белое окно с видом на зеленый сад" 
                className="w-80 h-80 object-cover rounded-lg shadow-2xl"
              />
              
              {/* Floating price badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-center">
                  <div className="text-xs text-gray-600">от</div>
                  <div className="text-lg font-bold text-blue-600">3334 ₽</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered call to action button */}
        <div className="flex justify-center mt-12">
          <Link 
            to="/calculator" 
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-12 py-4 rounded-full transition-all text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 uppercase tracking-wide"
          >
            Рассчитать стоимость
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CalculatorBanner;
