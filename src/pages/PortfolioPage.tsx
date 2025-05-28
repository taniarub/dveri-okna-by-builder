import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { Button } from "@/components/ui/button";

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
  },
  {
    src: "/lovable-uploads/8e2b30d3-c283-4178-946d-e7b78968f2c5.png",
    alt: "Белые пластиковые окна в кирпичном доме"
  },
  {
    src: "/lovable-uploads/2e7b11a4-8e01-48d9-9eb0-f6b0a0311d1b.png",
    alt: "Белые окна с арочным дизайном в производстве"
  },
  {
    src: "/lovable-uploads/072e5201-cf25-4290-8c68-000e30a7463f.png",
    alt: "Белые пластиковые окна и двери в процессе установки"
  },
  {
    src: "/lovable-uploads/926930bf-2f14-4680-a760-9ab3f3ad6f59.png",
    alt: "Белые пластиковые двери с многокамерным остеклением"
  },
  {
    src: "/lovable-uploads/a3fee1b6-658f-4052-a7f3-ff07a86a0101.png",
    alt: "Установка белых окон и дверей на балконе"
  },
  {
    src: "/lovable-uploads/acf01a73-d054-48e2-b15f-81d2264f566b.png",
    alt: "Белые пластиковые двери с тремя створками"
  },
  {
    src: "/lovable-uploads/ade91ed9-baa1-4c74-88ce-f33e1ff0727f.png",
    alt: "Большие белые окна и двери на кирпичном доме"
  },
  {
    src: "/lovable-uploads/f94c3198-586f-4be8-bf09-dda086360082.png",
    alt: "Белая пластиковая дверь с комбинированным остеклением"
  },
  {
    src: "/lovable-uploads/5c3bc3b9-f688-460e-9078-b5f0ecd17014.png",
    alt: "Темная входная дверь в строящемся доме"
  },
  {
    src: "/lovable-uploads/e9d0f43b-560e-4788-a121-f74e6614f06c.png",
    alt: "Коричневая пластиковая дверь с тремя панелями в процессе установки"
  },
  {
    src: "/lovable-uploads/c4a41f14-224b-4b89-80ee-eb94e6134070.png",
    alt: "Черная входная дверь с горизонтальными стеклянными вставками"
  },
  {
    src: "/lovable-uploads/5d86d7a2-3aac-4bed-9ebd-cdeeb3f2004d.png",
    alt: "Черная входная дверь с большими стеклянными панелями"
  },
  {
    src: "/lovable-uploads/2880df95-8940-416b-90fe-8d815f8f4fff.png",
    alt: "Темные окна и дверь в каменном доме"
  },
  {
    src: "/lovable-uploads/7dd23bd1-624f-4386-b886-d867e990faae.png",
    alt: "Белые пластиковые окна и двери в кирпичном доме"
  },
  {
    src: "/lovable-uploads/7899a64a-10e8-4780-ae70-2df0a061ad79.png",
    alt: "Белые пластиковые двери с защитной пленкой"
  },
  {
    src: "/lovable-uploads/12ef9963-23c6-4f38-8b39-31aa4c9f7f71.png",
    alt: "Белая пластиковая дверь с множественными стеклянными панелями"
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
