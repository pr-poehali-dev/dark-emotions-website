const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
            История Переживаний
          </h2>
          <div className="w-24 h-px bg-gray-400 mx-auto"></div>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif text-gray-300 mb-4">
                Рождение из Тьмы
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Каждая вещь в коллекции создана в моменты глубоких переживаний,
                когда единственным способом выразить внутреннее состояние
                становится творчество. Это не просто одежда — это материализация
                эмоций.
              </p>
              <p className="text-gray-400 text-sm italic">
                "В самые темные моменты рождается самая искренняя красота"
              </p>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop"
                alt="Творческий процесс"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&h=500&fit=crop"
                alt="Эмоциональный дизайн"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-serif text-gray-300 mb-4">
                Философия Меланхолии
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Грусть и тоска — не враги, а учителя. Они показывают нам глубину
                человеческого опыта, учат ценить моменты радости и находить
                красоту в самых неожиданных местах. Эта одежда для тех, кто не
                боится чувствовать.
              </p>
              <p className="text-gray-400 text-sm italic">
                "Только тот, кто познал тьму, может по-настоящему ценить свет"
              </p>
            </div>
          </div>

          <div className="text-center py-12">
            <h3 className="text-2xl font-serif text-gray-300 mb-8">
              Создавая для Душ, Готовых Чувствовать
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Каждая нить пропитана историей, каждый шов — отражением
              внутреннего мира. Это одежда не для показа, а для понимания. Для
              тех, кто видит красоту в сложности человеческой натуры.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
