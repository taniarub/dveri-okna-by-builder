
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
      {/* Bright gradient background matching reference */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 z-0" />
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600/20 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-24 h-24 bg-purple-600/20 transform rotate-45 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/20 rounded-full animate-ping"></div>
      
      {/* Floating decorative lines */}
      <div className="absolute top-1/3 right-10 w-16 h-1 bg-white/30 transform rotate-12 animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-12 h-1 bg-white/30 transform rotate-45 animate-pulse delay-150"></div>
      <div className="absolute top-2/3 right-16 w-8 h-1 bg-white/30 transform rotate-12 animate-pulse delay-300"></div>
      
      <div className="container relative z-10 px-4 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          {/* Left side content with geometric banner style */}
          <div 
            ref={heroContentRef}
            className="flex-1 text-white opacity-0 transition-opacity duration-1000"
          >
            {/* Main banner shape with skewed background */}
            <div className="relative mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 transform -skew-x-12 px-8 py-6 inline-block shadow-2xl rounded-lg">
                <h1 className="text-4xl md:text-6xl font-bold transform skew-x-12 leading-tight">
                  окна и двери
                </h1>
              </div>
              {/* Decorative lines next to title */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-1 bg-white mb-1"></div>
                <div className="w-6 h-1 bg-white mb-1"></div>
                <div className="w-4 h-1 bg-white"></div>
              </div>
            </div>

            {/* Second text with colorful background */}
            <div className="relative mb-6">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 transform -skew-x-12 px-6 py-4 inline-block shadow-xl rounded-lg">
                <h2 className="text-2xl md:text-4xl font-bold transform skew-x-12 text-white">
                  без монтажа
                </h2>
              </div>
            </div>

            {/* Third text with colorful background */}
            <div className="relative mb-10">
              <div className="bg-gradient-to-r from-pink-500 to-rose-600 transform -skew-x-12 px-6 py-4 inline-block shadow-xl rounded-lg">
                <h3 className="text-xl md:text-3xl font-bold transform skew-x-12 text-white">
                  с бесплатной доставкой
                </h3>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/calculator" 
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-12 py-4 rounded-full transition-all text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 uppercase tracking-wide"
              >
                Рассчитать стоимость
              </Link>
              <a 
                href="#contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium px-10 py-4 rounded-full transition-colors text-lg shadow-lg"
              >
                Связаться с нами
              </a>
            </div>
          </div>

          {/* Right side - Window visualization */}
          <div className="flex-1 flex flex-col items-center relative">
            {/* Large circular background with window */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
