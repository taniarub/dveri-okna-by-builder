
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
        backgroundImage: "url('/lovable-uploads/30fb427c-42ca-47b0-974c-df719af004a2.png')"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container relative z-10">
        <div 
          ref={portfolioRef} 
          className="opacity-0 transition-opacity duration-1000 flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-white">Примеры наших работ</h2>
          
          <Button 
            className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-10 py-8 rounded-lg text-xl transition-all shadow-lg hover:shadow-xl border-b-4 border-[#d48c13]"
          >
            Примеры наших работ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
