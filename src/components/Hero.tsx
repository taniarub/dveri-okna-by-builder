
const Hero = () => {
  return (
    <div className="relative min-h-[500px] flex items-center bg-gray-100 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1920&q=80')`,
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Качество и комфорт для вашего дома
          </h1>
          <p className="text-xl mb-8">
            Профессиональная установка окон с гарантией качества, 
            современными технологиями и доступными ценами.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#calculator" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-colors"
            >
              Рассчитать стоимость
            </a>
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
