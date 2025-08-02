import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Политика обработки персональных данных | Dverivokna',
  description: 'Политика обработки персональных данных в соответствии с законодательством Республики Беларусь',
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-brand-blue hover:text-brand-darkblue transition-colors mb-4"
            >
              ← Вернуться на главную
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Политика обработки персональных данных
            </h1>
            <p className="text-gray-600">
              Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Общие положения</h2>
              <p className="text-gray-700 mb-4">
                Настоящая Политика обработки персональных данных (далее — Политика) разработана в соответствии с 
                Законом Республики Беларусь от 7 мая 2021 г. № 99-З «О защите персональных данных» и иными 
                нормативными правовыми актами Республики Беларусь, регулирующими вопросы обработки персональных данных.
              </p>
              <p className="text-gray-700 mb-4">
                Оператором персональных данных является Индивидуальный предприниматель Рублевский В.В. 
                (УНП 490628239), далее — Оператор.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Основные понятия</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Персональные данные</strong> — любая информация, относящаяся к идентифицированному физическому лицу или физическому лицу, которое может быть идентифицировано.</p>
                <p><strong>Обработка персональных данных</strong> — любое действие или совокупность действий, совершаемых с персональными данными.</p>
                <p><strong>Согласие субъекта персональных данных</strong> — свободно данное, конкретное, информированное и недвусмысленное выражение воли субъекта персональных данных.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Цели обработки персональных данных</h2>
              <p className="text-gray-700 mb-4">Оператор обрабатывает персональные данные в следующих целях:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Предоставление услуг по изготовлению и установке окон и дверей ПВХ</li>
                <li>Обработка заявок и запросов клиентов</li>
                <li>Расчет стоимости услуг</li>
                <li>Связь с клиентами для уточнения деталей заказа</li>
                <li>Выполнение обязательств по договорам</li>
                <li>Улучшение качества обслуживания</li>
                <li>Информирование о новых услугах и акциях (только с согласия клиента)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Категории обрабатываемых персональных данных</h2>
              <p className="text-gray-700 mb-4">Оператор обрабатывает следующие категории персональных данных:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Фамилия, имя, отчество</li>
                <li>Контактные данные (телефон, электронная почта)</li>
                <li>Адрес доставки и установки</li>
                <li>Технические характеристики заказа</li>
                <li>Данные о платежах (в объеме, необходимом для выполнения обязательств)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Правовые основания обработки</h2>
              <p className="text-gray-700 mb-4">Обработка персональных данных осуществляется на следующих правовых основаниях:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Согласие субъекта персональных данных</li>
                <li>Необходимость обработки для исполнения договора</li>
                <li>Выполнение обязательств, возложенных на Оператора законодательством</li>
                <li>Осуществление прав и законных интересов Оператора</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Сроки хранения персональных данных</h2>
              <p className="text-gray-700 mb-4">
                Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, 
                а также в течение срока, установленного законодательством Республики Беларусь. 
                После достижения целей обработки персональные данные подлежат уничтожению или обезличиванию.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Права субъектов персональных данных</h2>
              <p className="text-gray-700 mb-4">В соответствии с законодательством Республики Беларусь субъект персональных данных имеет право:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Получать информацию об обработке своих персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
                <li>Отзывать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие при обработке персональных данных</li>
                <li>Требовать возмещения вреда, причиненного незаконной обработкой персональных данных</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Меры по защите персональных данных</h2>
              <p className="text-gray-700 mb-4">
                Оператор принимает необходимые правовые, организационные и технические меры для защиты 
                персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, 
                блокирования, копирования, предоставления, распространения персональных данных, а также от 
                иных неправомерных действий в отношении персональных данных.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Передача персональных данных третьим лицам</h2>
              <p className="text-gray-700 mb-4">
                Оператор может передавать персональные данные третьим лицам только в случаях, предусмотренных 
                законодательством Республики Беларусь, или при наличии согласия субъекта персональных данных.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Контактная информация</h2>
              <p className="text-gray-700 mb-4">
                По всем вопросам, связанным с обработкой персональных данных, вы можете обращаться:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Индивидуальный предприниматель Рублевский В.В.</strong>
                </p>
                <p className="text-gray-700 mb-2">УНП: 490628239</p>
                <p className="text-gray-700 mb-2">Адрес: г.Лельчицы, ул. Советская, д. 79/11</p>
                <p className="text-gray-700 mb-2">Телефон: <a href="tel:+375293423221" className="text-brand-blue hover:underline">+375 29 342-32-21</a></p>
                <p className="text-gray-700">Email: <a href="mailto:vitaliy9977@mail.ru" className="text-brand-blue hover:underline">vitaliy9977@mail.ru</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Изменения в Политике</h2>
              <p className="text-gray-700 mb-4">
                Оператор оставляет за собой право вносить изменения в настоящую Политику. 
                В случае внесения изменений новая версия Политики будет размещена на сайте с указанием даты обновления.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Данная Политика разработана в соответствии с требованиями законодательства Республики Беларусь 
                и является обязательной для соблюдения всеми лицами, имеющими доступ к персональным данным.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 