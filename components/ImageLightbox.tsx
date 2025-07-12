
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
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
    >
      <div className="relative max-w-6xl max-h-[90vh] w-full">
        <button 
          className="absolute top-4 right-4 bg-white rounded-full p-2 transition-colors hover:bg-gray-200"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-6 w-6 text-black" />
        </button>
        <div className="bg-white p-2 rounded-lg shadow-xl overflow-hidden">
          <img 
            src={imageUrl} 
            alt={alt} 
            className="max-h-[80vh] max-w-full object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
