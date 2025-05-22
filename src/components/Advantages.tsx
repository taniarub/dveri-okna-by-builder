
import React, { useRef, useState, useEffect } from 'react';
import { Truck, Calendar, Shield, Ruler, LayoutGrid, CreditCard, Award, DollarSign } from 'lucide-react';

// CountUp component for animating numbers
const CountUp = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (end - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isVisible]);

  return <span ref={elementRef}>{count}</span>;
};

const Advantages = () => {
  const advantages = [
    {
      icon: <Truck className="w-6 h-6 text-brand-yellow" />,
      title: "Бесплатная доставка",
      description: "Доставим ваш заказ быстро и бесплатно в любой уголок страны.",
      stat: 100,
      suffix: "%"
    },
    {
      icon: <Calendar className="w-6 h-6 text-brand-yellow" />,
      title: "Работаем с 2009 года",
      description: "Многолетний опыт и надежность компании гарантируют качество услуг.",
      stat: 14,
      suffix: " лет"
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-yellow" />,
      title: "Качество",
      description: "Только высококачественные товары и услуги для наших клиентов.",
      stat: 5000,
      suffix: "+"
    },
    {
      icon: <Ruler className="w-6 h-6 text-brand-yellow" />,
      title: "Индивидуальный размер",
      description: "Окна и двери ПВХ под ваш размер с доставкой по всей стране.",
      stat: 300,
      suffix: " размеров"
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-brand-yellow" />,
      title: "Сложные конструкции",
      description: "Делаем любой сложности конструкции из ПВХ, ламинируем и тонируем стекло.",
      stat: 95,
      suffix: "%"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-brand-yellow" />,
      title: "Гибкая оплата",
      description: "Работаем с наличным и безналичным расчетом, предлагаем различные варианты оплаты.",
      stat: 10,
      suffix: " способов"
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="advantages" className="bg-[#FFF5EC] py-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold mb-16">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-5 mt-1 text-brand-yellow">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
                <p className="text-2xl font-bold text-brand-yellow mt-2">
                  {isVisible ? <CountUp end={advantage.stat} /> : 0}{advantage.suffix}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
