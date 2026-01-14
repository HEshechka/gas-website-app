import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

const doubledPartners = [...partners, ...partners];

const PartnersSection = () => {
    const autoplay = Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true
    });

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            dragFree: true,
            startIndex: partners.length
        },
        [autoplay]
    );

    const updateStyles = useCallback(() => {
        if (!emblaApi) return;

        const containerRect = emblaApi.rootNode().getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;

        emblaApi.slideNodes().forEach((slide) => {
            const rect = slide.getBoundingClientRect();
            const slideCenterX = rect.left + rect.width / 2;
            const distance = Math.abs(centerX - slideCenterX);

            const focusWidth = 150;
            const maxDistance = containerRect.width / 2.5;

            const offsetDistance = Math.max(0, distance - focusWidth);
            const normalized = Math.min(offsetDistance / (maxDistance - focusWidth), 1);

            const glowIntensity = Math.pow(Math.max(0, 1 - normalized), 2);
            const grayValue = Math.min(normalized * 100, 100);

            const blueGlow = `rgba(59, 130, 246, ${glowIntensity * 0.7})`;
            const blueBorder = `rgba(59, 130, 246, ${glowIntensity})`;

            const htmlSlide = slide as HTMLElement;
            const imgBox = htmlSlide.querySelector(".img-box") as HTMLElement;

            htmlSlide.style.transform = `scale(${1 - normalized * 0.15})`;
            htmlSlide.style.opacity = `${1 - normalized * 0.5}`;

            if (imgBox) {
                imgBox.style.filter = `grayscale(${grayValue}%)`;
                if (glowIntensity > 0.05) {
                    imgBox.style.boxShadow = `0 0 ${glowIntensity * 35}px ${glowIntensity * 5}px ${blueGlow}`;
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

        updateStyles();

        const timeout = setTimeout(updateStyles, 50);

        return () => {
            emblaApi.off("scroll", updateStyles);
            emblaApi.off("reInit", updateStyles);
            clearTimeout(timeout);
        };
    }, [emblaApi, updateStyles]);

    return (
        <section className="py-16 md:py-24 overflow-hidden bg-background">
            <div className="container mx-auto px-4 mb-8 text-center">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6 animate-in fade-in">
                    Наши партнёры
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Работаем с <span className="text-gradient">лидерами отрасли</span>
                </h2>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-r from-background via-background/95 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-l from-background via-background/95 to-transparent z-10 pointer-events-none" />

                <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex py-20">
                        {doubledPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_65%] sm:flex-[0_0_35%] lg:flex-[0_0_22%] px-4 min-w-0"
                            >
                                <a
                                    href={partner.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-5 no-underline"
                                >
                                    <div className="img-box w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-card border border-border flex items-center justify-center p-5 overflow-hidden transition-none">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="w-full h-full object-contain pointer-events-none select-none"
                                        />
                                    </div>
                                    <span className="text-[11px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] whitespace-nowrap">
                                        {partner.name}
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;