
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
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-brand-beige skew-y-1 transform -translate-y-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7cc7833] to-transparent z-0"></div>
      <div className="container relative z-10">
        <div 
          ref={bannerRef}
          className="flex flex-col items-center text-center max-w-3xl mx-auto opacity-0 transition-opacity duration-1000 bg-white/70 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-brand-orange/20"
        >
          <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-6 shadow-lg">
            <Calculator className="text-white w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Калькулятор стоимости</h2>
          <p className="text-xl mb-8">
            Рассчитайте предварительную стоимость окон с учетом ваших требований.
          </p>
          <Link 
            to="/calculator" 
            className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-12 py-4 rounded-full transition-all text-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 border-b-2 border-[#d48c13]"
          >
            Рассчитать стоимость
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CalculatorBanner;
