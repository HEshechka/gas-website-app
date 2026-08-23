"use client";

import { useEffect, useState } from "react";

const KEY = "pg1_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY)) {
        return;
      }

      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    } catch {
      const t = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(KEY, String(new Date().toISOString()));
    } catch {
      /* noop */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-3xl md:left-auto md:right-6 md:bottom-6">
      <div className="glass relative overflow-hidden rounded-2xl p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)] md:p-6">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-flame/20 blur-2xl" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flame-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-background">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5.5 w-5.5">
              <circle cx="12" cy="12" r="8.5" />
              <path d="M12 7.5v4.5l3 2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex-1 text-sm leading-relaxed text-muted">
            Мы используем файлы cookie для корректной работы сайта и анализа
            посещаемости в соответствии с требованиями законодательства РФ.
            Продолжая использовать сайт, вы соглашаетесь с использованием cookie.
            Подробнее — в{" "}
            <a href="/policy" className="text-flame underline underline-offset-2">
              Политике конфиденциальности
            </a>
            .
          </div>
          <button
            onClick={accept}
            className="btn-flame shrink-0 rounded-xl px-6 py-3 text-sm font-bold"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
