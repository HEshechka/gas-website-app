import {useEffect, useRef, useState} from "react";

const partners = [
    {name: "Даблби", logo: "/DoubleBe.jpg", link: "https://double-b.ru/"},
    {name: "Первая чайная компания", logo: "/FirstTeaCompany.jpg", link: "https://teagroup.ru/"},
    {name: "Welder Catherine", logo: "/WelderCatherine.jpg", link: "https://theweldercatherine.ru/"},
    {name: "Алефтрейд", logo: "/AlefTrade.jpg", link: "https://alephtrade.com/"},
    {name: "Колибри", logo: "/Colibri.webp", link: "https://colibricoffee.ru/"},
    {name: "Pudra", logo: "/Pudra.png", link: "https://pudracoffee.ru/"},
    {name: "Just Coffee", logo: "/JustCoffee.jpg", link: "https://justcoffee.ru/"},
    {name: "Кофейные нотки", logo: "/CoffeeNotes.jpg", link: "https://coffeenotes.ru/"},
    {name: "Лаборатория кофе", logo: "/Laboratoria.jpg", link: "https://shop.laboratoriacoffee.ru/"},
    {name: "Montana Cofee", logo: "/Montana.webp", link: "https://shop.montana.ru/"},
    {name: "RusCoffee Roasters", logo: "/RusCoffee.jpg", link: "https://ruscoffee.ru/"},
    {name: "Smart Coffee Lab.", logo: "/SmartCoffee.jpg", link: "https://smartcoffeelab.ru/"},
    {name: "Сова", logo: "/Sova.jpg", link: "https://sovaonline.ru/"},
    {name: "Teaco", logo: "/Teaco.jpg", link: "https://teaco.ru/"},
    {name: "Traveler's Coffee", logo: "/TravelsCoffee.jpg", link: "https://travelers-coffee.com/"},
];

const PartnersSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scales, setScales] = useState<number[]>(partners.map(() => 0.7));

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;

            const container = scrollRef.current;
            const containerRect = container.getBoundingClientRect();
            const centerX = containerRect.left + containerRect.width / 2;

            const items = container.querySelectorAll("[data-partner-item]");
            const newScales: number[] = [];

            items.forEach((item) => {
                const itemRect = item.getBoundingClientRect();
                const itemCenterX = itemRect.left + itemRect.width / 2;
                const distance = Math.abs(centerX - itemCenterX);
                const maxDistance = containerRect.width / 2;

                // Calculate scale based on distance from center
                const normalizedDistance = Math.min(distance / maxDistance, 1);
                const scale = 1 - normalizedDistance * 0.35; // Scale from 1 to 0.65
                const opacity = 1 - normalizedDistance * 0.5; // Opacity from 1 to 0.5

                newScales.push(scale);

                // Apply styles directly for smoother animation
                (item as HTMLElement).style.transform = `scale(${scale})`;
                (item as HTMLElement).style.opacity = `${opacity}`;
            });

            setScales(newScales);
        };

        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            // Initial calculation
            handleScroll();

            // Recalculate on window resize
            window.addEventListener("resize", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    // Scroll to center on mount
    useEffect(() => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.clientWidth;
            container.scrollLeft = (scrollWidth - clientWidth) / 2;
        }
    }, []);

    return (
        <section className="py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 mb-10">
                <div className="text-center">
          <span
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Наши партнёры
          </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Работаем с <span className="text-gradient">лидерами отрасли</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Сотрудничаем с ведущими компаниями в сфере приготовления и продажи кофе
                    </p>
                </div>
            </div>

            {/* Interactive scrollable partners panel */}
            <div className="relative">
                {/* Gradient overlays */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"/>
                <div
                    className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"/>

                {/* Scrollable container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 md:gap-10 overflow-x-auto hide-scrollbar px-[30%] py-8 cursor-grab active:cursor-grabbing"
                    style={{scrollSnapType: "x mandatory"}}
                >
                    {partners.map((partner, index) => (
                        <a
                            href={partner.link}
                            target={partner.link.startsWith('http') ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            key={partner.name}
                            data-partner-item
                            className="flex-shrink-0 flex flex-col items-center gap-4 transition-all duration-200 ease-out grayscale hover:grayscale-0"
                            style={{
                                scrollSnapAlign: "center",
                            }}
                        >
                            <div
                                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-card border border-border flex items-center justify-center group hover:border-primary/50 transition-colors">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="w-full h-full object-contain filter group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <span
                                className="text-sm md:text-base font-medium text-muted-foreground whitespace-nowrap">
                                    {partner.name}
                                </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll hint */}
            <div className="flex justify-center mt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg
                        className="w-4 h-4 animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16l-4-4m0 0l4-4m-4 4h18"
                        />
                    </svg>
                    <span>Прокрутите для просмотра</span>
                    <svg
                        className="w-4 h-4 animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
