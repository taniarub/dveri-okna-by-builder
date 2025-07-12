
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WindowConfigurationForm from "@/components/WindowConfigurationForm";

const CalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5EC]">
      <Header />
      <div className="py-16 flex-grow animate-fade-in">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-bold">Калькулятор стоимости</h1>
            <Link href="/" className="text-brand-blue hover:underline">
              Вернуться на главную
            </Link>
          </div>

          <WindowConfigurationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CalculatorPage;
