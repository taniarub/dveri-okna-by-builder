
const Footer = () => {
  return (
    <footer className="bg-brand-darkblue text-white">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Dverivokna</h3>
            <p className="max-w-xs text-gray-300">
              Качественные окна и двери ПВХ по доступным ценам с бесплатной доставкой по РБ
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-lg font-medium mb-4">О нас</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#advantages" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Наши работы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#calculator" className="hover:text-white transition-colors">Рассчитать стоимость</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="tel:+375293423221" className="hover:text-white transition-colors">+375 29 342-32-21</a></li>
                <li><a href="mailto:vitaliy9977@mail.ru" className="hover:text-white transition-colors">vitaliy9977@mail.ru</a></li>
                <li><span>г.Лельчицы, ул. Советская, д. 79/11</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-400">
          © 2023 Dverivokna. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
