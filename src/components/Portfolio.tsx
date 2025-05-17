
import { useState } from "react";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const projects = [
    {
      image: "/lovable-uploads/82a5ae65-9029-4af9-a2d7-5697675b441f.png",
      title: "Нестандартная форма",
      subtitle: "Индивидуальный дизайн",
    },
    {
      image: "/lovable-uploads/52af0b17-78ff-4908-a4ae-edf872e25bf3.png",
      title: "Современные окна",
      subtitle: "Установка в новостройке",
    },
    {
      image: "/lovable-uploads/5712a393-8821-43de-86f4-b129f6ba180b.png",
      title: "Панорамные окна",
      subtitle: "Частный дом",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Примеры наших работ</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm">{project.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Увеличенное изображение" 
              className="w-full h-auto max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
