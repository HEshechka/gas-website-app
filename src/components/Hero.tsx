"use client";

import { useEffect, useRef } from "react";
import { HERO_STATS, PHONE_TEL } from "@/lib/data";
import { ArrowRightIcon, CheckIcon, PhoneIcon, ShieldIcon, FlameIcon } from "@/lib/icons";
import { Counter } from "./ui";

const CHIPS = [
  { label: "Газгольдеры", icon: GaugeMini, x: "62%", y: "20%", d: "0s" },
  { label: "Баллонный газ", icon: TankMini, x: "74%", y: "52%", d: "1.4s" },
  { label: "СНиП · СП · ГОСТ", icon: ShieldIcon, x: "58%", y: "72%", d: "2.6s" },
];

function GaugeMini(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" {...p}>
      <path d="M4 17a8.5 8.5 0 1116 0" />
      <path d="M12 17l3.5-5" />
    </svg>
  );
}

function TankMini(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" {...p}>
      <rect x="7" y="4" width="10" height="17" rx="5" />
      <path d="M10 4V2.5h4V4M9.5 9h5" />
    </svg>
  );
}

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.setProperty("--mx", px.toFixed(4));
          el.style.setProperty("--my", py.toFixed(4));
          raf = 0;
        });
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" ref={sceneRef} className="relative flex min-h-svh items-center overflow-hidden pt-28 md:pt-32">
      {/* Слой 1: фото-фон */}
      <div
        className="absolute inset-0"
        style={{
          transform:
            "translate3d(calc(var(--mx, 0) * -18px), calc(var(--my, 0) * -12px), 0) scale(1.06)",
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <img
          src="/hero-bg.jpg"
          alt="Газификация"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Слои затемнения */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-background/40" />
      {/* Световой ореол */}
      <div className="absolute -right-40 top-1/4 h-[560px] w-[560px] rounded-full bg-flame/14 blur-[140px] animate-pulse-glow" />

      {/* Контент */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="reveal in-view">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-flame/30 bg-flame/10 px-4 py-2 text-xs font-semibold tracking-wide text-flame md:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-flame" />
              </span>
              15+ лет на рынке газификации
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            Газ —{" "}
            <span className="text-gradient glow-text inline-block">энергия</span>
            <br className="hidden sm:block" /> для жизни
          </h1>

          <p className="mt-7 max-w-2xl text-base text-muted sm:text-lg md:text-xl md:leading-relaxed">
            Компания «Первый Газовщик» предоставляет услуги по автономному
            газоснабжению производств, предприятий и частных домов с гарантией
            качества.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row md:mt-11">
            <a href="#contact" className="btn-flame group inline-flex h-13 items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold">
              Бесплатная консультация
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a href={PHONE_TEL} className="btn-outline group inline-flex h-13 items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-base font-bold">
              <PhoneIcon className="h-4 w-4 text-flame" />
              Позвонить
            </a>
          </div>

          {/* Статистика */}
          <div className="mt-12 flex items-center gap-7 border-t border-line/60 pt-7 md:mt-16 md:gap-16">
            {HERO_STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-7 md:gap-16">
                {i > 0 && <span className="h-9 w-px bg-line/70 md:h-11" />}
                <div>
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display text-gradient text-xl font-bold md:text-3xl"
                  />
                  <div className="mt-1 text-[10px] uppercase leading-tight tracking-widest text-muted md:text-xs">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 hidden items-center gap-2 text-sm text-muted md:flex">
            <CheckIcon className="h-4 w-4 text-flame" />
            Работаем по договору · Москва и Московская область
          </div>
        </div>
      </div>

      {/* Градиент перехода вниз */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
