import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Anfang from "@/components/Anfang";
import Abend from "@/components/Abend";
import Arbeit from "@/components/Arbeit";
import Grundsaetze from "@/components/Grundsaetze";
import Weg from "@/components/Weg";
import Stand from "@/components/Stand";
import Investoren from "@/components/Investoren";
import Faq from "@/components/Faq";
import Final from "@/components/Final";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip" href="#inhalt">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="inhalt">
        <Hero />
        <Anfang />
        <Abend />
        <Arbeit />
        <Grundsaetze />
        <Weg />
        <Stand />
        <Investoren />
        <Faq />
        <Final />
      </main>
      <Footer />
    </>
  );
}
