
const Footer = () => {
  return (
    <footer className="bg-brand-darkblue text-white animate-on-scroll">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 animate-fade-in-left">
            <h3 className="text-xl font-bold mb-4 animate-pulse-soft">Dverivokna</h3>
            <p className="max-w-xs text-gray-300 animate-fade-in-up animate-stagger-1">
              Качественные окна и двери ПВХ по доступным ценам с бесплатной доставкой по РБ
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 animate-fade-in-right">
            <div className="animate-fade-in-up animate-stagger-2">
              <h4 className="text-lg font-medium mb-4 animate-pulse-soft">О нас</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors hover-lift">О нас</a></li>
                <li><a href="#advantages" className="hover:text-white transition-colors hover-lift">Отзывы</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors hover-lift">Наши работы</a></li>
              </ul>
            </div>
            
            <div className="animate-fade-in-up animate-stagger-3">
              <h4 className="text-lg font-medium mb-4 animate-pulse-soft">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#calculator" className="hover:text-white transition-colors hover-lift">Рассчитать стоимость</a></li>
              </ul>
            </div>
            
            <div className="animate-fade-in-up animate-stagger-4">
              <h4 className="text-lg font-medium mb-4 animate-pulse-soft">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="tel:+375293423221" className="hover:text-white transition-colors hover-lift hover-glow">+375 29 342-32-21</a></li>
                <li><a href="mailto:vitaliy9977@mail.ru" className="hover:text-white transition-colors hover-lift hover-glow">vitaliy9977@mail.ru</a></li>
                <li><span className="hover-lift">г.Лельчицы, ул. Советская, д. 79/11</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-400 animate-fade-in-up animate-stagger-5">
          <div className="mb-2">
            © 2023 Dverivokna. Все права защищены.
          </div>
          <div className="text-xs text-gray-500">
            ИП Рублевский В.В. | УНП 490628239
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
