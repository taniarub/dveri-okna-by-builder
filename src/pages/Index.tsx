
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
