import { Shield, Users, Award, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Безопасность",
    description: "Все работы выполняются с соблюдением требований СНиП, СП и Гостехнадзора",
  },
  {
    icon: Users,
    title: "Опытная команда",
    description: "Квалифицированные специалисты с многолетним опытом работы",
  },
  {
    icon: Award,
    title: "Гарантия качества",
    description: "Предоставляем гарантию на все выполненные работы",
  },
  {
    icon: Zap,
    title: "Оперативность",
    description: "Быстрое выполнение заказов любой сложности",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              О компании
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">«Первый Газовщик»</span> — надёжный выбор
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Лидирующая компания, специализирующаяся на газификации домов, коммерческих 
              и промышленных объектов. Мы предлагаем качественные услуги по проектированию, 
              строительству и обслуживанию газовых систем.
            </p>
            <p className="text-muted-foreground">
              Наша миссия — обеспечить клиентов надежным, безопасным и эффективным 
              источником энергии, задействуя инновационные решения, высококвалифицированный 
              персонал и качественное оборудование.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-flame-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
