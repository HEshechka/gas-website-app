import {Mail, MapPin, Phone} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card border-t border-border py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-flame-gradient flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-xl">1</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight">
                <span className="text-gradient">ГАЗОВЩИК</span>
              </span>
                        </a>
                        <p className="text-muted-foreground max-w-md mb-6">
                            Компания «Первый Газовщик» — лидирующая компания, специализирующаяся
                            на газификации домов, коммерческих и промышленных объектов.
                        </p>
                        <div className="flex items-center gap-4">
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/74957492925"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                aria-label="WhatsApp"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                            </a>

                            {/* Telegram */}
                            <a
                                href="https://t.me/i7492925"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                aria-label="Telegram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.891 8.11l-1.92 9.041c-.145.639-.523.797-1.057.498l-2.924-2.154-1.411 1.358c-.156.156-.287.287-.588.287l.21-2.981 5.426-4.9c.236-.21-.051-.326-.367-.117l-6.705 4.221-2.887-.903c-.628-.196-.64-.628.131-.929l11.282-4.348c.523-.19.98.123.81.9z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Навигация</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#about"
                                   className="text-muted-foreground hover:text-foreground transition-colors">
                                    О компании
                                </a>
                            </li>
                            <li>
                                <a href="#services"
                                   className="text-muted-foreground hover:text-foreground transition-colors">
                                    Услуги
                                </a>
                            </li>
                            <li>
                                <a href="#stats"
                                   className="text-muted-foreground hover:text-foreground transition-colors">
                                    Опыт работы
                                </a>
                            </li>
                            <li>
                                <a href="#contact"
                                   className="text-muted-foreground hover:text-foreground transition-colors">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Контакты</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:+74957492925"
                                   className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                                    <Phone className="w-4 h-4 text-primary"/>
                                    +7 (495) 749-29-25
                                </a>
                            </li>
                            <li>
                                <a href="mailto:7492925@mail.ru"
                                   className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                                    <Mail className="w-4 h-4 text-primary"/>
                                    7492925@mail.ru
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="w-4 h-4 text-primary flex-shrink-0"/>
                                Москва и МО
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-border">
                    <p className="text-center text-muted-foreground text-sm">
                        © {currentYear} Первый Газовщик. Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
