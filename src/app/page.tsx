import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Warum from "@/components/Warum";
import Abend from "@/components/Abend";
import Arbeit from "@/components/Arbeit";
import Grundsaetze from "@/components/Grundsaetze";
import Pilot from "@/components/Pilot";
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
        <Warum />
        <Abend />
        <Arbeit />
        <Grundsaetze />
        <Pilot />
        <Investoren />
        <Faq />
        <Final />
      </main>
      <Footer />
    </>
  );
}
