
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
  },
  // Previously added images
  {
    src: "/lovable-uploads/de2abc1c-027a-4921-8049-5cb88baa3a65.png",
    alt: "Двустворчатое окно с установкой в белом цвете"
  },
  {
    src: "/lovable-uploads/40ec8548-5185-4bb5-89b7-cb6fc8dd3c80.png",
    alt: "Чёрная дверь с многосекционным остеклением"
  },
  {
    src: "/lovable-uploads/653b459a-6124-494c-ba37-2cad708e0d56.png",
    alt: "Тёмная входная дверь с двойным остеклением"
  },
  {
    src: "/lovable-uploads/dbbf74cd-7a3b-4b6e-b969-332b7d4c19ca.png",
    alt: "Окна и дверь в стадии установки"
  },
  {
    src: "/lovable-uploads/c4c1ab97-b66f-4e79-a841-c6f6781195b5.png",
    alt: "Деревянная входная дверь с окнами по бокам"
  },
  {
    src: "/lovable-uploads/3f03fdda-803c-434e-aa2a-a1da0a7016ca.png",
    alt: "Современные окна в белом доме"
  },
  {
    src: "/lovable-uploads/5270e569-ce25-49ea-ba80-224e6bf40e26.png",
    alt: "Три белых окна в зелёном деревянном доме"
  },
  {
    src: "/lovable-uploads/74982c13-bdf1-4c00-bdfd-fafbeb2d6f84.png",
    alt: "Чёрные окна с декоративной раскладкой в кирпичном доме"
  },
  {
    src: "/lovable-uploads/9affab7b-7004-44b2-bf21-6b1872cb8fc1.png",
    alt: "Белое окно с декоративной раскладкой в кирпичном доме"
  },
  // Latest batch of uploaded images
  {
    src: "/lovable-uploads/99f9d80e-9038-434e-a6a8-3186ea541760.png",
    alt: "Горизонтальное окно в кирпичном доме"
  },
  {
    src: "/lovable-uploads/ced40bdc-3086-45de-954a-e0e2bc171137.png",
    alt: "Деревянные окна с декоративной раскладкой в деревянном доме"
  },
  {
    src: "/lovable-uploads/999987dd-1999-4267-a53e-3796b78af2b6.png",
    alt: "Серые окна в белом кирпичном доме"
  },
  {
    src: "/lovable-uploads/46a6cf07-0a62-483f-b178-533990ad1fb9.png",
    alt: "Белые окна перед установкой"
  },
  {
    src: "/lovable-uploads/a993deac-5e74-4ca5-ad1c-e807baca9a9c.png",
    alt: "Белые окна и двери в кирпичном доме"
  },
  {
    src: "/lovable-uploads/f94249a2-03d0-4970-ba71-2cb3c7cc8afa.png",
    alt: "Белые окна в желтом кирпичном доме"
  },
  {
    src: "/lovable-uploads/b0551884-0f34-4d74-94cf-17ec56da4617.png",
    alt: "Белое застекление балкона в кирпичном доме"
  },
  {
    src: "/lovable-uploads/28e84f23-1bd5-418a-bd56-6d4fcf66b61c.png",
    alt: "Балконные двери и окна в белом цвете"
  },
  {
    src: "/lovable-uploads/b65b0426-5481-4496-a0e7-c8062d8dd321.png",
    alt: "Окна с арочным верхом перед установкой"
  },
  // Newest batch of images
  {
    src: "/lovable-uploads/b432003f-03d0-4d3f-8577-68614f8e067c.png",
    alt: "Вид через окно с видом на двор"
  },
  {
    src: "/lovable-uploads/e5064329-3519-4e33-ad83-dcb4e339690a.png",
    alt: "Белая трёхстворчатая дверь перед установкой"
  },
  {
    src: "/lovable-uploads/cd43adf0-93d5-43d1-8db8-a3df1eb8eb32.png",
    alt: "Белая дверь с многосекционным остеклением перед установкой"
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
