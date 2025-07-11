
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="/" className="text-black text-2xl font-bold transition-transform duration-300 hover:scale-105">
            Окна и двери ПВХ
          </a>
          
          {/* Phone number */}
          <a 
            href="tel:+375293423221" 
            className="hidden lg:flex items-center text-brand-blue hover:text-brand-orange transition-colors duration-300 font-semibold text-lg"
          >
            +375 29 342-32-21
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 transition-transform duration-200 hover:scale-110" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6 transition-transform duration-300" 
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
            <a href="/#about" className="text-gray-600 hover:text-brand-blue transition-all duration-300 hover:scale-105">
              О нас
            </a>
            <a href="/#advantages" className="text-gray-600 hover:text-brand-blue transition-all duration-300 hover:scale-105">
              Наши преимущества
            </a>
            <a href="/#projects" className="text-gray-600 hover:text-brand-blue transition-all duration-300 hover:scale-105">
              Наши работы
            </a>
            <Link 
              to="/calculator" 
              className="text-gray-600 hover:text-brand-blue transition-all duration-300 hover:scale-105"
            >
              Калькулятор
            </Link>
            <a 
              href="/#contact" 
              className="bg-brand-orange text-white rounded-md px-6 py-2 hover:bg-[#e69816] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Контакты
            </a>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3 animate-fade-in">
            <a 
              href="/#about" 
              className="block text-gray-600 hover:text-brand-blue transition-all duration-300 py-2 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="/#advantages" 
              className="block text-gray-600 hover:text-brand-blue transition-all duration-300 py-2 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Наши преимущества
            </a>
            <a 
              href="/#projects" 
              className="block text-gray-600 hover:text-brand-blue transition-all duration-300 py-2 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Наши работы
            </a>
            <Link
              to="/calculator"
              className="block text-gray-600 hover:text-brand-blue transition-all duration-300 py-2 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Калькулятор
            </Link>
            <a 
              href="/#contact" 
              className="block bg-brand-orange text-white rounded-md px-4 py-2 hover:bg-[#e69816] transition-all duration-300 w-full text-center hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
