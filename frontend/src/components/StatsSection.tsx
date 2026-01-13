const stats = [
  { value: "15+", label: "лет на рынке", suffix: "" },
  { value: "12 000+", label: "выполненных работ", suffix: "" },
  { value: "500+", label: "довольных клиентов", suffix: "" },
  { value: "100%", label: "гарантия качества", suffix: "" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--flame-orange)/0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
