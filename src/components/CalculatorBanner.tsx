
import { useEffect, useRef } from "react";
import { Calculator } from "lucide-react";
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
          <div className="flex items-start">
            <div className="mr-5 mt-1 text-brand-yellow">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Рассчитайте предварительную стоимость</h3>
              <p className="text-gray-600">Рассчитайте предварительную стоимость окон с учетом ваших требований.</p>
            </div>
          </div>

          {/* Right side - Calculator visualization and button */}
          <div className="flex flex-col items-center relative">
            {/* Large circular background */}
            <div className="relative mb-6">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Window frame simulation */}
                <div className="w-32 h-40 bg-white rounded-lg shadow-inner relative border-4 border-gray-300">
                  <div className="absolute inset-2 bg-blue-100 rounded"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300"></div>
                </div>
                
                {/* Floating price badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                  <div className="text-center">
                    <div className="text-xs text-gray-600">от</div>
                    <div className="text-lg font-bold text-blue-600">3334 ₽</div>
                  </div>
                </div>
              </div>
              
              {/* Navigation arrows */}
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Call to action button */}
            <Link 
              to="/calculator" 
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-12 py-4 rounded-full transition-all text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 uppercase tracking-wide"
            >
              Рассчитать стоимость
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorBanner;
