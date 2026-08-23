"use client";

import { useEffect, useState } from "react";
import { NAV, PHONE_DISPLAY, PHONE_TEL } from "@/lib/data";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/lib/icons";

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <div
        className={`flame-gradient relative flex items-center justify-center rounded-xl text-background shadow-flame transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 ${
          small ? "h-9 w-9 text-lg" : "h-10 w-10 md:h-11 md:w-11 text-2xl"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <span className="font-display font-black">1</span>
        <span className="absolute inset-0 rounded-xl bg-white/25 [clip-path:polygon(0_0,100%_0,100%_35%,0_55%)] opacity-40" />
      </div>
      <span className={`font-display font-bold tracking-tight ${small ? "text-base" : "text-lg md:text-xl"}`}>
        <span className="text-gradient">ГАЗОВЩИК</span>
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-[0_18px_50px_-20px_rgba(2,8,20,0.9)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-ink"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-flame to-flame-2 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 font-semibold text-ink transition-colors hover:text-flame"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-secondary/70 transition-all duration-300 group-hover:scale-110">
              <PhoneIcon className="h-4 w-4 text-flame" />
            </span>
            {PHONE_DISPLAY}
          </a>
          <a href="#contact" className="btn-flame rounded-xl px-5 py-2.5 text-sm font-bold">
            Заказать звонок
          </a>
        </div>

        <button
          className="p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть меню"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-line/60 px-4 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-medium text-muted transition-colors hover:bg-secondary/60 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-line/60 pt-4">
            <a href={PHONE_TEL} className="flex items-center gap-2 px-3 font-semibold">
              <PhoneIcon className="h-4 w-4 text-flame" />
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-flame rounded-xl px-5 py-3 text-center font-bold"
            >
              Заказать звонок
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
