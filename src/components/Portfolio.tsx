
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const element = portfolioRef.current;

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
    <section id="projects" className="py-20 bg-gradient-to-r from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-[#f7be54] to-brand-orange"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-r from-transparent to-brand-orange"></div>
      
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-6">Примеры наших работ</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ознакомьтесь с нашими проектами и выберите то, что вам нравится
        </p>

        <div ref={portfolioRef} className="opacity-0 transition-opacity duration-1000 max-w-md mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <Link 
                to="/window-examples" 
                className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-8 py-6 rounded-lg transition-all flex flex-col items-center justify-center h-full shadow-md hover:shadow-xl border-b-4 border-[#d48c13]"
              >
                <span className="text-2xl">Окна</span>
              </Link>
            </div>
            <div className="transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <Link 
                to="/door-examples" 
                className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-8 py-6 rounded-lg transition-all flex flex-col items-center justify-center h-full shadow-md hover:shadow-xl border-b-4 border-[#d48c13]"
              >
                <span className="text-2xl">Двери</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
