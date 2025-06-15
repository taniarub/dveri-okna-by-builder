
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import WindowConfigurationItem from "./WindowConfigurationItem";
import ContactInfoForm from "./ContactInfoForm";

interface WindowConfig {
  windowType: string;
  frameTypes: string[];
  dimensions: { width: string; height: string };
  options: string[];
}

interface ContactInfo {
  name: string;
  phone: string;
  consent: boolean;
}

const WindowConfigurationForm = () => {
  const [windows, setWindows] = useState<WindowConfig[]>([{
    windowType: "",
    frameTypes: [],
    dimensions: { width: "", height: "" },
    options: []
  }]);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({ name: "", phone: "", consent: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWindowChange = (index: number, updatedWindow: WindowConfig) => {
    const updatedWindows = [...windows];
    updatedWindows[index] = updatedWindow;
    setWindows(updatedWindows);
  };

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  const addWindow = () => {
    setWindows([...windows, {
      windowType: "",
      frameTypes: [],
      dimensions: { width: "", height: "" },
      options: []
    }]);
  };

  const formatWindowsData = () => {
    return windows.map((window, index) => {
      const windowTypeNames = {
        "one-leaf": "Одностворчатое окно",
        "two-leaf": "Двухстворчатое окно", 
        "three-leaf": "Трехстворчатое окно",
        "balcony-door": "Балконная дверь с окном",
        "balcony-door-two-window": "Балконная дверь с двумя окнами",
        "other-type": "Другой тип окна"
      };
      
      return `Окно #${index + 1}:
Тип: ${windowTypeNames[window.windowType as keyof typeof windowTypeNames] || window.windowType}
Размеры: ${window.dimensions.width}мм x ${window.dimensions.height}мм
Опции: ${window.options.length > 0 ? window.options.join(", ") : "Нет"}`;
    }).join("\n\n");
  };

  const handleWhatsAppSend = () => {
    // Validate all windows
    for (let i = 0; i < windows.length; i++) {
      if (!windows[i].windowType) {
        toast({
          title: "Ошибка",
          description: `Выберите тип окна #${i + 1}`,
          variant: "destructive"
        });
        return;
      }

      if (!windows[i].dimensions.width || !windows[i].dimensions.height) {
        toast({
          title: "Ошибка",
          description: `Укажите размеры окна #${i + 1}`,
          variant: "destructive"
        });
        return;
      }
    }
    
    if (!contactInfo.name || !contactInfo.phone || !contactInfo.consent) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    const windowsData = formatWindowsData();
    const whatsappText = `Имя: ${contactInfo.name}%0AТелефон: ${contactInfo.phone}%0AКомментарий: Расчет окон:%0A${encodeURIComponent(windowsData)}`;
    const whatsappUrl = `https://wa.me/375293423221?text=${whatsappText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all windows
    for (let i = 0; i < windows.length; i++) {
      if (!windows[i].windowType) {
        toast({
          title: "Ошибка",
          description: `Выберите тип окна #${i + 1}`,
          variant: "destructive"
        });
        return;
      }

      if (!windows[i].dimensions.width || !windows[i].dimensions.height) {
        toast({
          title: "Ошибка",
          description: `Укажите размеры окна #${i + 1}`,
          variant: "destructive"
        });
        return;
      }
      
      if (windows[i].windowType === "other-type" && !windows[i].options.includes("description")) {
        toast({
          title: "Ошибка",
          description: `Опишите окно #${i + 1}`,
          variant: "destructive"
        });
        return;
      }
    }
    
    if (!contactInfo.name || !contactInfo.phone || !contactInfo.consent) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    const windowsData = formatWindowsData();
    const telegramMessage = `🏠 Новая заявка на расчет окон\n\n👤 Имя: ${contactInfo.name}\n📞 Телефон: ${contactInfo.phone}\n\n📋 Конфигурация окон:\n${windowsData}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot8134015742:AAHoX9DetuDOJdEzqjL5yieReKg3oayxonA/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: "277234658",
          text: telegramMessage
        })
      });

      if (response.ok) {
        toast({
          title: "Заявка отправлена",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        
        // Reset form
        setWindows([{
          windowType: "",
          frameTypes: [],
          dimensions: { width: "", height: "" },
          options: []
        }]);
        setContactInfo({ name: "", phone: "", consent: false });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        {windows.map((window, windowIndex) => (
          <WindowConfigurationItem
            key={windowIndex}
            windowIndex={windowIndex}
            window={window}
            onWindowChange={handleWindowChange}
          />
        ))}

        <div className="mb-8 flex justify-center">
          <button
            type="button"
            onClick={addWindow}
            className="px-8 py-3 bg-brand-orange text-white rounded-md hover:bg-[#e69816] transition-colors"
          >
            Добавить окно
          </button>
        </div>
        
        <ContactInfoForm 
          contactInfo={contactInfo}
          onContactInfoChange={handleContactInfoChange}
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-brand-orange text-white rounded-md hover:bg-[#e69816] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Отправляется...' : 'Отправить заявку'}
          </button>
          
          <button
            type="button"
            onClick={handleWhatsAppSend}
            className="px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <img 
              src="/lovable-uploads/653de03b-05d0-4cd5-b6bf-515fa14a31d6.png" 
              alt="WhatsApp" 
              className="w-5 h-5" 
            />
            Отправить в WhatsApp
          </button>
        </div>
      </div>
    </form>
  );
};

export default WindowConfigurationForm;
