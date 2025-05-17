
const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-4">О нас</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <p className="text-lg text-center mb-8">
              Мы - команда профессионалов с более чем 15-летним опытом в установке и обслуживании окон.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-1 h-full bg-brand-yellow"></div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">Наша миссия</h3>
                  <p className="text-gray-700">
                    Создавать комфорт в каждом доме, используя современные технологии и качественные материалы.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-1 h-full bg-brand-yellow"></div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">Наш подход</h3>
                  <p className="text-gray-700">
                    Мы работаем с индивидуальным подходом к каждому клиенту, обеспечивая высокое качество услуг от консультации до установки и послепродажного обслуживания.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-1 h-full bg-brand-yellow"></div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">Наш опыт</h3>
                  <p className="text-gray-700">
                    За годы работы мы установили более 10000 окон, делая дома наших клиентов теплее, тише и комфортнее. Нам доверяют более 5000 довольных клиентов.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80" 
                alt="Наша команда" 
                className="w-full h-auto rounded-lg" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-darkblue bg-opacity-80 p-4 text-white text-center">
                "Качество не действие, это привычка."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
