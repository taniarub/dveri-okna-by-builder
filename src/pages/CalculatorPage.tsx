import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import WindowTypeSelector from "@/components/WindowTypeSelector";
import WindowFrameSelector from "@/components/WindowFrameSelector";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CalculatorPage = () => {
  const [windows, setWindows] = useState([{
    windowType: "",
    frameTypes: [] as string[],
    dimensions: { width: "", height: "" },
    options: [] as string[],
  }]);
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

  const handleWindowTypeChange = (type: string, index: number) => {
    const updatedWindows = [...windows];
    updatedWindows[index].windowType = type;
    
    // Reset frames when window type changes
    updatedWindows[index].frameTypes = Array(getWindowCount(type)).fill("fixed");
    setWindows(updatedWindows);
  };

  const handleFrameTypeChange = (frames: string[], index: number) => {
    const updatedWindows = [...windows];
    updatedWindows[index].frameTypes = frames;
    setWindows(updatedWindows);
  };

  const handleDimensionsChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const updatedWindows = [...windows];
    updatedWindows[index].dimensions = {
      ...updatedWindows[index].dimensions,
      [name]: value
    };
    setWindows(updatedWindows);
  };

  const toggleOption = (option: string, index: number) => {
    const updatedWindows = [...windows];
    const currentOptions = updatedWindows[index].options;
    
    if (currentOptions.includes(option)) {
      updatedWindows[index].options = currentOptions.filter(o => o !== option);
    } else {
      if (option === "none" && currentOptions.length > 0) {
        updatedWindows[index].options = ["none"];
      } else if (currentOptions.includes("none")) {
        updatedWindows[index].options = [...currentOptions.filter(o => o !== "none"), option];
      } else {
        updatedWindows[index].options = [...currentOptions, option];
      }
    }
    
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

  const handleSubmit = () => {
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
    
    // Form submission logic
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
  };

  // Adjusted labels for window panes based on the position
  const getFrameLabel = (index: number, windowType: string, frameIndex: number) => {
    if (windowType === "one-leaf") return "Окно";
    
    if (windowType === "two-leaf") {
      return frameIndex === 0 ? "Левое окно" : "Правое окно";
    }
    
    if (windowType === "three-leaf") {
      return frameIndex === 0 ? "Левое окно" : frameIndex === 1 ? "Центральное окно" : "Правое окно";
    }
    
    if (windowType === "balcony-door-two-window") {
      if (frameIndex === 0) return "Левое окно";
      if (frameIndex === 1) return "Правое окно";
      return "Балконная дверь";
    }
    
    if (windowType === "balcony-door") {
      if (frameIndex === 0) return "Окно";
      return "Балконная дверь";
    }
    
    return `Окно ${frameIndex + 1}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5EC]">
      <Header />
      <div className="py-16 flex-grow animate-fade-in">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-bold">Калькулятор стоимости</h1>
            <Link to="/" className="text-brand-blue hover:underline">
              Вернуться на главную
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            {windows.map((window, windowIndex) => (
              <div key={windowIndex} className="mb-12">
                {windowIndex > 0 && (
                  <div className="border-t border-gray-200 pt-8 mb-8">
                    <h2 className="text-2xl font-bold mb-6">Окно #{windowIndex + 1}</h2>
                  </div>
                )}
                
                <ol className="list-decimal list-inside space-y-8">
                  <li className="pb-8 border-b">
                    <h2 className="text-2xl font-medium mb-6">Выберите тип окна</h2>
                    <WindowTypeSelector 
                      onChange={(type) => handleWindowTypeChange(type, windowIndex)} 
                      value={window.windowType} 
                    />
                  </li>
                  
                  {window.windowType && window.windowType !== "other-type" && (
                    <li className="pb-8 border-b">
                      <h2 className="text-2xl font-medium mb-6">Выберите тип оконной створки</h2>
                      <WindowFrameSelector 
                        onChange={(frames) => handleFrameTypeChange(frames, windowIndex)}
                        windowCount={getWindowCount(window.windowType)}
                        windowType={window.windowType}
                      />
                    </li>
                  )}

                  <li className="pb-8 border-b">
                    <h2 className="text-2xl font-medium mb-6">Укажите размеры</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2">Ширина, мм</label>
                        <input
                          type="number"
                          name="width"
                          value={window.dimensions.width}
                          onChange={(e) => handleDimensionsChange(e, windowIndex)}
                          className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue focus:outline-none"
                          placeholder="Введите ширину"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Высота, мм</label>
                        <input
                          type="number"
                          name="height"
                          value={window.dimensions.height}
                          onChange={(e) => handleDimensionsChange(e, windowIndex)}
                          className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue focus:outline-none"
                          placeholder="Введите высоту"
                        />
                      </div>
                    </div>
                    
                    {window.windowType === "other-type" && (
                      <div className="mt-6">
                        <label className="block mb-2">Опишите, какое вы хотите окно</label>
                        <textarea
                          className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue focus:outline-none"
                          placeholder="Опишите детали вашего окна..."
                          rows={4}
                          onChange={() => {
                            // Mark that the description was provided
                            if (!window.options.includes("description")) {
                              const newOptions = [...window.options, "description"];
                              const updatedWindows = [...windows];
                              updatedWindows[windowIndex].options = newOptions;
                              setWindows(updatedWindows);
                            }
                          }}
                        />
                      </div>
                    )}
                  </li>
                
                  <li className="pb-8 border-b">
                    <h2 className="text-2xl font-medium mb-6">Дополнительные опции</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                      <div className="flex items-center">
                        <input
                          id={`option-mosquito-${windowIndex}`}
                          type="checkbox"
                          className="w-5 h-5"
                          checked={window.options.includes("mosquito")}
                          onChange={() => toggleOption("mosquito", windowIndex)}
                          disabled={window.options.includes("none")}
                        />
                        <label htmlFor={`option-mosquito-${windowIndex}`} className="ml-2">Москитная сетка</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id={`option-drain-${windowIndex}`}
                          type="checkbox"
                          className="w-5 h-5"
                          checked={window.options.includes("drain")}
                          onChange={() => toggleOption("drain", windowIndex)}
                          disabled={window.options.includes("none")}
                        />
                        <label htmlFor={`option-drain-${windowIndex}`} className="ml-2">Отлив</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id={`option-sill-${windowIndex}`}
                          type="checkbox"
                          className="w-5 h-5"
                          checked={window.options.includes("sill")}
                          onChange={() => toggleOption("sill", windowIndex)}
                          disabled={window.options.includes("none")}
                        />
                        <label htmlFor={`option-sill-${windowIndex}`} className="ml-2">Подоконник</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id={`option-none-${windowIndex}`}
                          type="checkbox"
                          className="w-5 h-5"
                          checked={window.options.includes("none")}
                          onChange={() => toggleOption("none", windowIndex)}
                        />
                        <label htmlFor={`option-none-${windowIndex}`} className="ml-2">Ничего из перечисленного</label>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            ))}

            <div className="mb-8 flex justify-center">
              <button
                onClick={addWindow}
                className="px-8 py-3 bg-brand-orange text-white rounded-md hover:bg-[#e69816] transition-colors"
              >
                Добавить окно
              </button>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-medium mb-6">Контактные данные</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block mb-2">Ваше имя*</label>
                  <input
                    type="text"
                    name="name"
                    value={contactInfo.name}
                    onChange={handleContactInfoChange}
                    className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue focus:outline-none"
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
                    className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue focus:outline-none"
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
                    Нажимая кнопку, вы соглашаетесь на <a href="#" className="text-brand-orange underline">обработку персональных данных</a>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-brand-orange text-white rounded-md hover:bg-[#e69816] transition-colors"
              >
                Отправить заявку
              </button>
            </div>
            
            <div className="text-center mt-4 text-sm text-gray-500">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CalculatorPage;
