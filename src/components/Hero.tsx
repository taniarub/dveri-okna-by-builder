
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[800px] flex items-center overflow-hidden animate-fade-in">
      {/* Golden-yellow to orange retro background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-orange-400 to-orange-500">
        
        {/* Static sunburst rays from bottom center */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="absolute origin-bottom"
              style={{
                width: '8px',
                height: '120vh',
                background: `linear-gradient(to top, 
                  rgba(255, 255, 255, 0.5) 0%, 
                  rgba(255, 255, 255, 0.3) 50%, 
                  rgba(255, 255, 255, 0) 100%)`,
                transform: `rotate(${(i - 30) * 3}deg)`,
                left: '50%',
                bottom: '0',
                transformOrigin: 'bottom center',
                marginLeft: '-4px'
              }}
            />
          ))}
          
          {/* Secondary medium rays for density */}
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={`medium-${i}`}
              className="absolute origin-bottom"
              style={{
                width: '4px',
                height: '110vh',
                background: `linear-gradient(to top, 
                  rgba(255, 255, 255, 0.3) 0%, 
                  rgba(255, 255, 255, 0.15) 40%, 
                  rgba(255, 255, 255, 0) 100%)`,
                transform: `rotate(${(i - 60) * 1.5}deg)`,
                left: '50%',
                bottom: '0',
                transformOrigin: 'bottom center',
                marginLeft: '-2px'
              }}
            />
          ))}
          
          {/* Tertiary thin rays for maximum density */}
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={`thin-${i}`}
              className="absolute origin-bottom"
              style={{
                width: '2px',
                height: '100vh',
                background: `linear-gradient(to top, 
                  rgba(255, 255, 255, 0.2) 0%, 
                  rgba(255, 255, 255, 0.1) 30%, 
                  rgba(255, 255, 255, 0) 100%)`,
                transform: `rotate(${(i - 100) * 0.9}deg)`,
                left: '50%',
                bottom: '0',
                transformOrigin: 'bottom center',
                marginLeft: '-1px'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container relative z-10 px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left max-w-7xl mx-auto group gap-8">
          {/* Text content */}
          <div className="text-white flex-1">
            {/* Main banner shape with enhanced styling */}
            <div className="relative mb-10">
              <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 transform -skew-x-12 px-10 py-8 inline-block shadow-2xl rounded-xl border border-white/20 transition-all duration-500 group-hover:scale-105 animate-scale-in">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold transform skew-x-12 leading-tight tracking-wide">
                  ОКНА и ДВЕРИ
                </h1>
              </div>
              {/* Static decorative lines */}
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="w-12 h-1.5 bg-white mb-2 shadow-lg transition-all duration-300 hover:w-16"></div>
                <div className="w-8 h-1.5 bg-white mb-2 shadow-lg transition-all duration-300 hover:w-12"></div>
                <div className="w-6 h-1.5 bg-white shadow-lg transition-all duration-300 hover:w-10"></div>
              </div>
            </div>

            {/* Second text with enhanced colorful background */}
            <div className="relative mb-8">
              <div className="bg-gradient-to-r from-green-500 via-green-600 to-teal-600 transform -skew-x-12 px-8 py-6 inline-block shadow-2xl rounded-xl border border-white/20 transition-all duration-500 group-hover:scale-105 animate-scale-in" style={{animationDelay: '0.2s'}}>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold transform skew-x-12 text-white tracking-wide">
                  без монтажа
                </h2>
              </div>
            </div>

            {/* Third text with enhanced colorful background */}
            <div className="relative mb-12">
              <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 transform -skew-x-12 px-8 py-6 inline-block shadow-2xl rounded-xl border border-white/20 transition-all duration-500 group-hover:scale-105 animate-scale-in" style={{animationDelay: '0.4s'}}>
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold transform skew-x-12 text-white tracking-wide">
                  с бесплатной доставкой
                </h3>
              </div>
            </div>

            {/* Descriptive text */}
            <div className="mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <p className="text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed max-w-3xl mx-auto lg:mx-0 bg-black/20 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20 transition-all duration-300 hover:bg-black/30">
                Надежные окна и двери ПВХ с бесплатной доставкой по РБ – комфорт без переплат!
              </p>
            </div>
            
            {/* Enhanced buttons */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.8s'}}>
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

          {/* Window image with background removal effect and hover animation */}
          <div className="flex-1 lg:flex-none lg:w-3/5 max-w-xl animate-scale-in" style={{animationDelay: '1s'}}>
            <div className="relative">
              <img 
                src="/lovable-uploads/fc927ff3-e72c-4e2c-98ff-7b7c6811512e.png" 
                alt="Окно ПВХ"
                className="w-full h-auto drop-shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 cursor-pointer"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
