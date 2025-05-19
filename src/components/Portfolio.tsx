
import { useState, useEffect, useRef } from "react";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      image: "/lovable-uploads/364ad069-717d-4b4a-988c-3d649a919c66.png",
      title: "Окна ПВХ с отливами",
      subtitle: "Установка в новостройке",
    },
    {
      image: "/lovable-uploads/1a182a2a-2cd3-44ab-9a6f-c2479769d998.png",
      title: "Деревенский стиль",
      subtitle: "Частный дом",
    },
    {
      image: "/lovable-uploads/93c0ab0f-0b9c-4dcf-b43b-558175a3ffb2.png",
      title: "Панорамный вид",
      subtitle: "Установка в многоэтажке",
    },
    {
      image: "/lovable-uploads/463ce09e-b4bb-4d53-90f9-1f918497508a.png",
      title: "Современное окно",
      subtitle: "Вид из квартиры",
    },
    {
      image: "/lovable-uploads/3e21605d-0e39-47b3-a757-b32b03116b30.png",
      title: "Большое окно",
      subtitle: "Вид на город",
    },
  ];

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

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Примеры наших работ</h2>

        <div ref={portfolioRef} className="opacity-0 transition-opacity duration-1000">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="cursor-pointer overflow-hidden rounded-lg shadow-md group"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Увеличенное изображение" 
              className="w-full h-auto max-h-[90vh] object-contain animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
