import {
  ADDRESS,
  EMAIL,
  NAV,
  PHONE_DISPLAY,
  PHONE_TEL,
  TELEGRAM_LINK,
  WHATSAPP_LINK,
} from "@/lib/data";
import { MailIcon, MapPinIcon, PhoneIcon, TelegramIcon, WhatsAppIcon } from "@/lib/icons";
import { Logo } from "./Header";

export default function Footer() {
  return (
    <footer className="relative border-t border-line/70 bg-surface/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flame/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 lg:pr-10">
            <Logo small />
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Компания «Первый Газовщик» — лидирующая компания, специализирующаяся
              на газификации домов, коммерческих и промышленных объектов.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-secondary/60 transition-all duration-300 hover:-translate-y-1 hover:border-flame/60 hover:shadow-flame"
              >
                <WhatsAppIcon className="h-5 w-5 text-muted transition-colors hover:text-flame" />
              </a>
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-secondary/60 transition-all duration-300 hover:-translate-y-1 hover:border-flame/60 hover:shadow-flame"
              >
                <TelegramIcon className="h-5 w-5 text-muted transition-colors hover:text-flame" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-base font-bold">Навигация</h4>
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-muted transition-colors hover:text-flame">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/policy" className="text-muted transition-colors hover:text-flame">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/offer" className="text-muted transition-colors hover:text-flame">
                  Публичная оферта
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-base font-bold">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-2.5 text-muted transition-colors hover:text-flame">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-flame" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-muted transition-colors hover:text-flame">
                  <MailIcon className="h-4 w-4 shrink-0 text-flame" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted">
                <MapPinIcon className="h-4 w-4 shrink-0 text-flame" />
                Москва и МО
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line/70 pt-7">
          <p className="text-center text-sm text-muted">
            © {new Date().getFullYear()} Первый Газовщик. Все права защищены.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-relaxed text-muted/70">
            Используя этот сайт, вы даёте согласие на обработку файлов cookie и
            персональных данных в соответствии с{" "}
            <a href="/policy" className="underline underline-offset-2 hover:text-flame">
              Политикой конфиденциальности
            </a>{" "}
            и Федеральным законом №152-ФЗ «О персональных данных».
          </p>
        </div>
      </div>
    </footer>
  );
}
