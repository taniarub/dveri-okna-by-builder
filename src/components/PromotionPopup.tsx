
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fade-in">
      <div className="relative max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden animate-scale-in">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Закрыть"
        >
          <X size={24} />
        </button>
        
        <div className="p-6 md:p-8">
          <div className="mb-4 text-center">
            <span className="inline-block bg-brand-orange text-white font-bold text-3xl md:text-4xl px-4 py-2 rounded-lg transform -rotate-3">
              -10%
            </span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
            Скидка 10% на окна без монтажа
          </h3>
          
          <p className="text-gray-600 text-center mb-6">
            Успейте заказать окна ПВХ по выгодной цене до конца месяца
          </p>
          
          <button
            onClick={closePopup}
            className="w-full bg-brand-orange hover:bg-[#e69816] text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionPopup;
