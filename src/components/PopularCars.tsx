import { cars } from "@/data/cars";

interface PopularCarsProps {
  onCarClick: (id: number) => void;
}

const PopularCars = ({ onCarClick }: PopularCarsProps) => {
  const popular = cars.slice(0, 3);

  return (
    <section className="py-16 px-6 max-w-[1200px] mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12 text-balance">
        Популярные модели
        <span className="block w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {popular.map((car) => (
          <div
            key={car.id}
            onClick={() => onCarClick(car.id)}
            className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-300 hover:scale-[1.03] group h-[280px]"
          >
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-primary-foreground mb-1">{car.title}</h3>
              <div className="text-accent font-bold text-lg">от {car.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCars;
