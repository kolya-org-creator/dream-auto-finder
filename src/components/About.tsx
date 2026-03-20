const stats = [
  { number: "10+", label: "Лет на рынке" },
  { number: "5000+", label: "Довольных клиентов" },
  { number: "500+", label: "Авто в наличии" },
  { number: "4.9", label: "Рейтинг доверия" },
];

const About = () => (
  <section id="about" className="py-20 px-6 max-w-[1200px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">О компании</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          АвтоПремиум — ведущий автосалон премиум-класса с более чем 10-летним опытом работы на рынке. Мы предлагаем широкий ассортимент новых и подержанных автомобилей от мировых производителей.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Наша миссия — сделать процесс покупки автомобиля максимально комфортным и прозрачным. Мы гарантируем юридическую чистоту каждой сделки и полную техническую исправность всех автомобилей.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Команда профессиональных менеджеров поможет подобрать идеальный автомобиль, соответствующий вашим потребностям и бюджету.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-6 bg-card rounded-2xl shadow-md">
            <div className="text-4xl font-bold text-accent">{s.number}</div>
            <div className="text-muted-foreground mt-2 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
