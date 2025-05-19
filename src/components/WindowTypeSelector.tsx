
import { useState } from "react";

interface WindowTypeSelectorProps {
  onChange: (type: string) => void;
  value: string;
}

const WindowTypeSelector = ({ onChange, value }: WindowTypeSelectorProps) => {
  const windowTypes = [
    {
      id: "one-leaf",
      name: "Одностворчатое окно",
      image: "/lovable-uploads/535e31e1-1369-45c8-9d68-3b3a1f624c82.png"
    },
    {
      id: "two-leaf",
      name: "Двухстворчатое окно",
      image: "/lovable-uploads/227592b9-b5f1-4a85-bf35-3cb8fae1330d.png"
    },
    {
      id: "three-leaf",
      name: "Трехстворчатое окно",
      image: "/lovable-uploads/845c2b4f-ab42-4bf0-a5e6-e2cff3f39129.png"
    },
    {
      id: "balcony-door-two-window",
      name: "Балконная дверь с двухстворчатым окном",
      image: "/lovable-uploads/b70dcba2-8c12-495e-a6f9-f3232128a110.png"
    },
    {
      id: "balcony-door",
      name: "Балконный блок",
      image: "/lovable-uploads/392fe653-1071-4da6-b7ab-1e46d2b235b6.png"
    },
    {
      id: "other-type",
      name: "Другой тип окна",
      image: "/lovable-uploads/bb8c6a8e-cfb8-43c8-aeb6-d62cdd4668ac.png"
    }
  ];

  const handleSelect = (typeId: string) => {
    onChange(typeId);
  };

  return (
    <div>
      <h4 className="text-lg font-medium mb-4">Выберите тип окна</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {windowTypes.map((type) => (
          <div 
            key={type.id}
            onClick={() => handleSelect(type.id)}
            className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
              value === type.id 
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
};

export default WindowTypeSelector;
