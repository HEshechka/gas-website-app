"use client";

import { useState, type FormEvent } from "react";
import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WORK_HOURS,
} from "@/lib/data";
import {
  CheckIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from "@/lib/icons";
import { Eyebrow, Reveal, TiltCard } from "./ui";

type Status = "idle" | "sending" | "done" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!consent) {
      setError("Для отправки заявки необходимо согласие на обработку персональных данных");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message, consent, source: "site" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Не удалось отправить заявку");
      }
      setStatus("done");
      setName("");
      setPhone("");
      setMessage("");
      setConsent(false);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Произошла ошибка, позвоните нам");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-28">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flame/10 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <Eyebrow>Контакты</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Свяжитесь с нами для <span className="text-gradient glow-text">бесплатной консультации</span>
          </h2>
          <p className="mt-5 text-lg text-muted">
            Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время
          </p>
        </Reveal>

        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Форма */}
          <Reveal>
            <div className="glass relative h-full overflow-hidden rounded-3xl p-6 md:p-9">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-flame/15 blur-3xl" />
              <h3 className="relative mb-2 font-display text-2xl font-bold">Заказать звонок</h3>
              <p className="relative mb-7 text-sm text-muted">
                Ответим на вопросы и рассчитаем стоимость вашего объекта
              </p>

              {status === "done" ? (
                <div className="relative flex h-[380px] flex-col items-center justify-center rounded-2xl border border-flame/30 bg-flame/5 p-8 text-center">
                  <div className="flame-gradient mb-5 flex h-16 w-16 items-center justify-center rounded-full text-background shadow-flame-lg">
                    <CheckIcon className="h-8 w-8" strokeWidth={2.4} />
                  </div>
                  <div className="font-display text-xl font-bold">Заявка отправлена!</div>
                  <p className="mt-3 max-w-sm text-muted">
                    Спасибо! Наш специалист свяжется с вами в рабочее время
                    (Пн-Вс: 11:00 - 21:00).
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-outline mt-6 rounded-xl px-6 py-2.5 text-sm font-bold"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="relative space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                      Ваше имя
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Иванов"
                      className="field w-full rounded-xl px-4 py-3.5"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
                      Телефон
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (999) 999-99-99"
                      className="field w-full rounded-xl px-4 py-3.5"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                      Сообщение (необязательно)
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Опишите вашу задачу..."
                      className="field min-h-28 w-full resize-none rounded-xl px-4 py-3.5"
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 cursor-pointer appearance-none rounded border border-line bg-background transition-all checked:border-flame checked:bg-flame checked:shadow-flame"
                    />
                    <span>
                      Я даю согласие на обработку персональных данных в соответствии с
                      Федеральным законом №152-ФЗ и принимаю условия{" "}
                      <a href="/policy" className="text-flame underline underline-offset-2 hover:text-flame-2">
                        Политики конфиденциальности
                      </a>
                    </span>
                  </label>

                  {error && (
                    <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-flame group inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-base font-bold disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <SendIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        Отправить заявку
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Контактная информация */}
          <div className="flex flex-col gap-6">
            <Reveal delay={100}>
              <TiltCard className="card-3d rounded-3xl" max={5}>
                <div className="h-full p-6 md:p-8">
                  <h3 className="mb-6 font-display text-xl font-bold">Контактная информация</h3>
                  <div className="space-y-4">
                    <a
                      href={PHONE_TEL}
                      className="tilt-pop-sm group flex items-center gap-4 rounded-2xl bg-secondary/50 p-4 transition-colors duration-300 hover:bg-secondary/80"
                    >
                      <div className="flame-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-background transition-transform duration-300 group-hover:scale-110">
                        <PhoneIcon className="h-5.5 w-5.5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted">Телефон</div>
                        <div className="font-bold">{PHONE_DISPLAY}</div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${EMAIL}`}
                      className="tilt-pop-sm group flex items-center gap-4 rounded-2xl bg-secondary/50 p-4 transition-colors duration-300 hover:bg-secondary/80"
                    >
                      <div className="flame-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-background transition-transform duration-300 group-hover:scale-110">
                        <MailIcon className="h-5.5 w-5.5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted">Email</div>
                        <div className="font-bold">{EMAIL}</div>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 rounded-2xl bg-secondary/50 p-4">
                      <div className="flame-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-background">
                        <MapPinIcon className="h-5.5 w-5.5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted">Адрес</div>
                        <div className="font-bold">{ADDRESS}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl bg-secondary/50 p-4">
                      <div className="flame-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-background">
                        <ClockIcon className="h-5.5 w-5.5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted">Режим работы</div>
                        <div className="font-bold">{WORK_HOURS}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={200} className="grow">
              <div className="flame-gradient relative h-full overflow-hidden rounded-3xl p-6 shadow-flame-lg md:p-8">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
                <div className="relative flex h-full flex-col">
                  <h3 className="mb-3 font-display text-xl font-bold text-background">
                    Нужна срочная консультация?
                  </h3>
                  <p className="mb-6 text-background/80">
                    Позвоните нам прямо сейчас — наши специалисты ответят на все
                    ваши вопросы
                  </p>
                  <a
                    href={PHONE_TEL}
                    className="mt-auto inline-flex w-fit items-center gap-2.5 rounded-xl bg-background px-6 py-3.5 font-bold text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.6)]"
                  >
                    <PhoneIcon className="h-4.5 w-4.5 text-flame-2" />
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
