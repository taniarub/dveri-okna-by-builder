
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const DoorExamples = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      image: "/lovable-uploads/aa6c52fb-c097-4358-a7f8-822b165af40f.png",
      title: "Оконные и дверные элементы",
      subtitle: "Различные размеры",
    },
    {
      image: "/lovable-uploads/f70072cc-b0a5-4a03-9b4b-a86bd4045de6.png",
      title: "Панорамные двери",
      subtitle: "Белый профиль",
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
    <div>
      <Header />
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-4xl font-bold">Примеры наших работ: Двери</h2>
            <Link to="/" className="text-brand-orange hover:underline">
              Вернуться на главную
            </Link>
          </div>

          <div ref={portfolioRef} className="opacity-0 transition-opacity duration-1000">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        
        {/* Image Modal */}
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
                <X className="w-6 h-6" />
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
      <Footer />
    </div>
  );
};

export default DoorExamples;
