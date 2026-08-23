import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://1gazovshik.ru"),
  title: "Первый Газовщик — Газификация домов и предприятий в Москве | 15+ лет опыта",
  description:
    "Компания Первый Газовщик предоставляет услуги по газификации загородных домов и предприятий в Москве и МО. 15+ лет опыта, 12000+ выполненных работ. Бесплатная консультация!",
  keywords: [
    "газификация",
    "газоснабжение",
    "подключение газа",
    "газификация дома",
    "газификация предприятия",
    "монтаж газопровода",
    "сварочные работы",
    "Москва",
  ],
  alternates: { canonical: "https://1gazovshik.ru" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://1gazovshik.ru",
    siteName: "Первый Газовщик",
    title: "Первый Газовщик — Газификация домов и предприятий",
    description:
      "Профессиональная газификация в Москве и МО. 15+ лет опыта, гарантия качества. Звоните: +7 (495) 749-29-25",
    images: [{ url: "/hero-bg.jpg", width: 1200, height: 630, alt: "Первый Газовщик" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Первый Газовщик — Газификация домов и предприятий",
    description: "Профессиональная газификация в Москве и МО. 15+ лет опыта, гарантия качества.",
    images: ["/hero-bg.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "hsl(220 20% 7%)",
  width: "device-width",
  initialScale: 1,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://1gazovshik.ru/#organization",
      name: "Первый Газовщик",
      description:
        "Газификация домов, коммерческих и промышленных объектов в Москве и Московской области",
      url: "https://1gazovshik.ru",
      telephone: "+7 (495) 749-29-25",
      email: "7492925@mail.ru",
      image: "/hero-bg.jpg",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Москва",
        addressRegion: "Московская область",
        addressCountry: "RU",
      },
      geo: { "@type": "GeoCoordinates", latitude: 55.7558, longitude: 37.6173 },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: 55.7558, longitude: 37.6173 },
        geoRadius: "100000",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "11:00",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "11:00",
          closes: "21:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://1gazovshik.ru/#website",
      url: "https://1gazovshik.ru",
      name: "Первый Газовщик",
      description: "Газификация домов и предприятий в Москве",
      inLanguage: "ru",
      publisher: { "@id": "https://1gazovshik.ru/#organization" },
    },
    {
      "@type": "Service",
      serviceType: "Газификация домов и предприятий",
      provider: { "@type": "LocalBusiness", "@id": "https://1gazovshik.ru/#organization" },
      areaServed: { "@type": "AdministrativeArea", name: "Москва и Московская область" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги по газификации",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Настройка и подключение ростеров" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Газификация предприятия" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Газификация загородного дома" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Сварочные работы" } },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="font-sans">
      <body className="bg-background text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        {children}
      </body>
    </html>
  );
}
