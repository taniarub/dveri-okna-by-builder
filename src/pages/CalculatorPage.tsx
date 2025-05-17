
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import WindowTypeSelector from "@/components/WindowTypeSelector";
import WindowFrameSelector from "@/components/WindowFrameSelector";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CalculatorPage = () => {
  const [windowType, setWindowType] = useState("");
  const [frameTypes, setFrameTypes] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState({ width: "", height: "" });
  const [options, setOptions] = useState<string[]>([]);
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "", consent: false });

  const getWindowCount = (type: string) => {
    switch (type) {
      case "one-leaf":
        return 1;
      case "two-leaf":
        return 2;
      case "three-leaf":
        return 3;
      case "balcony-door-two-window":
        return 3; // 2 windows + 1 door
      case "balcony-door":
        return 2; // 1 window + 1 door
      case "other-type":
      default:
        return 0;
    }
  };

  const handleWindowTypeChange = (type: string) => {
    setWindowType(type);
    // Reset frames when window type changes
    setFrameTypes(Array(getWindowCount(type)).fill("fixed"));
  };

  const handleFrameTypeChange = (frames: string[]) => {
    setFrameTypes(frames);
  };

  const handleDimensionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDimensions({
      ...dimensions,
      [e.target.name]: e.target.value
    });
  };

  const toggleOption = (option: string) => {
    if (options.includes(option)) {
      setOptions(options.filter(o => o !== option));
    } else {
      if (option === "none" && options.length > 0) {
        setOptions(["none"]);
      } else if (options.includes("none")) {
        setOptions([...options.filter(o => o !== "none"), option]);
      } else {
        setOptions([...options, option]);
      }
    }
  };

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = () => {
    if (!windowType) {
      toast({
        title: "Ошибка",
        description: "Выберите тип окна",
        variant: "destructive"
      });
      return;
    }

    if (!dimensions.width || !dimensions.height) {
      toast({
        title: "Ошибка",
        description: "Укажите размеры окна",
        variant: "destructive"
      });
      return;
    }
    
    if (!contactInfo.name || !contactInfo.phone || !contactInfo.consent) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }
    
    // Form submission logic
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    
    // Reset form
    setWindowType("");
    setFrameTypes([]);
    setDimensions({ width: "", height: "" });
    setOptions([]);
    setContactInfo({ name: "", phone: "", consent: false });
  };

  return (
    <div>
      <Header />
      <div className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-bold">Калькулятор стоимости</h1>
            <Link to="/" className="text-brand-blue hover:underline">
              Вернуться на главную
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-medium mb-8">1. Выберите тип окна</h2>
            <WindowTypeSelector onChange={handleWindowTypeChange} value={windowType} />
            
            <h2 className="text-2xl font-medium mt-12 mb-8">2. Выберите тип оконной створки</h2>
            <WindowFrameSelector 
              onChange={handleFrameTypeChange}
              windowCount={getWindowCount(windowType)}
              windowType={windowType}
            />

            <h2 className="text-2xl font-medium mt-12 mb-8">3. Укажите размеры</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block mb-2">Ширина, мм</label>
                <input
                  type="number"
                  name="width"
                  value={dimensions.width}
                  onChange={handleDimensionsChange}
                  className="w-full p-3 border rounded-md"
                  placeholder="Введите ширину"
                />
              </div>
              <div>
                <label className="block mb-2">Высота, мм</label>
                <input
                  type="number"
                  name="height"
                  value={dimensions.height}
                  onChange={handleDimensionsChange}
                  className="w-full p-3 border rounded-md"
                  placeholder="Введите высоту"
                />
              </div>
            </div>
            
            <h2 className="text-2xl font-medium mt-12 mb-8">4. Дополнительные опции</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 mb-12">
              <div className="flex items-center">
                <input
                  id="option-mosquito"
                  type="checkbox"
                  className="w-5 h-5"
                  checked={options.includes("mosquito")}
                  onChange={() => toggleOption("mosquito")}
                  disabled={options.includes("none")}
                />
                <label htmlFor="option-mosquito" className="ml-2">Москитная сетка</label>
              </div>
              <div className="flex items-center">
                <input
                  id="option-drain"
                  type="checkbox"
                  className="w-5 h-5"
                  checked={options.includes("drain")}
                  onChange={() => toggleOption("drain")}
                  disabled={options.includes("none")}
                />
                <label htmlFor="option-drain" className="ml-2">Отлив</label>
              </div>
              <div className="flex items-center">
                <input
                  id="option-sill"
                  type="checkbox"
                  className="w-5 h-5"
                  checked={options.includes("sill")}
                  onChange={() => toggleOption("sill")}
                  disabled={options.includes("none")}
                />
                <label htmlFor="option-sill" className="ml-2">Подоконник</label>
              </div>
              <div className="flex items-center">
                <input
                  id="option-none"
                  type="checkbox"
                  className="w-5 h-5"
                  checked={options.includes("none")}
                  onChange={() => toggleOption("none")}
                />
                <label htmlFor="option-none" className="ml-2">Ничего из перечисленного</label>
              </div>
            </div>

            <h2 className="text-2xl font-medium mt-12 mb-8">5. Контактные данные</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block mb-2">Ваше имя*</label>
                <input
                  type="text"
                  name="name"
                  value={contactInfo.name}
                  onChange={handleContactInfoChange}
                  className="w-full p-3 border rounded-md"
                  placeholder="Введите имя"
                />
              </div>
              <div>
                <label className="block mb-2">Телефон*</label>
                <input
                  type="tel"
                  name="phone"
                  value={contactInfo.phone}
                  onChange={handleContactInfoChange}
                  className="w-full p-3 border rounded-md"
                  placeholder="+375 XX XXX XX XX"
                />
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="w-5 h-5"
                  checked={contactInfo.consent}
                  onChange={handleContactInfoChange}
                />
                <label htmlFor="consent" className="ml-2">
                  Вы соглашаетесь на <a href="#" className="text-brand-blue underline">обработку персональных данных</a>
                </label>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-brand-red text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CalculatorPage;
