
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[800px] flex items-center overflow-hidden">
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
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          {/* Text content centered */}
          <div className="text-white">
            {/* Main banner shape with enhanced styling */}
            <div className="relative mb-10">
              <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 transform -skew-x-12 px-10 py-8 inline-block shadow-2xl rounded-xl border border-white/20">
                <h1 className="text-5xl md:text-7xl font-bold transform skew-x-12 leading-tight tracking-wide">
                  окна и двери
                </h1>
              </div>
              {/* Static decorative lines */}
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-1.5 bg-white mb-2 shadow-lg"></div>
                <div className="w-8 h-1.5 bg-white mb-2 shadow-lg"></div>
                <div className="w-6 h-1.5 bg-white shadow-lg"></div>
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
            <div className="flex flex-wrap gap-8 justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
