import {Button} from "@/components/ui/button";
import {ArrowRight, Phone} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={heroBg} alt="Газификация" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"/>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-3xl">
                    <div className="animate-slide-up">
                        <span
                            className="inline-block px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs md:text-sm font-medium mb-6">
                            15+ лет на рынке газификации
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-slide-up"
                        style={{animationDelay: '0.1s'}}>
                        Газ — <span className="text-gradient glow-text">энергия</span> для жизни
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up"
                       style={{animationDelay: '0.2s'}}>
                        Компания «Первый Газовщик» предоставляет услуги по автономному газоснабжению,
                        газификации домов и предприятий с гарантией качества.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 animate-slide-up"
                         style={{animationDelay: '0.3s'}}>
                        <Button variant="flame" size="lg" asChild className="group h-12 md:h-14 px-8">
                            <a href="#contact">
                                Бесплатная консультация
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                            </a>
                        </Button>
                        <Button variant="flameOutline" size="lg" asChild className="h-12 md:h-14 px-8">
                            <a href="tel:+74957492925">
                                <Phone className="w-4 h-4 mr-2"/>
                                Позвонить
                            </a>
                        </Button>
                    </div>

                    <div
                        className="flex flex-row items-center gap-6 md:gap-16 pt-6 md:pt-8 border-t border-border/20 animate-slide-up justify-center md:justify-start"
                        style={{animationDelay: '0.4s'}}>
                        {/* Блок 1 */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="text-xl md:text-3xl font-bold text-gradient">15+</div>
                            <div className="text-[10px] md:text-xs text-muted-foreground uppercase leading-tight mt-1">
                                лет опыта
                            </div>
                        </div>

                        {/* Разделитель */}
                        <div className="w-px h-8 md:h-10 bg-border/20"/>

                        {/* Блок 2 */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="text-xl md:text-3xl font-bold text-gradient">12 000+</div>
                            <div className="text-[10px] md:text-xs text-muted-foreground uppercase leading-tight mt-1">
                                работ
                            </div>
                        </div>

                        {/* Разделитель */}
                        <div className="w-px h-8 md:h-10 bg-border/20"/>

                        {/* Блок 3 */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="text-xl md:text-3xl font-bold text-gradient">100%</div>
                            <div className="text-[10px] md:text-xs text-muted-foreground uppercase leading-tight mt-1">
                                гарантия
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
