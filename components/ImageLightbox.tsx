
'use client'

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ImageLightboxProps {
  imageUrl: string;
  alt: string;
  onClose: () => void;
}

const ImageLightbox = ({ imageUrl, alt, onClose }: ImageLightboxProps) => {
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Close on click outside the image
  useEffect(() => {
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
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 md:p-4 animate-fade-in"
    >
      <div className="relative max-w-6xl max-h-[95vh] w-full h-full flex items-center justify-center">
        {/* Кнопка закрытия - больше для мобильных */}
        <button 
          className="absolute top-2 right-2 md:top-4 md:right-4 bg-white rounded-full p-3 md:p-2 transition-colors hover:bg-gray-200 z-10 shadow-lg"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-8 w-8 md:h-6 md:w-6 text-black" />
        </button>
        
        {/* Контейнер изображения */}
        <div className="bg-white p-1 md:p-2 rounded-lg shadow-xl overflow-hidden max-w-full max-h-full">
          <img 
            src={imageUrl} 
            alt={alt} 
            className="max-h-[90vh] md:max-h-[80vh] max-w-full object-contain mx-auto"
            style={{ maxWidth: '100vw', maxHeight: '90vh' }}
          />
        </div>
        
        {/* Дополнительная кнопка закрытия внизу для мобильных */}
        <button 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-2 transition-colors hover:bg-gray-200 z-10 shadow-lg md:hidden"
          onClick={onClose}
        >
          <span className="text-black font-medium">Закрыть</span>
        </button>
      </div>
    </div>
  );
};

export default ImageLightbox;
