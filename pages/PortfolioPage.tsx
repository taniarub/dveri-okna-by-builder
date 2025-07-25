'use client'

// Portfolio organization by categories - Mon Jan 13 2025 20:45:00 +03
// Фотографии организованы по папкам: Окна (14 шт) и Двери (12 шт)
// Updated: 3 комбинированные фотографии перемещены в папку Двери
// Cache fix: добавлен параметр ?v=2025 для принудительного обновления кеша

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { Button } from "@/components/ui/button";

const portfolioImages: Array<{src: string; alt: string; category: string}> = [
  // ОКНА
  {
    src: "/lovable-uploads/Окна/c28c989c-3309-4eb0-9ef8-2cd5e9c2acec.png?v=2025",
    alt: "Белые пластиковые окна ПВХ различных размеров",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Окна/1bbbaca7-93c1-444c-80b5-5d32d9176822.png?v=2025",
    alt: "Пластиковые окна ПВХ в деревянном доме",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Окна/70427fce-56ad-45ce-a8b6-6c38c45490fd.png?v=2025",
    alt: "Коричневые деревянные окна в каменном доме",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Окна/1e8ee32d-0fd5-433d-ae08-d7dbe2c80d53.png?v=2025",
    alt: "Черные пластиковые окна в кирпичном доме",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Окна/a870395e-92a4-45c4-b768-8a67a516e22b.png?v=2025",
    alt: "Серые пластиковые окна в белом кирпичном доме",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Окна/bc50b004-a5da-4933-b08d-308e4e721760.png?v=2025",
    alt: "Темные окна в белом кирпичном доме",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Окна/0ff6a3ce-ad45-46a5-81cb-dc3fb9b3617b.png?v=2025",
    alt: "Три белых окна в зеленом деревянном доме",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Окна/a662a934-24ed-4cac-8191-15134efd4c0e.png?v=2025",
    alt: "Темные окна с декоративными элементами в кирпичном доме",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Окна/bca390b2-69a1-4634-acfe-9ebf4b324d1f.png?v=2025",
    alt: "Белые пластиковые окна в кирпичном доме",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Окна/4b4a93b2-840a-4843-aeff-57513faa3e3d.png?v=2025",
    alt: "Коричневые деревянные окна в бревенчатом доме",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Окна/8e2b30d3-c283-4178-946d-e7b78968f2c5.png?v=2025",
    alt: "Белые пластиковые окна в кирпичном доме",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Окна/2e7b11a4-8e01-48d9-9eb0-f6b0a0311d1b.png?v=2025",
    alt: "Белые окна с арочным дизайном в производстве",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Двери/072e5201-cf25-4290-8c68-000e30a7463f.png?v=2025",
    alt: "Белые пластиковые окна и двери в процессе установки",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/Двери/a3fee1b6-658f-4052-a7f3-ff07a86a0101.png?v=2025",
    alt: "Белые окна и двери на балконе",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/Двери/ade91ed9-baa1-4c74-88ce-f33e1ff0727f.png?v=2025",
    alt: "Большие белые окна и двери на кирпичном доме",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/Окна/2880df95-8940-416b-90fe-8d815f8f4fff.png?v=2025",
    alt: "Темные окна и дверь в каменном доме",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/Окна/7dd23bd1-624f-4386-b886-d867e990faae.png?v=2025",
    alt: "Белые пластиковые окна и двери в кирпичном доме",
    category: "Окна"
  },
  
  // ДВЕРИ
  {
    src: "/lovable-uploads/Двери/926930bf-2f14-4680-a760-9ab3f3ad6f59.png?v=2025",
    alt: "Белые пластиковые двери с многокамерным остеклением",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/Двери/acf01a73-d054-48e2-b15f-81d2264f566b.png?v=2025",
    alt: "Белые пластиковые двери с тремя створками",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/Двери/f94c3198-586f-4be8-bf09-dda086360082.png?v=2025",
    alt: "Белая пластиковая дверь с комбинированным остеклением",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/Двери/5c3bc3b9-f688-460e-9078-b5f0ecd17014.png?v=2025",
    alt: "Темная входная дверь в строящемся доме",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/Двери/e9d0f43b-560e-4788-a121-f74e6614f06c.png?v=2025",
    alt: "Коричневая пластиковая дверь с тремя панелями в процессе установки",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/Двери/c4a41f14-224b-4b89-80ee-eb94e6134070.png?v=2025",
    alt: "Черная входная дверь с горизонтальными стеклянными вставками",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/Двери/5d86d7a2-3aac-4bed-9ebd-cdeeb3f2004d.png?v=2025",
    alt: "Черная входная дверь с большими стеклянными панелями",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/Двери/7899a64a-10e8-4780-ae70-2df0a061ad79.png?v=2025",
    alt: "Белые пластиковые двери с защитной пленкой",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/Двери/12ef9963-23c6-4f38-8b39-31aa4c9f7f71.png?v=2025",
    alt: "Белая пластиковая дверь с множественными стеклянными панелями",
    category: "Двери"
  }
];

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  const filteredImages = selectedCategory === "Все" 
    ? portfolioImages 
    : portfolioImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="py-16 flex-grow">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-bold">Примеры наших работ</h1>
            <Link href="/" className="text-brand-blue hover:underline">
              Вернуться на главную
            </Link>
          </div>

          {/* Фильтры по категориям */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory("Все")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === "Все"
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Все работы ({portfolioImages.length})
            </button>
            <button
              onClick={() => setSelectedCategory("Окна")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === "Окна"
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Окна ({portfolioImages.filter(img => img.category === "Окна").length})
            </button>
            <button
              onClick={() => setSelectedCategory("Двери")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === "Двери"
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Двери ({portfolioImages.filter(img => img.category === "Двери").length})
            </button>
          </div>

          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">В выбранной категории пока нет работ</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
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
