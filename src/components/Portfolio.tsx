
const Portfolio = () => {
  const projects = [
    {
      image: "/lovable-uploads/dc24e8be-6c4e-47d2-b52a-09011c5b5bba.png",
      title: "Нестандартная форма",
      subtitle: "Индивидуальный дизайн",
    },
    {
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80",
      title: "Современные окна",
      subtitle: "Установка в новостройке",
    },
    {
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
      title: "Панорамные окна",
      subtitle: "Частный дом",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-4">Примеры наших работ</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Познакомьтесь с проектами, которые мы успешно реализовали.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm">{project.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
