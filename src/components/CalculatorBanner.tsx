
import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const CalculatorBanner = () => {
  return (
    <section className="bg-brand-blue py-16 text-white">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Calculator className="w-16 h-16 mb-6" />
          <h2 className="text-4xl font-bold mb-6">Калькулятор стоимости</h2>
          <p className="text-xl mb-8">
            Рассчитайте предварительную стоимость окон с учетом ваших требований.
          </p>
          <Link 
            to="/calculator" 
            className="bg-white text-brand-blue hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-colors flex items-center"
          >
            Рассчитать стоимость
            <Calculator className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CalculatorBanner;
