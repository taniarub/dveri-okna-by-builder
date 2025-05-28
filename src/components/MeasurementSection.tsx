
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MeasurementSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Как правильно замерить пластиковое окно?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Понятная инструкция для тех, кто хочет сделать точный замер для установки пластикового окна своими руками
        </p>
        <Link to="/measurement-guide">
          <Button className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-8 py-3 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl">
            Перейти к инструкции
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default MeasurementSection;
