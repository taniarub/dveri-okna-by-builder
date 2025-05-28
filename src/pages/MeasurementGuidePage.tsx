
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MeasurementGuidePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="py-16 flex-grow">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-bold">Как правильно замерить пластиковое окно?</h1>
            <Link to="/portfolio" className="text-brand-blue hover:underline">
              Вернуться к примерам работ
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Прежде чем выбрать готовые ПВХ окна, у многих возникает естественный вопрос: как правильно измерить оконный проём, чтобы окно идеально подошло? На самом деле, в этом нет ничего сложного — даже если замерочный лист кажется запутанным. Всё, что вам нужно — немного времени, простые инструменты (карандаш, бумага, рулетка, линейка, отвёртка и уровень) и наша понятная пошаговая инструкция. Мы поможем вам справиться с замерами легко и без лишних хлопот!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MeasurementGuidePage;
