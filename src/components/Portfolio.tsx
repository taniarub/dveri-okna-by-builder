
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
    <section id="projects" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Примеры наших работ</h2>

        <div ref={portfolioRef} className="opacity-0 transition-opacity duration-1000 max-w-md mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link 
              to="/window-examples" 
              className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-8 py-4 rounded-md transition-colors text-center text-xl"
            >
              Окна
            </Link>
            <Link 
              to="/door-examples" 
              className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-8 py-4 rounded-md transition-colors text-center text-xl"
            >
              Двери
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
