import { PARTNERS } from "@/lib/data";
import { Eyebrow, Reveal } from "./ui";

function LogoChip({ name, logo, link }: (typeof PARTNERS)[number]) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex shrink-0 flex-col items-center gap-3 px-3 md:gap-4 md:px-5"
      aria-label={name}
    >
      <div
        className="logo-chip glass flex h-24 w-full max-w-52 items-center justify-center overflow-hidden rounded-2xl p-4 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-flame/40 group-hover:shadow-flame md:h-36 md:max-w-60 md:p-6"
      >
        {logo ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo || undefined} alt={name} loading="lazy" className="h-full w-full object-contain" />
          </>
        ) : (
          <span className="text-lg font-black uppercase tracking-[0.2em] text-flame">{name.slice(0, 2)}</span>
        )}
      </div>
      <span className="max-w-full truncate text-[10px] font-bold uppercase tracking-[0.16em] text-muted transition-colors duration-300 group-hover:text-flame md:text-xs md:tracking-[0.2em]">
        {name}
      </span>
    </a>
  );
}

export default function Partners() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6 md:mb-14">
        <Reveal>
          <Eyebrow>Наши партнёры</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold md:text-4xl">
            Работаем с <span className="text-gradient glow-text">лидерами отрасли</span>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="marquee-mask relative">
          <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused] md:gap-7">
            {row.map((p, i) => (
              <LogoChip key={`${p.name}-${i}`} {...p} />
            ))}
          </div>
          {/* side gradients for depth */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent md:w-56" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent md:w-56" />
        </div>
      </Reveal>
    </section>
  );
}
