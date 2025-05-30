
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
      className="py-24 relative overflow-hidden min-h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/lovable-uploads/251f8b97-522e-4a32-95fa-0964d05c98fb.png')"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container relative z-10">
        <div 
          ref={portfolioRef} 
          className="opacity-0 transition-opacity duration-1000 flex flex-col items-center justify-center"
        >
          <div className="mb-8">
            <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 transform -skew-x-12 px-8 py-4 inline-block shadow-2xl rounded-xl border border-white/20">
              <h2 className="text-4xl font-bold transform skew-x-12 text-white">Примеры наших работ</h2>
            </div>
          </div>
          
          <Link to="/portfolio">
            <Button 
              className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-10 py-8 rounded-lg text-xl transition-all shadow-lg hover:shadow-xl border-b-4 border-[#d48c13]"
            >
              Примеры наших работ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
