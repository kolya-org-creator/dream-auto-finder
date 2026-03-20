import { Car } from "@/data/cars";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface CarModalProps {
  car: Car | null;
  onClose: () => void;
}

const CarModal = ({ car, onClose }: CarModalProps) => {
  if (!car) return null;

  const specs = [
    { label: "Год выпуска", value: car.year },
    { label: "Двигатель", value: car.engine },
    { label: "Мощность", value: car.power },
    { label: "Коробка передач", value: car.transmission },
    { label: "Пробег", value: car.mileage },
    { label: "Цвет", value: car.color },
  ];

  const scrollToContacts = () => {
    onClose();
    setTimeout(() => {
      document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      className="fixed inset-0 bg-foreground/90 z-[2000] overflow-y-auto flex items-start justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-card max-w-[900px] w-full my-8 mx-4 rounded-2xl overflow-hidden animate-modal-in">
        <div className="relative h-[350px] md:h-[400px] bg-hero-dark flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 bg-foreground/50 text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border-none transition-all hover:bg-accent hover:rotate-90"
          >
            <X size={20} />
          </button>
          <img
            src={car.image}
            alt={car.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{car.title}</h2>
          <div className="text-2xl md:text-3xl font-bold text-accent mb-6">{car.price}</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="bg-secondary rounded-lg p-3 border-l-4 border-accent"
              >
                <div className="text-muted-foreground text-sm">{spec.label}</div>
                <div className="text-primary font-bold">{spec.value}</div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollToContacts}
            className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-bold shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.97] cursor-pointer border-none text-base"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarModal;
