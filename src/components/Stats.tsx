import { STATS } from "@/lib/data";
import { Counter, Reveal } from "./ui";

export default function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden py-16 md:py-24">
      {/* глубина: градиентные слои */}
      <div className="absolute inset-0 bg-gradient-to-r from-flame/10 via-flame-2/5 to-flame/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(185_75%_45%/0.12),transparent_68%)]" />
      <div className="bg-grid absolute inset-x-0 top-0 h-full opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flame/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-flame/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="relative px-4 text-center">
              {i > 0 && (
                <span className="absolute -left-px top-1/2 hidden h-16 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-flame/30 to-transparent md:block" />
              )}
              <div className="font-display text-4xl font-bold md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} className="text-gradient glow-text" />
              </div>
              <div className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-muted md:text-sm">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
