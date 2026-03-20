import { useRef, useEffect } from "react";

const features = [
  { icon: "🚗", title: "Большой выбор", desc: "Более 500 автомобилей в наличии от ведущих мировых брендов" },
  { icon: "✅", title: "Проверенное качество", desc: "Тщательная проверка каждого автомобиля перед продажей" },
  { icon: "💰", title: "Выгодные цены", desc: "Специальные предложения и гибкая система скидок" },
  { icon: "🛠️", title: "Сервисное обслуживание", desc: "Полный спектр услуг по ремонту и обслуживанию" },
];

const Features = () => {
  return (
    <section className="py-20 px-6 max-w-[1200px] mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12 text-balance">
        Почему выбирают нас
        <span className="block w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="bg-card p-8 rounded-2xl text-center shadow-md shadow-foreground/5 border-b-4 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-primary font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
