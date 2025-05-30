import { useRef, useEffect } from 'react';

const AboutUs = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const element = aboutRef.current;

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
    <section id="about" className="bg-[#FFF5EC] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 transform -skew-x-12 px-8 py-4 inline-block shadow-2xl rounded-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold transform skew-x-12 text-white">Почему мы?</h2>
          </div>
        </div>
        
        <div 
          ref={aboutRef}
          className="opacity-0 transition-opacity duration-1000 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="lg:order-1">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-medium mb-4">Наша команда профессионалов</h3>
              <p className="text-gray-600 mb-6">
                Мы работаем с окнами и дверями ПВХ с 2009 года и знаем все тонкости этого дела. 
                Наши специалисты имеют многолетний опыт и постоянно повышают свою квалификацию.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  <span>Более 15 лет опыта работы</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  <span>Сертифицированные специалисты</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                  <span>Индивидуальный подход к каждому клиенту</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:order-2">
            <img 
              src="/lovable-uploads/a662a934-24ed-4cac-8191-15134efd4c0e.png" 
              alt="Команда профессионалов по установке окон" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
