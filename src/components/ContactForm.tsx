
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, Clock } from "lucide-react";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the form schema
const formSchema = z.object({
  name: z.string().min(1, { message: "Пожалуйста, укажите ваше имя" }),
  phone: z.string().min(1, { message: "Пожалуйста, укажите ваш телефон" }),
  comment: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      comment: "",
    }
  });
  
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

  const onSubmit = async (data: FormValues) => {
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      form.reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-brand-beige">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Наши контакты</h2>

        <div ref={contactRef} className="flex flex-col md:flex-row gap-10 opacity-0 transition-opacity duration-1000">
          <div className="md:w-1/2 order-2 md:order-1">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white p-8 rounded-lg shadow-sm h-full">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Ваше имя"
                            className="p-6"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Ваш телефон"
                            className="p-6"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Комментарий (необязательно)"
                            className="w-full p-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-orange hover:bg-[#e69816] transition-colors py-6 text-lg font-medium"
                >
                  {loading ? "Отправка..." : "Отправить заявку"}
                </Button>
                
                <div className="flex justify-center space-x-8 mt-6">
                  <a href="viber://chat?number=%2B375292589210" className="text-brand-orange hover:text-[#e69816] transition-transform hover:scale-110">
                    <img src="/lovable-uploads/4a995aa8-106d-4604-98a9-5889aa1c9c63.png" alt="Viber" className="w-10 h-10" />
                  </a>
                  <a href="https://wa.me/375293423221" className="text-brand-orange hover:text-[#e69816] transition-transform hover:scale-110">
                    <img src="/lovable-uploads/529a3ad8-4862-4191-92f2-56af5aa6977e.png" alt="WhatsApp" className="w-10 h-10" />
                  </a>
                  <a href="https://www.instagram.com/dveri_okna_krovlya_lelchicy/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:text-[#e69816] transition-transform hover:scale-110">
                    <img src="/lovable-uploads/009e8e15-1cf1-4274-8a87-a0b9436e07f4.png" alt="Instagram" className="w-10 h-10" />
                  </a>
                </div>
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
                      <p>vitaliy9977@mail.ru</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
