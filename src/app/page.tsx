import About from "@/components/About";
import Contact from "@/components/Contact";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="noise relative min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
