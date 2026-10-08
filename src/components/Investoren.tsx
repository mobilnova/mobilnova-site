import Section from "@/components/Section";
import { KONTAKT_MAIL } from "@/lib/links";

export default function Investoren() {
  return (
    <Section no="08" label="Für Investoren und Partner">
      <h2>Ein Muster, viele Gewerke.</h2>
      <p>
        mobilnova baut den digitalen Assistenten für kleine Betriebe. Wir beginnen in der
        Fahrzeugveredelung, weil wir den Alltag dort aus eigener Hand kennen, und beweisen dort, dass der
        Assistent Büroarbeit abnimmt. Danach übertragen wir das Muster zügig auf weitere Branchen und
        Länder. Allein das Handwerk zählt in Deutschland rund 1 Million Betriebe (
        <a href="https://www.zdh-statistik.de/application/index.php?mID=3&cID=965" target="_blank" rel="noopener">
          ZDH, Stand 31.12.2025
        </a>
        ).
      </p>
      <p>
        Was wir zeigen, bevor wir skalieren: Bürostunden pro Woche, Antwortzeit auf Anfragen, den Anteil
        unverändert freigegebener Entwürfe und die Quote der Betriebe, die nach dem Pilot dabeibleiben.
      </p>
      <p>
        Wenn du mit uns über Strategie, Finanzierung oder Partnerschaft sprechen willst, schreib an{" "}
        <a href={`mailto:${KONTAKT_MAIL}`}>{KONTAKT_MAIL}</a>.
      </p>
    </Section>
  );
}
