import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#home", label: "Главная" },
  { href: "#catalog", label: "Каталог" },
  { href: "#about", label: "О компании" },
  { href: "#contacts", label: "Контакты" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 bg-primary ${
        scrolled ? "shadow-lg shadow-primary/30" : ""
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-[1.8rem] font-bold text-accent tracking-wide">
          АВТОПРЕМИУМ
        </span>
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleClick(item.href)}
                className="text-primary-foreground relative py-1 transition-colors hover:text-accent after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full bg-transparent border-none cursor-pointer text-base"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-primary-foreground bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-primary px-6 pb-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-primary-foreground text-left py-2 bg-transparent border-none cursor-pointer text-base hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
