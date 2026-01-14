import {useEffect, useRef} from "react";

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

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;

            const container = scrollRef.current;
            const containerRect = container.getBoundingClientRect();
            const centerX = containerRect.left + containerRect.width / 2;
            const items = container.querySelectorAll("[data-partner-item]");

            items.forEach((item) => {
                const itemRect = item.getBoundingClientRect();
                const itemCenterX = itemRect.left + itemRect.width / 2;
                const distance = Math.abs(centerX - itemCenterX);

                const maxDistance = containerRect.width / 2;
                const normalizedDistance = Math.min(distance / maxDistance, 1);

                const scale = 1 - normalizedDistance * 0.3;
                const opacity = 1 - normalizedDistance * 0.5;
                const grayValue = Math.min(distance / 1.5, 100);

                const glowIntensity = Math.pow(Math.max(0, 1 - distance / (containerRect.width / 3.5)), 2);

                const blueGlow = `rgba(59, 130, 246, ${glowIntensity * 0.6})`;
                const blueBorder = `rgba(59, 130, 246, ${glowIntensity})`;

                const htmlItem = item as HTMLElement;
                const imgBox = htmlItem.querySelector('.img-box') as HTMLElement;

                htmlItem.style.transform = `scale(${scale})`;
                htmlItem.style.opacity = `${opacity}`;

                if (imgBox) {
                    imgBox.style.filter = `grayscale(${grayValue}%)`;

                    if (glowIntensity > 0.05) {
                        imgBox.style.boxShadow = `0 0 ${glowIntensity * 25}px ${glowIntensity * 4}px ${blueGlow}`;
                        imgBox.style.borderColor = blueBorder;
                    } else {
                        imgBox.style.boxShadow = 'none';
                        imgBox.style.borderColor = '';
                    }
                }
            });
        };

        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll, { passive: true });
            handleScroll();
            window.addEventListener("resize", handleScroll);
        }
        return () => {
            if (container) container.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
        }
    }, []);

    return (
        <section className="py-16 md:py-24 overflow-hidden bg-background">
            <div className="container mx-auto px-4 mb-10 text-center">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6 animate-in fade-in duration-700">
                    Наши партнёры
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Работаем с <span className="text-gradient">лидерами отрасли</span>
                </h2>
            </div>

            <div className="relative">
                {/* Маски */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-background via-background/60 to-transparent z-10 pointer-events-none"/>
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-background via-background/60 to-transparent z-10 pointer-events-none"/>

                <div
                    ref={scrollRef}
                    className="flex gap-4 md:gap-10 overflow-x-auto hide-scrollbar px-[40%] py-16 cursor-grab active:cursor-grabbing"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {partners.map((partner, index) => (
                        <a
                            href={partner.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={partner.name}
                            data-partner-item
                            className="flex-shrink-0 flex flex-col items-center gap-4 opacity-0 animate-in fade-in fill-mode-forwards"
                            style={{
                                scrollSnapAlign: "center",
                                animationDelay: `${0.5 + index * 0.05}s`
                            }}
                        >
                            <div className="img-box w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-card border border-border flex items-center justify-center p-4 overflow-hidden">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="w-full h-full object-contain pointer-events-none select-none"
                                />
                            </div>
                            <span className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                                {partner.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;