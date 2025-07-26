
'use client'

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface ImageLightboxProps {
  imageUrl: string;
  alt: string;
  onClose: () => void;
}

const ImageLightbox = ({ imageUrl, alt, onClose }: ImageLightboxProps) => {
  const lightboxRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  // Минимальное расстояние для определения свайпа
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // иначе свайп может сработать при скролле
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;
    
    // Закрывать лайтбокс при свайпе вверх или вниз
    if (isUpSwipe || isDownSwipe) {
      onClose();
    }
  };

  // Close on click outside the image
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleClickOutside = (event: MouseEvent) => {
      if (lightboxRef.current && event.target === lightboxRef.current) {
        onClose();
      }
    };

    // Close on escape key press
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  return (
    <div 
      ref={lightboxRef}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 md:p-4"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative max-w-6xl max-h-[95vh] w-full h-full flex items-center justify-center">
        {/* Кнопка закрытия */}
        <button 
          className="absolute top-4 right-4 bg-white rounded-full p-3 z-10 shadow-lg min-h-[48px] min-w-[48px] flex items-center justify-center"
          onClick={onClose}
          aria-label="Закрыть изображение"
        >
          <X className="h-6 w-6 text-black" />
        </button>
        
        {/* Контейнер изображения */}
        <div className="bg-white p-2 rounded-lg shadow-xl overflow-hidden max-w-full max-h-full">
          <img 
            src={imageUrl} 
            alt={alt} 
            className="max-h-[85vh] max-w-full object-contain mx-auto block"
            style={{ 
              maxWidth: 'calc(100vw - 32px)', 
              maxHeight: 'calc(100vh - 120px)'
            }}
            draggable={false}
          />
        </div>
        
        {/* Кнопка закрытия внизу для мобильных */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 md:hidden">
          <button 
            className="bg-white rounded-full px-8 py-3 shadow-lg min-h-[48px] flex items-center justify-center"
            onClick={onClose}
          >
            <span className="text-black font-medium text-base">Закрыть</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
