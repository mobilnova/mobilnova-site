import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Pillars from "@/components/Pillars";
import FeatureGrid from "@/components/FeatureGrid";
import ERechnung from "@/components/ERechnung";
import Audience from "@/components/Audience";
import Founder from "@/components/Founder";
import FinalCta from "@/components/FinalCta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Hero bleibt bewusst unverändert — der Betrieb mag den Digital-Annahme-Aufmacher. */}
      <Hero />
      <Pain />
      <Pillars />
      <FeatureGrid />
      <ERechnung />
      <Audience />
      <Founder />
      <FinalCta />
      <Faq />
      <Footer />
    </main>
  );
}
