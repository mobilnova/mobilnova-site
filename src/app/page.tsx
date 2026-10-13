import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Warum from "@/components/Warum";
import Abend from "@/components/Abend";
import Arbeit from "@/components/Arbeit";
import Grundsaetze from "@/components/Grundsaetze";
import Pilot from "@/components/Pilot";
import Gruender from "@/components/Gruender";
import Faq from "@/components/Faq";
import Mehr from "@/components/Mehr";
import JsonLd from "@/components/JsonLd";
import { FAQ } from "@/content/faq";
import { absolut, SITE_NAME } from "@/lib/seo";
import { KONTAKT_MAIL, KONTAKT_NAME } from "@/lib/links";
import Final from "@/components/Final";
import Footer from "@/components/Footer";

const STRUKTURIERT = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: absolut("/"),
    logo: absolut("/logo.png"),
    email: KONTAKT_MAIL,
    founder: { "@type": "Person", name: KONTAKT_NAME },
    areaServed: "DE",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: absolut("/"),
    inLanguage: "de-DE",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "mobilnova Autopilot",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "de-DE",
    url: absolut("/"),
    description:
      "Betriebssoftware mit digitalem Assistenten für Folierer, PPF- und Aufbereitungsbetriebe in Deutschland. Pilotphase.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

export default function Home() {
  return (
    <>
      {STRUKTURIERT.map((d, i) => (
        <JsonLd key={i} daten={d} />
      ))}
      <a className="skip" href="#inhalt">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="inhalt">
        <Hero />
        <Warum />
        <Abend />
        <Arbeit />
        <Grundsaetze />
        <Pilot />
        <Gruender />
        <Faq />
        <Mehr />
        <Final />
      </main>
      <Footer />
    </>
  );
}
