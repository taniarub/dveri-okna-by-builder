
import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const AboutUs = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const aboutElement = aboutRef.current;
      const statsElement = statsRef.current;

      if (aboutElement) {
        const aboutPosition = aboutElement.offsetTop;
        if (scrollY > aboutPosition - window.innerHeight * 0.75) {
          aboutElement.classList.add('animate-fade-in');
        }
      }

      if (statsElement) {
        const statsPosition = statsElement.offsetTop;
        if (scrollY > statsPosition - window.innerHeight * 0.75) {
          statsElement.classList.add('animate-fade-in');
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
    <section id="about" className="py-16 bg-[#f9f9f7]">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
            Мы - команда профессионалов с более чем 15-летним опытом в установке и обслуживании окон.
          </p>
        </div>

        <div ref={aboutRef} className="flex flex-col md:flex-row gap-12 items-center opacity-0 transition-opacity duration-1000">
          <div className="md:w-1/2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Check className="flex-shrink-0 w-6 h-6 text-brand-orange mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-2">Наша миссия</h3>
                  <p className="text-gray-700">
                    Делать дома уютнее с помощью передовых технологий и надёжных решений.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="flex-shrink-0 w-6 h-6 text-brand-orange mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-2">Наш подход</h3>
                  <p className="text-gray-700">
                    Мы подбираем решения под ваши задачи — от первой консультации до установки и сервиса после продажи.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Check className="flex-shrink-0 w-6 h-6 text-brand-orange mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-2">Наш опыт</h3>
                  <p className="text-gray-700">
                    Более 10 000 установленных окон по всей стране — наш главный показатель качества и доверия.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/5">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/e230526e-d80b-4868-aab3-847cc0b062f7.png" 
                alt="Окно в интерьере" 
                className="w-full h-auto rounded-lg" 
              />
            </div>
          </div>
        </div>
      
        {/* Stats section */}
        <div ref={statsRef} className="mt-16 opacity-0 transition-opacity duration-1000">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
              <h3 className="text-5xl font-bold text-brand-red mb-2">15+</h3>
              <p className="text-gray-700">Лет опыта</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
              <h3 className="text-5xl font-bold text-brand-red mb-2">5000+</h3>
              <p className="text-gray-700">Довольных клиентов</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
              <h3 className="text-5xl font-bold text-brand-red mb-2">10000+</h3>
              <p className="text-gray-700">Установленных окон</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
