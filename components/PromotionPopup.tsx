
'use client'

import { useState, useEffect } from "react";

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
          
          <div className="flex justify-center">
            <button
              onClick={closePopup}
              className="bg-brand-orange hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionPopup;
