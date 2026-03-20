import { useState } from "react";
import { cars, brands } from "@/data/cars";

interface CatalogProps {
  onCarClick: (id: number) => void;
}

const Catalog = ({ onCarClick }: CatalogProps) => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? cars : cars.filter((c) => c.brand === filter);

  return (
    <section id="catalog" className="py-20 px-6 bg-card">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12 text-balance">
          Каталог автомобилей
          <span className="block w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </h2>
        <div className="flex gap-3 mb-8 flex-wrap justify-center">
          {brands.map((b) => (
            <button
              key={b.key}
              onClick={() => setFilter(b.key)}
              className={`px-5 py-2 rounded-full border-2 font-medium transition-all duration-300 cursor-pointer text-sm ${
                filter === b.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <h3 className="text-xl font-bold">Автомобили не найдены</h3>
            <p>Попробуйте изменить параметры фильтрации</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((car) => (
              <div
                key={car.id}
                onClick={() => onCarClick(car.id)}
                className="bg-card rounded-2xl overflow-hidden shadow-md border border-border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary mb-1">{car.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {car.year} • {car.engine} • {car.body}
                  </p>
                  <div className="text-xl font-bold text-accent">{car.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
