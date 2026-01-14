import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const partners = [
    { name: "Даблби", logo: "/DoubleBe.jpg", link: "https://double-b.ru/" },
    { name: "Первая чайная компания", logo: "/FirstTeaCompany.jpg", link: "https://teagroup.ru/" },
    { name: "Welder Catherine", logo: "/WelderCatherine.jpg", link: "https://theweldercatherine.ru/" },
    { name: "Алефтрейд", logo: "/AlefTrade.jpg", link: "https://alephtrade.com/" },
    { name: "Колибри", logo: "/Colibri.webp", link: "https://colibricoffee.ru/" },
    { name: "Pudra", logo: "/Pudra.png", link: "https://pudracoffee.ru/" },
    { name: "Just Coffee", logo: "/JustCoffee.jpg", link: "https://justcoffee.ru/" },
    { name: "Кофейные нотки", logo: "/CoffeeNotes.jpg", link: "https://coffeenotes.ru/" },
    { name: "Лаборатория кофе", logo: "/Laboratoria.jpg", link: "https://shop.laboratoriacoffee.ru/" },
    { name: "Montana Cofee", logo: "/Montana.webp", link: "https://shop.montana.ru/" },
    { name: "RusCoffee Roasters", logo: "/RusCoffee.jpg", link: "https://ruscoffee.ru/" },
    { name: "Smart Coffee Lab.", logo: "/SmartCoffee.jpg", link: "https://smartcoffeelab.ru/" },
    { name: "Сова", logo: "/Sova.jpg", link: "https://sovaonline.ru/" },
    { name: "Teaco", logo: "/Teaco.jpg", link: "https://teaco.ru/" },
    { name: "Traveler's Coffee", logo: "/TravelsCoffee.jpg", link: "https://travelers-coffee.com/" },
];

const PartnersSection = () => {
    // Инициализация Embla с бесконечным циклом
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false
    });

    const updateStyles = useCallback(() => {
        if (!emblaApi) return;

        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();
        const containerRect = emblaApi.rootNode().getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;

        emblaApi.slideNodes().forEach((slide, index) => {
            const rect = slide.getBoundingClientRect();
            const slideCenterX = rect.left + rect.width / 2;
            const distance = Math.abs(centerX - slideCenterX);

            // Настройка зоны фокуса
            const maxDistance = containerRect.width / 2;
            const normalized = Math.min(distance / maxDistance, 1);

            // Эффекты
            const glowIntensity = Math.pow(Math.max(0, 1 - normalized * 2), 2);
            const scale = 1 - normalized * 0.25;
            const opacity = 1 - normalized * 0.5;
            const grayValue = Math.min(normalized * 150, 100); // Быстрее уходим в ЧБ

            // Цвета (Голубой как в теме)
            const blueGlow = `rgba(59, 130, 246, ${glowIntensity * 0.6})`;
            const blueBorder = `rgba(59, 130, 246, ${glowIntensity})`;

            const htmlSlide = slide as HTMLElement;
            const imgBox = htmlSlide.querySelector(".img-box") as HTMLElement;

            htmlSlide.style.transform = `scale(${scale})`;
            htmlSlide.style.opacity = `${opacity}`;

            if (imgBox) {
                imgBox.style.filter = `grayscale(${grayValue}%)`;
                if (glowIntensity > 0.01) {
                    imgBox.style.boxShadow = `0 0 ${glowIntensity * 30}px ${glowIntensity * 5}px ${blueGlow}`;
                    imgBox.style.borderColor = blueBorder;
                } else {
                    imgBox.style.boxShadow = "none";
                    imgBox.style.borderColor = "";
                }
            }
        });
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on("scroll", updateStyles);
        emblaApi.on("reInit", updateStyles);
        updateStyles(); // Начальный вызов

        return () => {
            emblaApi.off("scroll", updateStyles);
            emblaApi.off("reInit", updateStyles);
        };
    }, [emblaApi, updateStyles]);

    return (
        <section className="py-16 md:py-24 overflow-hidden bg-background">
            <div className="container mx-auto px-4 mb-12 text-center">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                    Наши партнёры
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Работаем с <span className="text-gradient">лидерами отрасли</span>
                </h2>
            </div>

            <div className="relative group">
                {/* Градиентные маски */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

                {/* Viewport Embla */}
                <div className="overflow-hidden cursor-grab active:cursor-grabbing px-[10%]" ref={emblaRef}>
                    <div className="flex py-16">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_45%] min-w-0 sm:flex-[0_0_30%] lg:flex-[0_0_20%] px-4 select-none"
                            >
                                <a
                                    href={partner.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-4 no-underline"
                                >
                                    <div className="img-box w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-card border border-border flex items-center justify-center p-4 overflow-hidden shadow-none transition-none">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="w-full h-full object-contain pointer-events-none"
                                        />
                                    </div>
                                    <span className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                                        {partner.name}
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hint */}
            <div className="flex justify-center mt-4">
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] animate-pulse">
                    Листайте влево или вправо
                </p>
            </div>
        </section>
    );
};

export default PartnersSection;