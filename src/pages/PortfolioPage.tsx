
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";

const portfolioImages = [
  {
    src: "/lovable-uploads/7aabd869-4c2c-4a32-983a-9d9a29141240.png",
    alt: "Вид из окна на городской пейзаж"
  },
  {
    src: "/lovable-uploads/691306b1-1664-4340-a662-be762cd4d9e8.png",
    alt: "Дверь из ПВХ секционная"
  },
  {
    src: "/lovable-uploads/101287a6-c666-4971-ae00-df4b3a5102e1.png",
    alt: "Панорамное окно с видом на город"
  },
  {
    src: "/lovable-uploads/7c65e93d-fd9d-48e5-ba9c-2821481e2e72.png",
    alt: "Новая оконная система перед установкой"
  },
  {
    src: "/lovable-uploads/6a52874a-8666-489d-916d-5e3d4d6c505c.png",
    alt: "Транспортировка оконной системы"
  },
  {
    src: "/lovable-uploads/2f0ec128-a3b8-44b9-92e4-08a85d51300e.png",
    alt: "Белая ПВХ панельная дверь"
  },
  {
    src: "/lovable-uploads/422432bb-46b7-4e11-b6b6-86cbcdd91023.png",
    alt: "Раздвижные двери в белом цвете"
  },
  {
    src: "/lovable-uploads/3f269b2c-9763-41cf-a21f-5bb9c8314b94.png",
    alt: "Новая дверная система перед установкой"
  },
  {
    src: "/lovable-uploads/0977c5c6-8264-4067-9f98-2aef292a3032.png",
    alt: "Чёрная дверь с трехсекционным остеклением"
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
