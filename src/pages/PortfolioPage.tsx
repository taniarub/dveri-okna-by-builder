
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";

const portfolioImages = [
  {
    src: "/lovable-uploads/8f0b35f2-9578-47ce-a04b-15054000b79b.png",
    alt: "Пример работы 1"
  },
  {
    src: "/lovable-uploads/fe9a4f04-5f5f-4bfe-9518-5de6ee5ae4b9.png",
    alt: "Пример работы 2"
  },
  {
    src: "/lovable-uploads/bf1adb4b-844a-4d04-ac38-415c3162fc0a.png",
    alt: "Пример работы 3"
  },
  {
    src: "/lovable-uploads/c46768b4-8797-4b77-86c7-a7e42a6e692c.png",
    alt: "Пример работы 4"
  },
  {
    src: "/lovable-uploads/8033819a-3a26-4619-b0bf-6082fd0c0f5d.png",
    alt: "Пример работы 5"
  },
  {
    src: "/lovable-uploads/2afc01e0-1096-4896-9b81-bd6b60bd2641.png",
    alt: "Пример работы 6"
  },
  {
    src: "/lovable-uploads/980d9534-9ce3-448e-b7aa-1e4e05c2fb02.png", 
    alt: "Пример работы 7"
  },
  {
    src: "/lovable-uploads/c94fff34-e275-454c-929d-cbec5df5aae0.png",
    alt: "Пример работы 8"
  },
  // Original images from the portfolio page
  {
    src: "/lovable-uploads/f20fe5a5-0623-4c64-be89-f265f3d5c854.png", 
    alt: "Пример работы 9"
  },
  {
    src: "/lovable-uploads/6cad4c0c-2c32-4e2f-9396-13a62480b0ce.png", 
    alt: "Пример работы 10"
  },
  {
    src: "/lovable-uploads/31a4e6c7-d1b8-48e3-a897-ac696f727e30.png", 
    alt: "Пример работы 11"
  },
  {
    src: "/lovable-uploads/a91cf04f-0ce8-42d5-8f4d-8ce029939f97.png", 
    alt: "Пример работы 12"
  },
  {
    src: "/lovable-uploads/86d974bd-d606-47e8-83bb-75d0e9c7d91a.png", 
    alt: "Пример работы 13"
  },
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
