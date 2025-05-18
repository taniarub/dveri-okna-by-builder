
import { useState, useEffect, useRef } from "react";
import { Phone, Mail, Clock, Instagram } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const element = contactRef.current;

      if (element) {
        const position = element.offsetTop;
        if (scrollY > position - window.innerHeight * 0.75) {
          element.classList.add('animate-fade-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Form validation could be added here
    
    // Form submission logic
    toast({
      title: "Спасибо за обращение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Наши контакты</h2>
          <p className="text-gray-600 mt-4">
            Есть вопросы? Свяжитесь с нами удобным для вас способом
          </p>
        </div>
        
        <div ref={contactRef} className="opacity-0 transition-opacity duration-1000">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-red bg-opacity-10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-medium">Телефоны</p>
                      <p>A1: +375 29 342-32-21</p>
                      <p>МТС: +375 29 258-92-10</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-red bg-opacity-10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:vitaliy9977@mail.ru" className="text-brand-blue hover:underline">
                        vitaliy9977@mail.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-red bg-opacity-10 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-medium">Режим работы</p>
                      <p>Понедельник - пятница: 10:00-19:00</p>
                      <p>Суббота: 10:00-18:00</p>
                      <p>Воскресенье: 10:00-18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-red bg-opacity-10 p-3 rounded-full">
                      <Instagram className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-medium">Социальные сети</p>
                      <div className="flex space-x-4 mt-2">
                        <a 
                          href="https://www.instagram.com/dveri_okna_krovlya_lelchicy/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bg-brand-red text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://wa.me/375293423221" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bg-[#25D366] text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                            <path d="M20.452 3.546C18.436 1.529 15.687.087 12.709.001c-2.96-.084-5.807 1.166-7.921 3.396-2.114 2.23-3.201 5.12-3.03 8.079C1.983 14.246 3.67 16.989 6.2 18.75l.423.289-.181.696c-.235.911-.673 1.75-1.27 2.43 1.82-.39 3.524-1.189 4.973-2.31l.602-.49.71.097a12.187 12.187 0 003.974.57c2.35.046 4.621-.8 6.409-2.375 1.788-1.575 2.947-3.736 3.273-6.075.325-2.339-.302-4.705-1.763-6.643l-.898-1.393zm-1.434 9.277A8.955 8.955 0 0116.386 16c-1.07.635-2.292.998-3.543 1.052-1.251.054-2.497-.218-3.622-.79-1.124-.572-2.086-1.42-2.794-2.465-.708-1.044-1.139-2.25-1.253-3.505-.114-1.255.096-2.515.609-3.65C6.295 5.507 7.1 4.51 8.12 3.77c1.02-.738 2.212-1.19 3.455-1.307h.91c1.788.044 3.486.767 4.79 2.038 1.302 1.271 2.074 2.953 2.172 4.74.098 1.786-.489 3.543-1.655 4.953-.393.466-.83.893-1.307 1.276l-.465.053z"></path>
                          </svg>
                        </a>
                        <a 
                          href="viber://chat?number=%2B375293423221" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#7360f2] text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4003 0.00070647C11.405 0.000706522 11.4097 0 11.4144 0C14.63 0 17.4249 1.00494 19.5071 2.9305C21.5894 4.85607 23.0096 7.64197 23.0096 11.3572C23.0096 18.4544 18.3077 21.1855 13.9682 21.8185C13.8895 21.8328 13.811 21.8425 13.7328 21.8476H13.7324C13.3341 21.8723 12.8822 21.8186 12.7448 21.6426C12.5875 21.4411 12.592 20.9429 12.5963 20.4595L12.5969 20.3507C12.5995 19.9373 12.602 19.5021 12.5563 19.0925L12.5562 19.091C12.1828 16.3042 11.0262 15.2949 10.1333 14.5113C10.0058 14.4003 9.88677 14.295 9.7748 14.1927C8.78975 13.2772 7.91278 12.4632 6.93721 10.9758C6.34925 10.0692 6.00006 8.94444 6.00006 7.73224C6.00006 6.93731 6.14046 6.16142 6.40299 5.4344C6.92664 4.14234 7.87006 3.00887 9.19558 2.2998C10.5207 1.59102 12.211 1.30775 14.2338 1.70309C15.1011 1.87255 15.8431 2.53173 15.9287 3.32833C15.9763 3.79663 15.9881 4.28461 16 4.79932L15.9999 4.9789C15.9999 5.27165 15.9999 5.57825 16.0083 5.88738C16.0081 5.97264 16.0182 6.05726 16.0384 6.13851C16.0585 6.21976 16.0883 6.2965 16.1267 6.36538C16.1651 6.43426 16.2112 6.4944 16.2632 6.54302C16.3152 6.59164 16.3723 6.62802 16.4323 6.65061C16.5441 6.62009 16.6473 6.56657 16.7346 6.49354C17.0428 6.26228 17.2653 5.93173 17.3852 5.54211C17.5377 5.05111 17.5852 4.52264 17.52 3.9793C17.4548 3.43596 17.2771 2.87425 16.9629 2.308C16.6488 1.74174 16.1747 1.17864 15.5358 0.680864C14.4317 -0.139402 12.9757 -0.0939913 11.8711 0.00818637C11.7151 0.0274999 11.558 0.0135461 11.4003 0.00070647Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Есть сомнения? Оставьте ваши контакты, и мы свяжемся с вами</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-brand-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-brand-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Сообщение (необязательно)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring focus:border-brand-blue"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-brand-red text-white font-medium rounded-md hover:bg-red-700 transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
