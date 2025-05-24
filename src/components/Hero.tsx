
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
    <div className="relative min-h-[800px] flex items-center overflow-hidden">
      {/* Exact background gradient matching reference image */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-300 z-0" />
      
      {/* Moving sun animation */}
      <div className="absolute top-20 right-1/4 w-32 h-32 bg-yellow-300 rounded-full opacity-80 animate-pulse shadow-2xl"></div>
      <div className="absolute top-16 right-1/3 w-40 h-40 bg-yellow-200 rounded-full opacity-60 animate-bounce shadow-xl"></div>
      <div className="absolute top-24 right-1/5 w-24 h-24 bg-orange-200 rounded-full opacity-70 animate-ping shadow-lg"></div>
      
      {/* Sun rays animation */}
      <div className="absolute top-32 right-1/4 w-2 h-16 bg-yellow-300 opacity-60 animate-pulse transform rotate-12"></div>
      <div className="absolute top-28 right-1/3 w-2 h-20 bg-yellow-300 opacity-60 animate-pulse transform rotate-45 delay-300"></div>
      <div className="absolute top-36 right-1/5 w-2 h-12 bg-yellow-300 opacity-60 animate-pulse transform -rotate-12 delay-700"></div>
      
      {/* Additional decorative elements matching reference */}
      <div className="absolute top-40 left-20 w-3 h-3 bg-white rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-60 right-40 w-2 h-2 bg-white rounded-full animate-ping delay-1000"></div>
      
      <div className="container relative z-10 px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left side content with enhanced styling */}
          <div 
            ref={heroContentRef}
            className="flex-1 text-white opacity-0 transition-all duration-1000"
          >
            {/* Main banner shape with enhanced styling */}
            <div className="relative mb-10">
              <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 transform -skew-x-12 px-10 py-8 inline-block shadow-2xl rounded-xl border border-white/20">
                <h1 className="text-5xl md:text-7xl font-bold transform skew-x-12 leading-tight tracking-wide">
                  окна и двери
                </h1>
              </div>
              {/* Enhanced decorative lines */}
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-1.5 bg-white mb-2 shadow-lg animate-pulse"></div>
                <div className="w-8 h-1.5 bg-white mb-2 shadow-lg animate-pulse delay-150"></div>
                <div className="w-6 h-1.5 bg-white shadow-lg animate-pulse delay-300"></div>
              </div>
            </div>

            {/* Second text with enhanced colorful background */}
            <div className="relative mb-8">
              <div className="bg-gradient-to-r from-green-500 via-green-600 to-teal-600 transform -skew-x-12 px-8 py-6 inline-block shadow-2xl rounded-xl border border-white/20">
                <h2 className="text-3xl md:text-5xl font-bold transform skew-x-12 text-white tracking-wide">
                  без монтажа
                </h2>
              </div>
            </div>

            {/* Third text with enhanced colorful background */}
            <div className="relative mb-12">
              <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 transform -skew-x-12 px-8 py-6 inline-block shadow-2xl rounded-xl border border-white/20">
                <h3 className="text-2xl md:text-4xl font-bold transform skew-x-12 text-white tracking-wide">
                  с бесплатной доставкой
                </h3>
              </div>
            </div>
            
            {/* Enhanced buttons */}
            <div className="flex flex-wrap gap-8">
              <Link 
                to="/calculator" 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-14 py-5 rounded-full transition-all duration-300 text-xl shadow-2xl hover:shadow-red-500/30 transform hover:-translate-y-2 hover:scale-105 uppercase tracking-wider border border-white/20"
              >
                Рассчитать стоимость
              </Link>
              <a 
                href="#contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-12 py-5 rounded-full transition-all duration-300 text-xl shadow-xl hover:shadow-white/30 transform hover:-translate-y-1 backdrop-blur-sm bg-white/10"
              >
                Связаться с нами
              </a>
            </div>
          </div>

          {/* Right side - Enhanced Window visualization */}
          <div className="flex-1 flex flex-col items-center relative">
            {/* Enhanced circular background with window */}
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden border-4 border-white/30 backdrop-blur-sm">
                {/* Enhanced window frame simulation */}
                <div className="w-40 h-48 bg-white rounded-xl shadow-inner relative border-4 border-gray-300 overflow-hidden">
                  <div className="absolute inset-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-400 shadow-sm"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-1.5 bg-gray-400 shadow-sm"></div>
                  {/* Window handles */}
                  <div className="absolute top-1/2 right-1 w-2 h-6 bg-gray-500 rounded-sm transform -translate-y-1/2"></div>
                </div>
                
                {/* Enhanced floating price badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-white to-gray-50 rounded-full px-8 py-4 shadow-2xl border border-gray-200">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 font-medium">от</div>
                    <div className="text-2xl font-bold text-blue-600">3334 ₽</div>
                  </div>
                </div>
                
                {/* Floating sparkles */}
                <div className="absolute top-4 right-8 w-2 h-2 bg-white rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
              </div>
              
              {/* Enhanced navigation arrows */}
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-gray-200 hover:shadow-2xl">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-gray-200 hover:shadow-2xl">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
