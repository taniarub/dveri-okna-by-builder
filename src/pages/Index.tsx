
import AboutUs from "@/components/AboutUs";
import Advantages from "@/components/Advantages";
import CalculatorBanner from "@/components/CalculatorBanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import PromotionPopup from "@/components/PromotionPopup";

const Index = () => {
  return (
    <div>
      <Header />
      <Hero />
      
      {/* New pricing section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Платите только за окна!
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              В стандартную цену на окна «под ключ» закладываются все расходы, а в случае с дилерами еще и наценка, еще более увеличивающая стоимость окна, как минимум, наполовину. Мы предлагаем окна без установки по ценам нашего производства — без скрытых доплат.
            </p>
          </div>
        </div>
      </section>
      
      <AboutUs />
      <Advantages />
      <Portfolio />
      <CalculatorBanner />
      <Reviews />
      <ContactForm />
      <Footer />
      <PromotionPopup />
    </div>
  );
};

export default Index;
