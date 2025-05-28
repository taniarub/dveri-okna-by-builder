
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MeasurementGuidePage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-bold">Как правильно замерить пластиковое окно?</h1>
            <Link to="/" className="text-brand-blue hover:underline">
              Вернуться на главную
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Прежде чем выбрать готовые ПВХ окна, у многих возникает естественный вопрос: как правильно измерить оконный проём, чтобы окно идеально подошло? На самом деле, в этом нет ничего сложного — даже если замерочный лист кажется запутанным. Всё, что вам нужна — немного времени, простые инструменты (карандаш, бумага, рулетка, линейка, отвёртка и уровень) и наша понятная пошаговая инструкция. Мы поможем вам справиться с замерами легко и без лишних хлопот!
              </p>
            </div>

            {/* Navigation Menu */}
            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Выберите тип замера:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => scrollToSection('zameer-s-chetvertyu')}
                  className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-6 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Замер окна с четвертью
                </button>
                <button
                  onClick={() => scrollToSection('zameer-bez-chetvertey')}
                  className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-6 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Замер окна без четвертей
                </button>
                <button
                  onClick={() => scrollToSection('zameer-moskitnoy-setki')}
                  className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-6 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Замер москитной сетки
                </button>
              </div>
            </div>

            {/* Общая информация */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Общие принципы замера окон</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Для корректного замера пластикового окна важно понимать конструкцию оконного проёма. Существует два основных типа проёмов:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>С четвертью</strong> — когда рама окна частично утоплена в стену</li>
                  <li><strong>Без четверти</strong> — когда рама окна находится в одной плоскости со стеной</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Необходимые инструменты: рулетка, карандаш, бумага, линейка, отвёртка, строительный уровень.
                </p>
              </div>
            </div>

            {/* Замер окна с четвертью */}
            <section id="zameer-s-chetvertyu" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Замер окна с четвертью</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Четверть — это часть стены, которая выступает внутрь оконного проёма. Такая конструкция чаще всего встречается в панельных домах.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Замер ширины окна:</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                  <li>Измерьте расстояние между четвертями в самом узком месте проёма</li>
                  <li>Прибавьте к полученному размеру 30-40 мм (по 15-20 мм с каждой стороны)</li>
                  <li>Это и будет ширина вашего окна</li>
                </ol>

                <h3 className="text-xl font-semibold mb-4 mt-6">Замер высоты окна:</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                  <li>Измерьте расстояние от подоконника до верхней четверти</li>
                  <li>Прибавьте 15-20 мм для захода на верхнюю четверть</li>
                  <li>Отнимите 30-40 мм на установку подоконника</li>
                </ol>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">Важно:</h4>
                  <p className="text-yellow-700">
                    Обязательно проверьте горизонтальность подоконника и вертикальность боковых стен с помощью уровня. При обнаружении отклонений учтите их при расчёте размеров.
                  </p>
                </div>
              </div>
            </section>

            {/* Замер окна без четвертей */}
            <section id="zameer-bez-chetvertey" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Замер окна без четвертей</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Проём без четверти представляет собой прямоугольное отверстие в стене, где рама устанавливается заподлицо со стеной.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Замер ширины окна:</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                  <li>Измерьте ширину проёма в трёх местах: сверху, посередине и снизу</li>
                  <li>Возьмите наименьший размер</li>
                  <li>Отнимите от него 40-50 мм на монтажные зазоры (по 20-25 мм с каждой стороны)</li>
                </ol>

                <h3 className="text-xl font-semibold mb-4 mt-6">Замер высоты окна:</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                  <li>Измерьте высоту проёма в трёх местах: слева, посередине и справа</li>
                  <li>Возьмите наименьший размер</li>
                  <li>Отнимите 50-70 мм: 20-30 мм сверху на монтажный зазор и 30-40 мм снизу на подоконник</li>
                </ol>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Совет:</h4>
                  <p className="text-blue-700">
                    При замере проёма без четверти особенно важно учесть толщину отделочных материалов (штукатурка, гипсокартон), которые могут уменьшить фактический размер проёма.
                  </p>
                </div>
              </div>
            </section>

            {/* Замер москитной сетки */}
            <section id="zameer-moskitnoy-setki" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Замер москитной сетки</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Москитная сетка измеряется по световому проёму окна — внутренним размерам рамы.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Для внутренней москитной сетки:</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                  <li>Измерьте ширину светового проёма створки изнутри</li>
                  <li>Измерьте высоту светового проёма створки изнутри</li>
                  <li>Отнимите по 2-3 мм с каждой стороны для свободной установки</li>
                </ol>

                <h3 className="text-xl font-semibold mb-4 mt-6">Для наружной рамочной москитной сетки:</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                  <li>Измерьте ширину и высоту светового проёма</li>
                  <li>Прибавьте по 20-30 мм к каждому размеру для наложения рамки сетки на раму окна</li>
                </ol>

                <Accordion type="single" collapsible className="mt-8">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Виды москитных сеток</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Рамочная сетка</h4>
                          <p className="text-gray-700">Наиболее популярный тип. Устанавливается снаружи окна на специальные крепления.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Рулонная сетка</h4>
                          <p className="text-gray-700">Компактное решение, сетка сворачивается в короб при ненадобности.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Плиссированная сетка</h4>
                          <p className="text-gray-700">Складывается гармошкой, подходит для больших проёмов.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            {/* Дополнительные советы */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Дополнительные советы по замеру</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">✓ Что нужно учесть:</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Состояние проёма и его геометрию</li>
                    <li>Толщину утеплителя и отделки</li>
                    <li>Тип крепления подоконника</li>
                    <li>Наличие батарей под окном</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">⚠ Частые ошибки:</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Замер по старой раме</li>
                    <li>Игнорирование кривизны проёма</li>
                    <li>Неучёт монтажных зазоров</li>
                    <li>Замер только в одном месте</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Остались вопросы? Наши специалисты проведут бесплатный замер с выездом на объект.
              </p>
              <Link to="/#contact" className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-8 py-3 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl inline-block">
                Заказать бесплатный замер
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MeasurementGuidePage;
