
import { useState, useRef, useEffect } from "react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, Clock } from "lucide-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, укажите ваше имя",
        variant: "destructive",
      });
      return;
    }

    if (!phone.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, укажите ваш телефон",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setName("");
      setPhone("");
      setComment("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-brand-beige">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Наши контакты</h2>

        <div ref={contactRef} className="flex flex-col md:flex-row gap-10 opacity-0 transition-opacity duration-1000">
          <div className="md:w-1/2 order-2 md:order-1">
            <Form>
              <form onSubmit={handleSubmit} className="space-y-8 max-w-md">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Есть сомнения? Оставьте ваши контакты, и мы свяжемся с вами</h3>
                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-6"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Ваш телефон"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="p-6"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Комментарий (необязательно)"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full p-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-orange hover:bg-[#e69816] transition-colors py-6 text-lg font-medium"
                >
                  {loading ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="md:w-1/2 order-1 md:order-2">
            <div className="bg-white p-8 rounded-lg shadow-sm h-full">
              <div className="space-y-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start">
                    <Phone className="text-brand-orange mr-4 w-6 h-6 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Телефон</h4>
                      <p className="mb-1">A1: +375293423221</p>
                      <p>MTC: +375292589210</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-brand-orange mr-4 w-6 h-6 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Email</h4>
                      <p>info@okna-pvh.by</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-brand-orange mr-4 w-6 h-6 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Режим работы</h4>
                      <p className="mb-1">Пн-Пт: 9:00 - 18:00</p>
                      <p className="mb-1">Сб: 10:00 - 15:00</p>
                      <p>Вс: выходной</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Социальные сети</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-brand-orange hover:text-[#e69816] transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.995 0h-16c-2.211 0-4 1.789-4 4v16c0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4v-16c0-2.211-1.789-4-4-4zm-8 7c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm7-3c0 .553-.447 1-1 1s-1-.447-1-1 .447-1 1-1 1 .447 1 1zm3 9c0 3.313-2.687 6-6 6h-8c-3.313 0-6-2.687-6-6v-8h2.343c-.168.75-.343 1.523-.343 2.326 0 4.416 3.584 8 8 8s8-3.584 8-8c0-.803-.175-1.576-.343-2.326h2.343v8z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-brand-orange hover:text-[#e69816] transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294h-3.129v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.241h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/>
                      </svg>
                    </a>
                    <a href="#" className="text-brand-orange hover:text-[#e69816] transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.75 5.96a8.015 8.015 0 01-2.305.63 4.03 4.03 0 001.772-2.23c-.78.465-1.647.8-2.568.985a4.026 4.026 0 00-6.858 3.673A11.468 11.468 0 013.144 4.911a4.032 4.032 0 001.253 5.372 4.017 4.017 0 01-1.828-.504v.05a4.026 4.026 0 003.237 3.947 4.028 4.028 0 01-1.825.07 4.028 4.028 0 003.76 2.794A8.07 8.07 0 012.25 18.13a11.426 11.426 0 006.177 1.809c7.413 0 11.469-6.138 11.469-11.468 0-.176-.004-.349-.012-.523a8.17 8.17 0 002.01-2.086l-.144.099z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
