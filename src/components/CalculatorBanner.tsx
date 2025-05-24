
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
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-purple-600 transform rotate-45 opacity-20 animate-bounce"></div>
      <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-green-500 rounded-full opacity-20 animate-ping"></div>
      
      {/* Floating decorative lines */}
      <div className="absolute top-1/3 left-10 w-16 h-1 bg-white/30 transform rotate-12 animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-12 h-1 bg-white/30 transform rotate-45 animate-pulse delay-150"></div>
      <div className="absolute top-2/3 left-16 w-8 h-1 bg-white/30 transform rotate-12 animate-pulse delay-300"></div>
      
      <div className="container relative z-10">
        <div 
          ref={bannerRef}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto opacity-0 transition-opacity duration-1000"
        >
          {/* Left side content */}
          <div className="flex-1 text-center lg:text-left text-white">
            {/* Main banner shape */}
            <div className="relative mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 transform -skew-x-12 px-8 py-4 inline-block shadow-2xl">
                <h2 className="text-4xl font-bold transform skew-x-12">Калькулятор стоимости</h2>
              </div>
              {/* Decorative lines */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-1 bg-white mb-1"></div>
                <div className="w-6 h-1 bg-white mb-1"></div>
                <div className="w-4 h-1 bg-white"></div>
              </div>
            </div>
            
            <p className="text-xl mb-8 font-medium drop-shadow-lg">
              Рассчитайте предварительную стоимость окон с учетом ваших требований.
            </p>
          </div>

          {/* Right side - Calculator icon and button */}
          <div className="flex-1 flex flex-col items-center relative">
            {/* Large circular background */}
            <div className="relative">
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
              className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold px-12 py-4 rounded-full transition-all text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 uppercase tracking-wide"
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
