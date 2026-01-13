import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "О компании" },
    { href: "#services", label: "Услуги" },
    { href: "#stats", label: "Опыт" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-flame-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">1</span>
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tight">
              <span className="text-gradient">ГАЗОВЩИК</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+74957492925"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+7 (495) 749-29-25</span>
            </a>
            <Button variant="flame" size="lg" asChild>
              <a href="#contact">Заказать звонок</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+74957492925"
                className="flex items-center gap-2 text-foreground py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+7 (495) 749-29-25</span>
              </a>
              <Button variant="flame" size="lg" asChild className="mt-2">
                <a href="#contact">Заказать звонок</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
