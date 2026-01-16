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

            const isMobile = window.innerWidth < 768;
            const focusWidth = isMobile ? 80 : 150;
            const maxDistance = isMobile ? containerRect.width / 2 : containerRect.width / 2.5;

            const offsetDistance = Math.max(0, distance - focusWidth);
            const normalized = Math.min(offsetDistance / (maxDistance - focusWidth), 1);

            const glowIntensity = Math.pow(Math.max(0, 1 - normalized), isMobile ? 1.5 : 2);
            const grayValue = Math.min(normalized * (isMobile ? 80 : 100), 100); // Меньше серого на мобильных

            const blueGlow = `rgba(59, 130, 246, ${glowIntensity * 0.7})`;
            const blueBorder = `rgba(59, 130, 246, ${glowIntensity})`;

            const htmlSlide = slide as HTMLElement;
            const imgBox = htmlSlide.querySelector(".img-box") as HTMLElement;

            const scale = 1 - normalized * (isMobile ? 0.1 : 0.15);
            const opacity = 1 - normalized * (isMobile ? 0.3 : 0.5);

            htmlSlide.style.transform = `scale(${scale})`;
            htmlSlide.style.opacity = `${opacity}`;

            if (imgBox) {
                imgBox.style.filter = `grayscale(${grayValue}%)`;
                if (glowIntensity > 0.05) {
                    const shadowSize = isMobile ? glowIntensity * 20 : glowIntensity * 35;
                    imgBox.style.boxShadow = `0 0 ${shadowSize}px ${glowIntensity * 3}px ${blueGlow}`;
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

        const handleScroll = () => {
            requestAnimationFrame(updateStyles);
        };

        emblaApi.on("scroll", handleScroll);
        emblaApi.on("reInit", updateStyles);

        updateStyles();

        // Обработчик ресайза
        const handleResize = () => {
            updateStyles();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            emblaApi.off("scroll", handleScroll);
            emblaApi.off("reInit", updateStyles);
            window.removeEventListener("resize", handleResize);
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
                    <div className="flex py-10 md:py-20">
                        {doubledPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="text-12 flex-[0_0_35%] sm:flex-[0_0_30%] lg:flex-[0_0_22%] px-2 md:px-4 min-w-0"
                            >
                                <a
                                    href={partner.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-4 md:gap-5 no-underline"
                                >
                                    <div className="img-box w-20 h-20 md:w-36 md:h-36 rounded-xl md:rounded-2xl bg-card border border-border flex items-center justify-center p-3 md:p-5 overflow-hidden transition-none"> {/* Меньше размер на мобильных */}
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="w-full h-full object-contain pointer-events-none select-none"
                                        />
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
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