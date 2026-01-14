import {Award, Shield, Users, Zap} from "lucide-react";

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
        <section id="about" className="py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              О компании
            </span>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            <span className="text-gradient">«Первый Газовщик»</span> — надежный партнер
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-base md:text-lg">
                            <p>Лидирующая компания в сфере автономной газификации и обслуживания газовых систем.</p>
                            <p className="text-sm md:text-base">Мы обеспечиваем безопасность и комфорт, строго следуя государственным стандартам.</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        {features.map((feature) => (
                            <div key={feature.title} className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-flame-gradient flex items-center justify-center mb-4 text-white">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold mb-2">{feature.title}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
