
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
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden min-h-[500px] bg-[#FFF5EC]"
    >
      <div className="container relative z-10">
        <div 
          ref={portfolioRef} 
          className="opacity-0 transition-opacity duration-1000 flex flex-col items-center justify-center"
        >
          <div className="text-center mb-8">
            <p className="text-gray-800 text-xl mb-8">
              Наши клиенты уже наслаждаются новыми окнами. Посмотрите, как это может выглядеть и у вас
            </p>
            <Link to="/portfolio">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-12 py-4 rounded-full transition-all text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 uppercase tracking-wide">
                Примеры наших работ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
