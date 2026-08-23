import { ABOUT_CARDS } from "@/lib/data";
import { BadgeCheckIcon, ShieldIcon, TeamIcon, ZapIcon } from "@/lib/icons";
import { Eyebrow, Reveal, TiltCard } from "./ui";

const ICONS = {
  shield: ShieldIcon,
  team: TeamIcon,
  badge: BadgeCheckIcon,
  zap: ZapIcon,
} as const;

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 md:py-28">
      <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-flame/8 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Текст */}
          <Reveal>
            <div className="space-y-7">
              <Eyebrow>О компании</Eyebrow>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-[2.6rem]">
                <span className="text-gradient glow-text">«Первый Газовщик»</span>
                <br /> — надежный партнер
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Лидирующая компания в сфере автономной газификации и обслуживания
                газовых систем. Мы обеспечиваем качество, безопасность и комфорт,
                строго следуя государственным стандартам и накопленному опыту.
              </p>

              <div className="glass relative overflow-hidden rounded-2xl p-5 md:p-6">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-flame/20 blur-2xl" />
                <div className="flex items-center gap-4">
                  <div className="flame-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-background shadow-flame">
                    <ShieldIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold">Допуски и сертификация</div>
                    <div className="text-sm text-muted">
                      Работаем в соответствии с государственными стандартами
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Карточки преимуществ */}
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
            {ABOUT_CARDS.map((card, i) => {
              const Icon = ICONS[card.icon];
              return (
                <Reveal key={card.title} delay={i * 110}>
                  <TiltCard className="card-3d h-full rounded-2xl" max={8}>
                    <div className="p-6 md:p-7">
                      <div className="tilt-pop-sm mb-5 inline-flex">
                        <div className="flame-gradient flex h-12 w-12 items-center justify-center rounded-xl text-background shadow-flame">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <h3 className="tilt-pop-sm mb-2 font-display text-base font-bold md:text-lg">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {card.description}
                      </p>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
