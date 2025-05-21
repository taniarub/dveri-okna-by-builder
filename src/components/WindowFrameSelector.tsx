
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface WindowFrameSelectorProps {
  onChange: (frames: any[]) => void;
  windowCount: number;
  windowType: string;
}

const WindowFrameSelector = ({ onChange, windowCount, windowType }: WindowFrameSelectorProps) => {
  const [frames, setFrames] = useState(Array(windowCount).fill({ main: "fixed", subType: "fixed" }));
  const [openSubTypes, setOpenSubTypes] = useState<Record<string, boolean>>({});
  
  const frameTypes = [
    {
      id: "left",
      name: "Левая створка",
      image: "/lovable-uploads/06109cee-21de-482d-90df-9f3de9229638.png"
    },
    {
      id: "right",
      name: "Правая створка",
      image: "/lovable-uploads/b673b462-5fe7-4343-861f-b3ca0be38b11.png"
    },
    {
      id: "center",
      name: "Центральная створка",
      image: "/lovable-uploads/76e3f1b1-210e-43e8-ab6b-2aa06595280d.png"
    }
  ];
  
  const balconyDoorTypes = [
    {
      id: "balcony-door",
      name: "Балконная дверь",
      image: "/lovable-uploads/b673b462-5fe7-4343-861f-b3ca0be38b11.png"
    }
  ];

  const subTypes = [
    { id: "fixed", name: "Глухая" },
    { id: "swing", name: "Поворотная" },
    { id: "tilt-turn", name: "Поворотно-откидная" }
  ];
  
  const balconySubTypes = [
    { id: "swing", name: "Поворотная" },
    { id: "tilt-turn", name: "Поворотно-откидная" }
  ];

  const toggleSubType = (index: number, isOpen: boolean) => {
    setOpenSubTypes({
      ...openSubTypes,
      [`${index}`]: isOpen
    });
  };

  const updateFrame = (index: number, main: string, subType?: string) => {
    const newFrames = [...frames];
    if (subType) {
      newFrames[index] = { ...newFrames[index], subType };
    } else {
      newFrames[index] = { ...newFrames[index], main };
      // Open the subtypes selector when a main type is selected
      toggleSubType(index, true);
    }
    setFrames(newFrames);
    onChange(newFrames.map(f => `${f.main}-${f.subType}`));
  };

  if (windowType === "other-type") {
    return null;
  }

  const isBalconyDoorWithWindows = windowType === "balcony-door-two-window";
  const isBalconyDoorOnly = windowType === "balcony-door";

  return (
    <div>
      <h4 className="text-lg font-medium mb-4">Выберите тип оконной створки</h4>
      
      {isBalconyDoorWithWindows && (
        <>
          {/* First window */}
          <div className="mb-6">
            <p className="font-medium mb-3">Створка</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
              {frameTypes.map((type) => (
                <div 
                  key={`0-${type.id}`}
                  onClick={() => updateFrame(0, type.id)}
                  className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
                    frames[0].main === type.id 
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
            
            {frames[0].main && (
              <Collapsible 
                open={openSubTypes[`0`] || false} 
                onOpenChange={(isOpen) => toggleSubType(0, isOpen)}
                className="border rounded-lg p-4 mt-2"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <span>Выберите тип</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-3">
                  <RadioGroup 
                    value={frames[0].subType}
                    onValueChange={(value) => updateFrame(0, frames[0].main, value)}
                    className="flex flex-col space-y-2"
                  >
                    {subTypes.map((subType) => (
                      <div key={`0-${subType.id}`} className="flex items-center space-x-2">
                        <RadioGroupItem value={subType.id} id={`0-${subType.id}`} />
                        <label htmlFor={`0-${subType.id}`}>{subType.name}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </CollapsibleContent>
              </Collapsible>
            )}
          </div>
          
          {/* Second window */}
          <div className="mb-6">
            <p className="font-medium mb-3">Створка</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
              {frameTypes.map((type) => (
                <div 
                  key={`1-${type.id}`}
                  onClick={() => updateFrame(1, type.id)}
                  className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
                    frames[1].main === type.id 
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
            
            {frames[1].main && (
              <Collapsible 
                open={openSubTypes[`1`] || false} 
                onOpenChange={(isOpen) => toggleSubType(1, isOpen)}
                className="border rounded-lg p-4 mt-2"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <span>Выберите тип</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-3">
                  <RadioGroup 
                    value={frames[1].subType}
                    onValueChange={(value) => updateFrame(1, frames[1].main, value)}
                    className="flex flex-col space-y-2"
                  >
                    {subTypes.map((subType) => (
                      <div key={`1-${subType.id}`} className="flex items-center space-x-2">
                        <RadioGroupItem value={subType.id} id={`1-${subType.id}`} />
                        <label htmlFor={`1-${subType.id}`}>{subType.name}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </CollapsibleContent>
              </Collapsible>
            )}
          </div>
          
          {/* Balcony door */}
          <div className="mb-6">
            <p className="font-medium mb-3">Балконная дверь</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
              {balconyDoorTypes.map((type) => (
                <div 
                  key={`2-${type.id}`}
                  onClick={() => updateFrame(2, type.id)}
                  className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
                    frames[2].main === type.id 
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
            
            {frames[2].main && (
              <Collapsible 
                open={openSubTypes[`2`] || false} 
                onOpenChange={(isOpen) => toggleSubType(2, isOpen)}
                className="border rounded-lg p-4 mt-2"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <span>Выберите тип</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-3">
                  <RadioGroup 
                    value={frames[2].subType}
                    onValueChange={(value) => updateFrame(2, frames[2].main, value)}
                    className="flex flex-col space-y-2"
                  >
                    {balconySubTypes.map((subType) => (
                      <div key={`2-${subType.id}`} className="flex items-center space-x-2">
                        <RadioGroupItem value={subType.id} id={`2-${subType.id}`} />
                        <label htmlFor={`2-${subType.id}`}>{subType.name}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </CollapsibleContent>
              </Collapsible>
            )}
          </div>
        </>
      )}
      
      {isBalconyDoorOnly && (
        <>
          <div className="mb-6">
            <p className="font-medium mb-3">Створка</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
              {frameTypes.map((type) => (
                <div 
                  key={`0-${type.id}`}
                  onClick={() => updateFrame(0, type.id)}
                  className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
                    frames[0].main === type.id 
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
            
            {frames[0].main && (
              <Collapsible 
                open={openSubTypes[`0`] || false} 
                onOpenChange={(isOpen) => toggleSubType(0, isOpen)}
                className="border rounded-lg p-4 mt-2"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <span>Выберите тип</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-3">
                  <RadioGroup 
                    value={frames[0].subType}
                    onValueChange={(value) => updateFrame(0, frames[0].main, value)}
                    className="flex flex-col space-y-2"
                  >
                    {subTypes.map((subType) => (
                      <div key={`0-${subType.id}`} className="flex items-center space-x-2">
                        <RadioGroupItem value={subType.id} id={`0-${subType.id}`} />
                        <label htmlFor={`0-${subType.id}`}>{subType.name}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </CollapsibleContent>
              </Collapsible>
            )}
          </div>
          
          <div className="mb-6">
            <p className="font-medium mb-3">Балконная дверь</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
              {balconyDoorTypes.map((type) => (
                <div 
                  key={`1-${type.id}`}
                  onClick={() => updateFrame(1, type.id)}
                  className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
                    frames[1].main === type.id 
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
            
            {frames[1].main && (
              <Collapsible 
                open={openSubTypes[`1`] || false} 
                onOpenChange={(isOpen) => toggleSubType(1, isOpen)}
                className="border rounded-lg p-4 mt-2"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <span>Выберите тип</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-3">
                  <RadioGroup 
                    value={frames[1].subType}
                    onValueChange={(value) => updateFrame(1, frames[1].main, value)}
                    className="flex flex-col space-y-2"
                  >
                    {balconySubTypes.map((subType) => (
                      <div key={`1-${subType.id}`} className="flex items-center space-x-2">
                        <RadioGroupItem value={subType.id} id={`1-${subType.id}`} />
                        <label htmlFor={`1-${subType.id}`}>{subType.name}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </CollapsibleContent>
              </Collapsible>
            )}
          </div>
        </>
      )}
      
      {!isBalconyDoorWithWindows && !isBalconyDoorOnly && (
        Array(windowCount).fill(null).map((_, index) => {
          let frameLabel;
          if (windowType === "one-leaf") {
            frameLabel = "Створка";
          } else if (windowType === "two-leaf") {
            frameLabel = index === 0 ? "Левая створка" : "Правая створка";
          } else if (windowType === "three-leaf") {
            frameLabel = index === 0 ? "Левая створка" : index === 1 ? "Центральная створка" : "Правая створка";
          } else {
            frameLabel = `Створка ${index + 1}`;
          }
          
          return (
            <div key={index} className="mb-6">
              <p className="font-medium mb-3">{frameLabel}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-2">
                {frameTypes.map((type) => (
                  <div 
                    key={`${index}-${type.id}`}
                    onClick={() => updateFrame(index, type.id)}
                    className={`p-4 border rounded-lg cursor-pointer text-center transition-colors ${
                      frames[index].main === type.id 
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
              
              {frames[index].main && (
                <Collapsible 
                  open={openSubTypes[`${index}`] || false} 
                  onOpenChange={(isOpen) => toggleSubType(index, isOpen)}
                  className="border rounded-lg p-4 mt-2"
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full">
                    <span>Выберите тип</span>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-3">
                    <RadioGroup 
                      value={frames[index].subType}
                      onValueChange={(value) => updateFrame(index, frames[index].main, value)}
                      className="flex flex-col space-y-2"
                    >
                      {subTypes.map((subType) => (
                        <div key={`${index}-${subType.id}`} className="flex items-center space-x-2">
                          <RadioGroupItem value={subType.id} id={`${index}-${subType.id}`} />
                          <label htmlFor={`${index}-${subType.id}`}>{subType.name}</label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CollapsibleContent>
                </Collapsible>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default WindowFrameSelector;
