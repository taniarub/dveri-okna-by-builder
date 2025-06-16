
import { useState, useEffect } from "react";

interface WindowFrameSelectorProps {
  onChange: (frames: string[]) => void;
  windowCount: number;
  windowType: string;
}

const WindowFrameSelector = ({ onChange, windowCount, windowType }: WindowFrameSelectorProps) => {
  const [frames, setFrames] = useState<string[]>(Array(windowCount).fill("fixed"));

  useEffect(() => {
    setFrames(Array(windowCount).fill("fixed"));
    onChange(Array(windowCount).fill("fixed"));
  }, [windowCount, onChange]);

  const handleFrameChange = (index: number, value: string) => {
    const newFrames = [...frames];
    newFrames[index] = value;
    setFrames(newFrames);
    onChange(newFrames);
  };

  const getFrameLabel = (index: number) => {
    if (windowType === "balcony-door" && index === 1) {
      return "Балконная дверь";
    }
    if (windowType === "balcony-door-two-window" && index === 2) {
      return "Балконная дверь";
    }
    return `Створка ${index + 1}`;
  };

  const getFrameOptions = (index: number) => {
    const isDoor = (windowType === "balcony-door" && index === 1) || 
                   (windowType === "balcony-door-two-window" && index === 2);
    
    if (isDoor) {
      return [
        { value: "door-swing", label: "Поворотная дверь" },
        { value: "door-tilt-turn", label: "Поворотно-откидная дверь" }
      ];
    }
    
    return [
      { value: "fixed", label: "Глухая" },
      { value: "swing", label: "Поворотная" },
      { value: "tilt-turn", label: "Поворотно-откидная" }
    ];
  };

  return (
    <div className="space-y-6">
      {Array.from({ length: windowCount }, (_, index) => (
        <div key={index} className="border-b pb-4 last:border-b-0">
          <h3 className="text-lg font-medium mb-3">{getFrameLabel(index)}</h3>
          <div className="space-y-2">
            {getFrameOptions(index).map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  id={`frame-${index}-${option.value}`}
                  type="radio"
                  name={`створка_${index + 1}`}
                  value={option.label}
                  className="w-5 h-5"
                  checked={frames[index] === option.value}
                  onChange={() => handleFrameChange(index, option.value)}
                />
                <label htmlFor={`frame-${index}-${option.value}`} className="ml-2">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WindowFrameSelector;
