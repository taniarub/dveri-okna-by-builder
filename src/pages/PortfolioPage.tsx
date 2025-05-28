import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";

const portfolioImages: Array<{src: string; alt: string}> = [
  {
    src: "/lovable-uploads/c28c989c-3309-4eb0-9ef8-2cd5e9c2acec.png",
    alt: "Белые пластиковые окна различных размеров"
  },
  {
    src: "/lovable-uploads/1bbbaca7-93c1-444c-80b5-5d32d9176822.png",
    alt: "Окна в деревянном доме с бирюзовыми и зелеными стенами"
  },
  {
    src: "/lovable-uploads/70427fce-56ad-45ce-a8b6-6c38c45490fd.png",
    alt: "Коричневые деревянные окна в каменном доме"
  },
  {
    src: "/lovable-uploads/1e8ee32d-0fd5-433d-ae08-d7dbe2c80d53.png",
    alt: "Черные пластиковые окна в кирпичном доме"
  },
  {
    src: "/lovable-uploads/a870395e-92a4-45c4-b768-8a67a516e22b.png",
    alt: "Серые пластиковые окна в белом кирпичном доме"
  },
  {
    src: "/lovable-uploads/bc50b004-a5da-4933-b08d-308e4e721760.png",
    alt: "Темные окна в белом кирпичном доме"
  },
  {
    src: "/lovable-uploads/0ff6a3ce-ad45-46a5-81cb-dc3fb9b3617b.png",
    alt: "Три белых окна в зеленом деревянном доме"
  },
  {
    src: "/lovable-uploads/a662a934-24ed-4cac-8191-15134efd4c0e.png",
    alt: "Темные окна с декоративными элементами в кирпичном доме"
  },
  {
    src: "/lovable-uploads/bca390b2-69a1-4634-acfe-9ebf4b324d1f.png",
    alt: "Белые пластиковые окна в кирпичном доме"
  },
  {
    src: "/lovable-uploads/4b4a93b2-840a-4843-aeff-57513faa3e3d.png",
    alt: "Коричневые деревянные окна в бревенчатом доме"
  }
];

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>("");

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="py-16 flex-grow">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-bold">Примеры наших работ</h1>
            <Link to="/" className="text-brand-blue hover:underline">
              Вернуться на главную
            </Link>
          </div>

          {portfolioImages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Скоро здесь появятся новые примеры наших работ</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {portfolioImages.map((image, index) => (
                <div 
                  key={index} 
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => openLightbox(image.src, image.alt)}
                >
                  <div className="relative group">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                        Увеличить
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />

      {selectedImage && (
        <ImageLightbox 
          imageUrl={selectedImage} 
          alt={selectedAlt} 
          onClose={closeLightbox} 
        />
      )}
    </div>
  );
};

export default PortfolioPage;
