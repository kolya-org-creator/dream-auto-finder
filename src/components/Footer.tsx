const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-hero-dark text-primary-foreground pt-12 pb-4 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-left">
        <div>
          <h3 className="text-accent font-bold text-lg mb-3">АВТОПРЕМИУМ</h3>
          <p className="text-primary-foreground/60 leading-relaxed text-sm">
            Продажа премиальных автомобилей с полным пакетом документов и гарантией качества.
          </p>
        </div>
        <div>
          <h3 className="text-accent font-bold text-lg mb-3">Разделы</h3>
          {["#home:Главная", "#catalog:Каталог", "#about:О компании", "#contacts:Контакты"].map((s) => {
            const [href, label] = s.split(":");
            return (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="block text-primary-foreground/60 mb-2 transition-all hover:text-primary-foreground hover:pl-1 bg-transparent border-none cursor-pointer text-sm text-left"
              >
                {label}
              </button>
            );
          })}
        </div>
        <div>
          <h3 className="text-accent font-bold text-lg mb-3">Услуги</h3>
          {["Трейд-ин", "Автокредит", "Страхование", "Сервис"].map((s) => (
            <span key={s} className="block text-primary-foreground/60 mb-2 text-sm">{s}</span>
          ))}
        </div>
        <div>
          <h3 className="text-accent font-bold text-lg mb-3">Контакты</h3>
          <a href="tel:+74951234567" className="block text-primary-foreground/60 mb-2 hover:text-primary-foreground transition-colors text-sm">
            +7 (495) 123-45-67
          </a>
          <a href="mailto:info@autopremium.ru" className="block text-primary-foreground/60 mb-2 hover:text-primary-foreground transition-colors text-sm">
            info@autopremium.ru
          </a>
          <span className="block text-primary-foreground/60 mt-3 text-sm">г. Москва, ул. Автомобильная, 25</span>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-primary-foreground/40 text-sm">
        © 2024 АвтоПремиум. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
