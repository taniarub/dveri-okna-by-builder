
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-brand-blue text-2xl font-bold">
            Dverivokna
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-brand-blue transition-colors">
              О нас
            </a>
            <a href="#advantages" className="text-gray-600 hover:text-brand-blue transition-colors">
              Наши преимущества
            </a>
            <a href="#calculator" className="text-gray-600 hover:text-brand-blue transition-colors">
              Рассчитать стоимость
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-brand-blue transition-colors">
              Отзывы
            </a>
            <a 
              href="#contact" 
              className="bg-brand-red text-white rounded-md px-6 py-2 hover:bg-red-700 transition-colors"
            >
              Контакты
            </a>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <a 
              href="#about" 
              className="block text-gray-600 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#advantages" 
              className="block text-gray-600 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Наши преимущества
            </a>
            <a 
              href="#calculator" 
              className="block text-gray-600 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Рассчитать стоимость
            </a>
            <a 
              href="#reviews" 
              className="block text-gray-600 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#contact" 
              className="block bg-brand-red text-white rounded-md px-4 py-2 hover:bg-red-700 transition-colors w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
          </div>
        )}
      </div>

      {/* Promo Banner */}
      <div className="bg-brand-yellow py-2">
        <div className="container mx-auto text-center text-brand-darkblue font-medium">
          Двери и окна ПВХ с бесплатной доставкой по РБ
        </div>
      </div>
    </header>
  );
};

export default Header;
