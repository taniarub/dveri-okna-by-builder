
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      author: "Татьяна Вельская",
      date: "4 года назад",
      rating: 5,
      content: "Хороший магазин, внимательные продавцы, всегда можно найти то что нужно.",
      verified: true,
    },
    {
      id: 2,
      author: "Алена Ветис",
      date: "5 лет назад",
      rating: 5,
      content: "Хорошие цены",
      verified: true,
    },
    {
      id: 3,
      author: "HENG r",
      date: "5 лет назад",
      rating: 5,
      content: "Классный магазин",
      verified: true,
    },
    {
      id: 4,
      author: "Евгений Чижевский",
      date: "6 лет назад",
      rating: 5,
      content: "Магазин что надо.",
      verified: true,
    },
  ];

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-8">Отзывы наших клиентов</h2>

        <div className="bg-gray-50 p-8 rounded-lg mb-12 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Logo" className="h-8" />
            <div className="ml-4 flex items-center">
              <span className="text-3xl font-bold mr-2">4.5</span>
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="ml-1 text-sm text-gray-500">(62)</span>
            </div>
          </div>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-brand-blue text-white rounded-md hover:bg-blue-700 transition-colors">
            Оставьте отзыв о нас на Google
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full text-xl flex items-center justify-center text-gray-600 font-bold">
                  {review.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-medium flex items-center">
                    {review.author}
                    {review.verified && (
                      <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </h4>
                  <div className="flex text-sm text-gray-500">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-3 mr-1" />
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array(5).fill(null).map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700">{review.content}</p>
              
              {review.content.length > 100 && (
                <button className="mt-2 text-blue-500 hover:text-blue-700 text-sm">Читать далее</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
