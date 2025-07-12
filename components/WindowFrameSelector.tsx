
'use client'

import { useState } from "react";

interface WindowFrameSelectorProps {
  onChange: (frames: any[]) => void;
  windowCount: number;
  windowType: string;
}

const WindowFrameSelector = ({ onChange, windowCount, windowType }: WindowFrameSelectorProps) => {
  const [frames, setFrames] = useState(Array(windowCount).fill("fixed"));
  
  const frameTypes = [
    {
      id: "fixed",
      name: "Глухая",
      image: "/lovable-uploads/06109cee-21de-482d-90df-9f3de9229638.png"
    },
    {
      id: "swing",
      name: "Поворотная",
      image: "/lovable-uploads/b673b462-5fe7-4343-861f-b3ca0be38b11.png"
    },
    {
      id: "tilt-turn",
      name: "Поворотно-откидная",
      image: "/lovable-uploads/76e3f1b1-210e-43e8-ab6b-2aa06595280d.png"
    }
  ];
  
  const balconyDoorTypes = [
    {
      id: "balcony-swing",
      name: "Поворотная",
      image: "/lovable-uploads/b673b462-5fe7-4343-861f-b3ca0be38b11.png"
    },
    {
      id: "balcony-tilt-turn",
      name: "Поворотно-откидная",
      image: "/lovable-uploads/76e3f1b1-210e-43e8-ab6b-2aa06595280d.png"
    }
  ];

  const updateFrame = (index: number, type: string) => {
    const newFrames = [...frames];
    newFrames[index] = type;
    setFrames(newFrames);
    onChange(newFrames);
  };

  if (windowType === "other-type") {
    return null;
  }

  const isBalconyDoorWithWindows = windowType === "balcony-door-two-window";
  const isBalconyDoorOnly = windowType === "balcony-door";

  // Helper function to get the appropriate frame label based on window type and frame index
  const getFrameLabel = (windowType: string, frameIndex: number): string => {
    if (windowType === "one-leaf") {
      return "Створка";
    } else if (windowType === "two-leaf") {
      return frameIndex === 0 ? "Левая створка" : "Правая створка";
    } else if (windowType === "three-leaf") {
      return frameIndex === 0 ? "Левая створка" : frameIndex === 1 ? "Центральная створка" : "Правая створка";
    } else if (windowType === "balcony-door-two-window") {
      return frameIndex < 2 ? (frameIndex === 0 ? "Левая створка" : "Правая створка") : "Балконная дверь";
    } else if (windowType === "balcony-door") {
      return frameIndex === 0 ? "Створка" : "Балконная дверь";
    }
    
    return `Створка ${frameIndex + 1}`;
  };

  return (
    <div>
      <h4 className="text-lg font-medium mb-4">Выберите тип оконной створки</h4>
      
      {isBalconyDoorWithWindows && (
        <>
          <div className="mb-6">
            <p className="font-medium mb-3">Левая створка</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {frameTypes.map((type) => (
                <div 
                  key={`0-${type.id}`}
                  onClick={() => updateFrame(0, type.id)}
                  className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
                    frames[0] === type.id 
                      ? 'border-brand-red border-2' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="h-40 flex items-center justify-center mb-2">
                    <img 
                      src={type.image} 
                      alt={type.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-sm">{type.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <p className="font-medium mb-3">Правая створка</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {frameTypes.map((type) => (
                <div 
                  key={`1-${type.id}`}
                  onClick={() => updateFrame(1, type.id)}
                  className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
                    frames[1] === type.id 
                      ? 'border-brand-red border-2' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="h-40 flex items-center justify-center mb-2">
                    <img 
                      src={type.image} 
                      alt={type.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-sm">{type.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <p className="font-medium mb-3">Балконная дверь</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {balconyDoorTypes.map((type) => (
                <div 
                  key={`2-${type.id}`}
                  onClick={() => updateFrame(2, type.id)}
                  className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
                    frames[2] === type.id 
                      ? 'border-brand-red border-2' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="h-40 flex items-center justify-center mb-2">
                    <img 
                      src={type.image} 
                      alt={type.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-sm">{type.name}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      
      {isBalconyDoorOnly && (
        <>
          <div className="mb-6">
            <p className="font-medium mb-3">Створка</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {frameTypes.map((type) => (
                <div 
                  key={`0-${type.id}`}
                  onClick={() => updateFrame(0, type.id)}
                  className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
                    frames[0] === type.id 
                      ? 'border-brand-red border-2' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="h-40 flex items-center justify-center mb-2">
                    <img 
                      src={type.image} 
                      alt={type.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-sm">{type.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <p className="font-medium mb-3">Балконная дверь</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {balconyDoorTypes.map((type) => (
                <div 
                  key={`1-${type.id}`}
                  onClick={() => updateFrame(1, type.id)}
                  className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
                    frames[1] === type.id 
                      ? 'border-brand-red border-2' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="h-40 flex items-center justify-center mb-2">
                    <img 
                      src={type.image} 
                      alt={type.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-sm">{type.name}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      
      {!isBalconyDoorWithWindows && !isBalconyDoorOnly && (
        Array(windowCount).fill(null).map((_, index) => {
          const frameLabel = getFrameLabel(windowType, index);
          
          return (
            <div key={index} className="mb-6">
              <p className="font-medium mb-3">{frameLabel}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {frameTypes.map((type) => (
                  <div 
                    key={`${index}-${type.id}`}
                    onClick={() => updateFrame(index, type.id)}
                    className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
                      frames[index] === type.id 
                        ? 'border-brand-red border-2' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="h-40 flex items-center justify-center mb-2">
                      <img 
                        src={type.image} 
                        alt={type.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <p className="text-sm">{type.name}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default WindowFrameSelector;
