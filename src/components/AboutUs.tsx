
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
                    Делать дома уютнее с помощью передовых технологий и надёжных решений.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-1 h-full bg-brand-yellow"></div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">Наш подход</h3>
                  <p className="text-gray-700">
                    Мы подбираем решения под ваши задачи — от первой консультации до установки и сервиса после продажи.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-1 h-full bg-brand-yellow"></div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">Наш опыт</h3>
                  <p className="text-gray-700">
                    Более 10 000 установленных окон по всей стране — наш главный показатель качества и доверия.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/52af0b17-78ff-4908-a4ae-edf872e25bf3.png" 
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
      
      {/* Stats section from image 4 */}
      <div className="container mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
            <h3 className="text-5xl font-bold text-brand-yellow mb-2">15+</h3>
            <p className="text-gray-700">Лет опыта</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
            <h3 className="text-5xl font-bold text-brand-yellow mb-2">5000+</h3>
            <p className="text-gray-700">Довольных клиентов</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center">
            <h3 className="text-5xl font-bold text-brand-yellow mb-2">10000+</h3>
            <p className="text-gray-700">Установленных окон</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
