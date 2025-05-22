
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="py-16 flex-grow">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-bold">Примеры наших работ</h1>
            <Link to="/" className="text-brand-blue hover:underline">
              Вернуться на главную
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Project Images */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/f20fe5a5-0623-4c64-be89-f265f3d5c854.png" 
                alt="Пример работы 1" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/6cad4c0c-2c32-4e2f-9396-13a62480b0ce.png" 
                alt="Пример работы 2" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/31a4e6c7-d1b8-48e3-a897-ac696f727e30.png" 
                alt="Пример работы 3" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/a91cf04f-0ce8-42d5-8f4d-8ce029939f97.png" 
                alt="Пример работы 4" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/86d974bd-d606-47e8-83bb-75d0e9c7d91a.png" 
                alt="Пример работы 5" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
