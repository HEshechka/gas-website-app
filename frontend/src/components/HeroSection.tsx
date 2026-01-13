import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Газификация"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              15+ лет на рынке газификации
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Газ — <span className="text-gradient glow-text">энергия</span> для жизни
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Компания «Первый Газовщик» предоставляет услуги по автономному газоснабжению, 
            газификации домов и предприятий, монтажу газовых систем с гарантией качества.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="flame" size="xl" asChild className="group">
              <a href="#contact">
                Бесплатная консультация
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="flameOutline" size="xl" asChild>
              <a href="tel:+74957492925">
                <Phone className="w-5 h-5" />
                Позвонить
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-8 border-t border-border/50 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gradient">15+</div>
              <div className="text-sm text-muted-foreground">лет опыта</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gradient">12 000+</div>
              <div className="text-sm text-muted-foreground">выполненных работ</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground">гарантия качества</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
