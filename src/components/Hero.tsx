import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToCatalog = () => {
    document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="mt-[70px] relative overflow-hidden min-h-[520px] flex items-center justify-center"
    >
      <img
        src={heroBg}
        alt="Автосалон"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-dark/70" />
      <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent animate-pulse-glow" />
      <div className="relative z-10 text-center px-6 py-24 max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-[3.5rem] font-bold text-primary-foreground mb-4 leading-tight animate-fade-in-up text-balance">
          Найдите автомобиль своей мечты
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up-delay text-pretty">
          Широкий выбор новых и подержанных автомобилей премиум-класса. Выгодные
          условия покупки и профессиональное обслуживание.
        </p>
        <button
          onClick={scrollToCatalog}
          className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/40 active:scale-[0.97] animate-fade-in-up-delay-2 cursor-pointer border-none"
        >
          Смотреть каталог
        </button>
      </div>
    </section>
  );
};

export default Hero;
