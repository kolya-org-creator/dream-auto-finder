import { ArrowRight } from "lucide-react";
import promoTradein from "@/assets/promo-tradein.jpg";
import promoCredit from "@/assets/promo-credit.jpg";
import promoService from "@/assets/promo-service.jpg";

const promos = [
  {
    image: promoTradein,
    badge: "Трейд-ин",
    title: "Обменяй старый — получи новый",
    desc: "Сдайте свой автомобиль и получите скидку до 300 000 ₽ на покупку нового. Оценка за 30 минут.",
    highlight: "до 300 000 ₽",
  },
  {
    image: promoCredit,
    badge: "Автокредит",
    title: "Кредит от 3.9% годовых",
    desc: "Одобрение за 15 минут без справок и поручителей. Первый взнос от 0%. Срок до 7 лет.",
    highlight: "от 3.9%",
  },
  {
    image: promoService,
    badge: "Сервис",
    title: "Бесплатное ТО при покупке",
    desc: "При покупке любого автомобиля — первое техническое обслуживание и диагностика бесплатно.",
    highlight: "Бесплатно",
  },
];

const Promos = () => {
  const scrollToContacts = () => {
    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
          Акции и спецпредложения
          <span className="block w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Выгодные условия действуют ограниченное время. Успейте воспользоваться!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {promos.map((promo, i) => (
            <div
              key={promo.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-md border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
            >
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  {promo.badge}
                </div>
                <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm text-accent font-bold text-lg px-4 py-2 rounded-xl">
                  {promo.highlight}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">{promo.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {promo.desc}
                </p>
                <button
                  onClick={scrollToContacts}
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm bg-transparent border-none cursor-pointer transition-all hover:gap-3 p-0"
                >
                  Узнать подробнее <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promos;
