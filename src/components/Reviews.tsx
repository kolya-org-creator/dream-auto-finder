import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Алексей Петров",
    initials: "АП",
    car: "BMW X5 xDrive30d",
    rating: 5,
    text: "Отличный автосалон! Менеджер Дмитрий помог подобрать именно тот автомобиль, который я искал. Весь процесс от выбора до оформления занял всего 2 дня. Машина в идеальном состоянии, все документы в порядке.",
    date: "Март 2024",
    color: "bg-accent",
  },
  {
    name: "Елена Сидорова",
    initials: "ЕС",
    car: "Mercedes-Benz E 200",
    rating: 5,
    text: "Покупала машину впервые и очень переживала. Команда АвтоПремиум провела полную диагностику, показала историю обслуживания. Кредит оформили за 20 минут. Рекомендую всем!",
    date: "Февраль 2024",
    color: "bg-primary",
  },
  {
    name: "Максим Волков",
    initials: "МВ",
    car: "Audi Q7 55 TFSI",
    rating: 5,
    text: "Уже второй автомобиль покупаю здесь. Воспользовался программой трейд-ин — оценили мой старый авто по рыночной цене, без занижений. Сервис на высшем уровне, как и обещали.",
    date: "Январь 2024",
    color: "bg-hero-dark",
  },
  {
    name: "Ирина Козлова",
    initials: "ИК",
    car: "Toyota Camry 3.5",
    rating: 4,
    text: "Очень довольна покупкой! Автомобиль полностью соответствует описанию. Понравилось, что предоставили бесплатное первое ТО. Единственное — хотелось бы чуть больше вариантов цветов.",
    date: "Декабрь 2023",
    color: "bg-accent",
  },
  {
    name: "Дмитрий Новиков",
    initials: "ДН",
    car: "Porsche Cayenne S",
    rating: 5,
    text: "Премиальный сервис от начала до конца. Машину подготовили безупречно — полировка, химчистка, полный бак. Приятные бонусы при покупке. Буду возвращаться!",
    date: "Ноябрь 2023",
    color: "bg-primary",
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const maxStart = Math.max(0, reviews.length - visibleCount);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxStart, c + 1));

  const visible = reviews.slice(current, current + visibleCount);

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
          Отзывы клиентов
          <span className="block w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Более 5 000 довольных клиентов доверили нам выбор своего автомобиля
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((review) => (
              <div
                key={review.name}
                className="bg-background rounded-2xl p-6 shadow-sm border border-border flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <Quote size={28} className="text-accent/20 mb-3" />
                <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-5">
                  {review.text}
                </p>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? "fill-accent text-accent" : "text-border"}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className={`w-10 h-10 rounded-full ${review.color} text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">{review.name}</div>
                    <div className="text-muted-foreground text-xs">
                      {review.car} · {review.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {reviews.length > visibleCount && (
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={prev}
                disabled={current === 0}
                className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center transition-all duration-200 cursor-pointer bg-card hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: maxStart + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 border-none cursor-pointer ${
                      i === current ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                disabled={current === maxStart}
                className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center transition-all duration-200 cursor-pointer bg-card hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
