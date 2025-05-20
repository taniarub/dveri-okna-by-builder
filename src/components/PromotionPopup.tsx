
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const PromotionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      // Check if the popup has been shown before in this session
      const hasShownPopup = sessionStorage.getItem("hasShownPromoPopup");
      if (!hasShownPopup) {
        setIsVisible(true);
        sessionStorage.setItem("hasShownPromoPopup", "true");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 animate-fade-in backdrop-blur-sm">
      <div className="relative max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden animate-scale-in border-4 border-brand-orange">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors bg-white rounded-full p-1 hover:bg-gray-100"
          aria-label="Закрыть"
        >
          <X size={24} />
        </button>
        
        <div className="p-6 md:p-8">
          <div className="mb-6 text-center">
            <span className="inline-block bg-brand-orange text-white font-bold text-4xl md:text-5xl px-6 py-3 rounded-lg transform -rotate-3 shadow-lg">
              -10%
            </span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
            Скидка 10% на окна без монтажа
          </h3>
          
          <p className="text-gray-600 text-center mb-6">
            Успейте заказать окна ПВХ по выгодной цене до конца месяца
          </p>

          <div className="text-center">
            <a 
              href="#calculator" 
              onClick={closePopup}
              className="inline-block px-6 py-3 bg-brand-orange text-white rounded-md hover:bg-[#e69816] transition-colors font-medium"
            >
              Узнать подробнее
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionPopup;
