
import PromotionPopup from "@/components/PromotionPopup";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PayOnlyForWindows from "@/components/PayOnlyForWindows";
import AboutUs from "@/components/AboutUs";
import Advantages from "@/components/Advantages";
import Portfolio from "@/components/Portfolio";
import CalculatorBanner from "@/components/CalculatorBanner";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <PromotionPopup />
      <Header />
      <Hero />
      <PayOnlyForWindows />
      <AboutUs />
      <Advantages />
      <Portfolio />
      <CalculatorBanner />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
