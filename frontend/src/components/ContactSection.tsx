import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const phone = "+74957492925";
    const text = `Заявка с сайта:\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`;
    const username = "rusmsm"
    window.open(`https://t.me/${username}?text=${encodeURIComponent(text)}`, "_blank");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Контакты
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Свяжитесь с нами для <span className="text-gradient">бесплатной консультации</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-6">Заказать звонок</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="+7 (999) 999-99-99"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение (необязательно)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Опишите вашу задачу..."
                />
              </div>
              <Button variant="flame" size="xl" type="submit" className="w-full">
                <Send className="w-5 h-5" />
                Отправить заявку
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <a
                  href="tel:+74957492925"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-flame-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Телефон</div>
                    <div className="font-semibold">+7 (495) 749-29-25</div>
                  </div>
                </a>
                
                <a
                  href="mailto:info@1gazovshik.ru"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-flame-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold">7492925@mail.ru</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                  <div className="w-12 h-12 rounded-lg bg-flame-gradient flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Адрес</div>
                    <div className="font-semibold">Москва и Московская область</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                  <div className="w-12 h-12 rounded-lg bg-flame-gradient flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Режим работы</div>
                    <div className="font-semibold">Пн-Вс: 9:00 - 21:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-6 rounded-2xl bg-flame-gradient glow-primary">
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                Нужна срочная консультация?
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Позвоните нам прямо сейчас — наши специалисты ответят на все ваши вопросы
              </p>
              <Button variant="secondary" size="lg" asChild className="w-full">
                <a href="tel:+74957492925">
                  <Phone className="w-5 h-5" />
                  +7 (495) 749-29-25
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
