
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PayOnlyForWindows from "@/components/PayOnlyForWindows";
import AboutUs from "@/components/AboutUs";
import Advantages from "@/components/Advantages";
import Portfolio from "@/components/Portfolio";
import WindowConfigurationForm from "@/components/WindowConfigurationForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PayOnlyForWindows />
      <AboutUs />
      <Advantages />
      <Portfolio />
      
      {/* Калькулятор стоимости */}
      <section className="py-8 bg-[#FFF5EC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform -skew-x-12 px-8 py-4 inline-block shadow-2xl rounded-xl border border-white/20 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold transform skew-x-12 text-white">Калькулятор стоимости</h2>
            </div>
            <div className="text-gray-700 text-xl md:text-2xl font-medium max-w-3xl mx-auto">
              Рассчитайте стоимость ваших окон и дверей прямо сейчас
            </div>
          </div>
          
          <WindowConfigurationForm />
        </div>
      </section>
      
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;
