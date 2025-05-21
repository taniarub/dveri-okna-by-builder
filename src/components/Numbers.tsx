
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface NumberItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const NumberItem = ({ value, label, suffix = '', delay = 0 }: NumberItemProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration in milliseconds
    let timer: number;
    
    if (inView) {
      // Delay the animation start by the specified amount
      const timeoutId = setTimeout(() => {
        const startTime = performance.now();
        
        const updateCounter = (currentTime: number) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          // Easing function for smooth count-up animation
          const easeOutQuad = (t: number) => t * (2 - t);
          const easedProgress = easeOutQuad(progress);
          
          setCount(Math.floor(easedProgress * value));
          
          if (progress < 1) {
            timer = requestAnimationFrame(updateCounter);
          } else {
            setCount(value); // Ensure we end at the exact value
          }
        };
        
        timer = requestAnimationFrame(updateCounter);
      }, delay);
      
      return () => {
        clearTimeout(timeoutId);
        cancelAnimationFrame(timer);
      };
    }
  }, [inView, value, delay]);
  
  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold text-brand-yellow">
        {count}{suffix}
      </div>
      <div className="text-lg mt-2 text-gray-700">{label}</div>
    </div>
  );
};

const Numbers = () => {
  const stats = [
    { value: 14, label: 'Лет на рынке', suffix: '' },
    { value: 50000, label: 'Довольных клиентов', suffix: '+' },
    { value: 95, label: 'Положительных отзывов', suffix: '%' },
    { value: 3, label: 'Года гарантии', suffix: '' },
  ];
  
  return (
    <section className="bg-[#F9F7F4] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <NumberItem 
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 150} // Stagger the animations
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
