
import { useEffect, useRef } from "react";
import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const CalculatorBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const element = bannerRef.current;

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
    <section className="py-20 bg-brand-beige">
      <div className="container">
        <div 
          ref={bannerRef}
          className="flex flex-col items-center text-center max-w-3xl mx-auto opacity-0 transition-opacity duration-1000"
        >
          <h2 className="text-4xl font-bold mb-6">Калькулятор стоимости</h2>
          <p className="text-xl mb-8">
            Рассчитайте предварительную стоимость окон с учетом ваших требований.
          </p>
          <Link 
            to="/calculator" 
            className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-10 py-4 rounded-md transition-colors text-lg"
          >
            Рассчитать стоимость
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CalculatorBanner;
