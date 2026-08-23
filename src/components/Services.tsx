import { SERVICES, PHONE_TEL } from "@/lib/data";
import { ArrowRightIcon, CheckIcon, FactoryIcon, HomeIcon, RouterIcon, WeldIcon } from "@/lib/icons";
import { Eyebrow, Reveal, TiltCard } from "./ui";

const ICONS = {
  router: RouterIcon,
  factory: FactoryIcon,
  home: HomeIcon,
  weld: WeldIcon,
} as const;

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-16 md:py-28">
      {/* фон секции */}
      <div className="absolute inset-0 bg-surface/45" />
      <div className="absolute right-0 top-0 h-2/3 w-1/3 rounded-full bg-flame/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-2/3 w-1/3 rounded-full bg-flame/5 blur-3xl" />
      <div className="bg-grid absolute inset-x-0 bottom-0 h-[50%] rotate-180" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-18">
          <Eyebrow>Наши услуги</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Мы предлагаем <span className="text-gradient glow-text">большой опыт работы</span>
            <br className="hidden md:block" /> и профессионализм
          </h2>
          <p className="mt-5 text-lg text-muted">
            Полный спектр услуг по газификации для коммерческих и промышленных
            объектов, а так же для частного домовладения.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 2) * 120}>
                <TiltCard className="card-3d group h-full rounded-3xl" max={7}>
                  <div className="flex h-full flex-col p-6 md:p-8">
                    <div className="mb-6 flex items-start gap-4">
                      <div className="tilt-pop shrink-0">
                        <div className="flame-gradient flex h-14 w-14 items-center justify-center rounded-2xl text-background shadow-flame transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                          <Icon className="h-7 w-7" />
                        </div>
                      </div>
                      <h3 className="tilt-pop-sm font-display text-lg font-bold leading-snug md:text-xl">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mb-6 leading-relaxed text-muted">{service.description}</p>

                    <ul className="mb-7 grid gap-2.5 sm:grid-cols-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-flame/15 text-flame">
                            <CheckIcon className="h-3 w-3" strokeWidth={2.6} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={PHONE_TEL}
                      className="btn-outline group/btn mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold"
                    >
                      Узнать подробнее
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
