import { Button } from "@/components/ui/button";
import { Home, Factory, Flame, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Настройка и подключение ростеров",
    description: "Профессионально рассчитываем оборудование и подключаем Ваши ростеры к баллонному газу или к газгольдеру.",
    features: ["Профессиональный монтаж газопровода", "Проектирование системы", "Техническое обслуживание", "Подбор оборудования"],
  },
  {
    icon: Factory,
    title: "Газификация предприятий",
    description: "Переход на новый уровень эффективности — контроль над затратами и экологичность. Доверьте нам провести газ на ваш объект.",
    features: ["Подключение и настройка газового оборудования", "Индивидуальный подход", "Оптимизация затрат", "Полный цикл поддержки"],
  },
  {
    icon: Home,
    title: "Газификация загородного дома",
    description: "Мечтаете, чтобы жизнь за городом стала комфортной? Газификация — это разумное вложение в ваше будущее, которое повысит качество жизни.",
    features: ["Подключение газовых котлов, плит, конвекторов", "Безопасность и надёжность", "Газификация и отопление за 24 часа", "Чистота и порядок после монтажа"],
  },
  {
    icon: Wrench,
    title: "Сварочные работы",
    description: "Наши специалисты выполняют полный комплекс сварочных соединений при монтаже газопровода с соблюдением всех требований.",
    features: ["Сварочный ремонт и изготовление конструкций", "Инженерный подход", "Аккуратность и эстетичность", "Гарантия на все виды работ"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-card/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Мы предлагаем <span className="text-gradient">большой опыт работы</span> и профессионализм
          </h2>
          <p className="text-lg text-muted-foreground">
            Полный спектр услуг по газификации для  коммерческих и промышленных объектов, а так же для частного домовладения.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-flame-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="flameOutline" className="group/btn" asChild>
                  <a href="tel:+74957492925">
                    Узнать подробнее
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
