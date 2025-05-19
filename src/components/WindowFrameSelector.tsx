
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
      name: "Глухое",
      image: "/lovable-uploads/06109cee-21de-482d-90df-9f3de9229638.png"
    },
    {
      id: "swing",
      name: "Поворотное",
      image: "/lovable-uploads/b673b462-5fe7-4343-861f-b3ca0be38b11.png"
    },
    {
      id: "tilt-turn",
      name: "Поворотно-откидное",
      image: "/lovable-uploads/76e3f1b1-210e-43e8-ab6b-2aa06595280d.png"
    }
  ];
  
  const balconyTypes = [
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

  return (
    <div>
      <h4 className="text-lg font-medium mb-4">Выберите тип оконной створки</h4>
      
      {/* Regular window frames */}
      {Array(windowCount).fill(null).map((_, index) => {
        // For balcony doors with windows, we're showing window options for the first frame (index 0)
        // and balcony door options for the second frame (index 1)
        // For balcony door only, we're showing balcony door options for the only frame
        const isBalconyDoorFrame = 
          (isBalconyDoorWithWindows && index === 1) || 
          (isBalconyDoorOnly && index === 0);

        const types = isBalconyDoorFrame ? balconyTypes : frameTypes;
        
        // Adjust the label based on window type
        let frameLabel;
        if (windowType === "one-leaf") {
          frameLabel = "Окно";
        } else if (windowType === "two-leaf") {
          frameLabel = index === 0 ? "Левое окно" : "Правое окно";
        } else if (windowType === "three-leaf") {
          frameLabel = index === 0 ? "Левое окно" : index === 1 ? "Центральное окно" : "Правое окно";
        } else if (isBalconyDoorWithWindows) {
          frameLabel = index === 0 ? "Левое окно" : "Балконная дверь";
        } else if (isBalconyDoorOnly) {
          frameLabel = "Балконная дверь";
        } else {
          frameLabel = `Окно ${index + 1}`;
        }
        
        return (
          <div key={index} className="mb-6">
            <p className="font-medium mb-3">{frameLabel}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {types.map((type) => (
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
      })}
    </div>
  );
};

export default WindowFrameSelector;
