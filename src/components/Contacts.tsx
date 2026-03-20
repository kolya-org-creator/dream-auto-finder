import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contacts = () => {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean }>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();

    const newErrors: typeof errors = {};
    if (!name) newErrors.name = true;
    if (!phone || phone.replace(/\D/g, "").length < 10) newErrors.phone = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <section id="contacts" className="py-20 px-6 bg-primary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Свяжитесь с нами</h2>
          <div className="space-y-4 mb-8">
            {[
              { icon: <MapPin size={20} />, text: "г. Москва, ул. Автомобильная, 25" },
              { icon: <Phone size={20} />, text: "+7 (495) 123-45-67" },
              { icon: <Mail size={20} />, text: "info@autopremium.ru" },
              { icon: <Clock size={20} />, text: "Ежедневно с 9:00 до 21:00" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-lg">
                <span className="text-accent">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-primary-foreground/80 leading-relaxed">
            Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время для консультации и подбора автомобиля.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl text-foreground">
          {success && (
            <div className="bg-success text-accent-foreground p-4 rounded-lg mb-4 text-center font-medium">
              Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
            </div>
          )}
          <div className="mb-5">
            <label className="block mb-1 text-primary font-medium text-sm">Ваше имя *</label>
            <input
              name="name"
              placeholder="Иван Иванов"
              className={`w-full p-3 rounded-lg border-2 text-base transition-colors focus:outline-none focus:border-accent ${
                errors.name ? "border-accent" : "border-border"
              }`}
            />
            {errors.name && <p className="text-accent text-sm mt-1">Пожалуйста, введите ваше имя</p>}
          </div>
          <div className="mb-5">
            <label className="block mb-1 text-primary font-medium text-sm">Телефон *</label>
            <input
              name="phone"
              type="tel"
              placeholder="+7 (999) 999-99-99"
              className={`w-full p-3 rounded-lg border-2 text-base transition-colors focus:outline-none focus:border-accent ${
                errors.phone ? "border-accent" : "border-border"
              }`}
            />
            {errors.phone && <p className="text-accent text-sm mt-1">Пожалуйста, введите корректный номер</p>}
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-primary font-medium text-sm">Сообщение</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Интересующая модель автомобиля или вопрос..."
              className="w-full p-3 rounded-lg border-2 border-border text-base transition-colors focus:outline-none focus:border-accent resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-3 rounded-full font-bold text-base shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.97] cursor-pointer border-none"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
