
import { useState } from "react";
import WindowTypeSelector from "./WindowTypeSelector";
import WindowFrameSelector from "./WindowFrameSelector";

interface WindowConfig {
  windowType: string;
  frameTypes: string[];
  dimensions: { width: string; height: string };
  options: string[];
}

interface WindowConfigurationItemProps {
  windowIndex: number;
  window: WindowConfig;
  onWindowChange: (index: number, window: WindowConfig) => void;
}

const WindowConfigurationItem = ({ windowIndex, window, onWindowChange }: WindowConfigurationItemProps) => {
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
    const updatedWindow = {
      ...window,
      windowType: type,
      frameTypes: Array(getWindowCount(type)).fill("fixed")
    };
    onWindowChange(windowIndex, updatedWindow);
  };

  const handleFrameTypeChange = (frames: string[]) => {
    const updatedWindow = {
      ...window,
      frameTypes: frames
    };
    onWindowChange(windowIndex, updatedWindow);
  };

  const handleDimensionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedWindow = {
      ...window,
      dimensions: {
        ...window.dimensions,
        [name]: value
      }
    };
    onWindowChange(windowIndex, updatedWindow);
  };

  const toggleOption = (option: string) => {
    const currentOptions = window.options;
    let newOptions;
    
    if (currentOptions.includes(option)) {
      newOptions = currentOptions.filter(o => o !== option);
    } else {
      if (option === "none" && currentOptions.length > 0) {
        newOptions = ["none"];
      } else if (currentOptions.includes("none")) {
        newOptions = [...currentOptions.filter(o => o !== "none"), option];
      } else {
        newOptions = [...currentOptions, option];
      }
    }
    
    const updatedWindow = {
      ...window,
      options: newOptions
    };
    onWindowChange(windowIndex, updatedWindow);
  };

  return (
    <div className="mb-12">
      {windowIndex > 0 && (
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Окно #{windowIndex + 1}</h2>
        </div>
      )}
      
      <ol className="list-decimal list-inside space-y-8">
        <li className="pb-8 border-b">
          <h2 className="text-2xl font-medium mb-6">Выберите тип окна</h2>
          <WindowTypeSelector 
            onChange={handleWindowTypeChange} 
            value={window.windowType} 
          />
        </li>
        
        {window.windowType && window.windowType !== "other-type" && (
          <li className="pb-8 border-b">
            <h2 className="text-2xl font-medium mb-6">Выберите тип оконной створки</h2>
            <WindowFrameSelector 
              onChange={handleFrameTypeChange}
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
                onChange={handleDimensionsChange}
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
                onChange={handleDimensionsChange}
                className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue focus:outline-none"
                placeholder="Введите высоту"
              />
            </div>
          </div>
          
          {window.windowType === "other-type" && (
            <div className="mt-6">
              <label className="block mb-2">Опишите, какое вы хотите окно</label>
              <textarea
                name={`window_${windowIndex}_description`}
                className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue focus:outline-none"
                placeholder="Опишите детали вашего окна..."
                rows={4}
                onChange={() => {
                  // Mark that the description was provided
                  if (!window.options.includes("description")) {
                    const updatedWindow = {
                      ...window,
                      options: [...window.options, "description"]
                    };
                    onWindowChange(windowIndex, updatedWindow);
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
                name={`window_${windowIndex}_mosquito`}
                className="w-5 h-5"
                checked={window.options.includes("mosquito")}
                onChange={() => toggleOption("mosquito")}
                disabled={window.options.includes("none")}
              />
              <label htmlFor={`option-mosquito-${windowIndex}`} className="ml-2">Москитная сетка</label>
            </div>
            <div className="flex items-center">
              <input
                id={`option-drain-${windowIndex}`}
                type="checkbox"
                name={`window_${windowIndex}_drain`}
                className="w-5 h-5"
                checked={window.options.includes("drain")}
                onChange={() => toggleOption("drain")}
                disabled={window.options.includes("none")}
              />
              <label htmlFor={`option-drain-${windowIndex}`} className="ml-2">Отлив</label>
            </div>
            <div className="flex items-center">
              <input
                id={`option-sill-${windowIndex}`}
                type="checkbox"
                name={`window_${windowIndex}_sill`}
                className="w-5 h-5"
                checked={window.options.includes("sill")}
                onChange={() => toggleOption("sill")}
                disabled={window.options.includes("none")}
              />
              <label htmlFor={`option-sill-${windowIndex}`} className="ml-2">Подоконник</label>
            </div>
            <div className="flex items-center">
              <input
                id={`option-none-${windowIndex}`}
                type="checkbox"
                name={`window_${windowIndex}_none`}
                className="w-5 h-5"
                checked={window.options.includes("none")}
                onChange={() => toggleOption("none")}
              />
              <label htmlFor={`option-none-${windowIndex}`} className="ml-2">Ничего из перечисленного</label>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default WindowConfigurationItem;
