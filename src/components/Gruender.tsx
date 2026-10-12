import Section from "@/components/Section";
import { KONTAKT_MAIL, KONTAKT_NAME, KONTAKT_TELEFON, KONTAKT_TELEFON_LINK } from "@/lib/links";

export default function Gruender() {
  return (
    <Section id="wer" no="07" label="Wer dahintersteht">
      <h2>Wer dahintersteht.</h2>
      <p>
        mobilnova entwickelt {KONTAKT_NAME}, der selbst einen Aufbereitungsbetrieb führt. Die Basis ist eine
        Betriebsverwaltung für Folierer, PPF- und Aufbereitungsbetriebe; darauf setzt der Assistent auf. mobilnova ist
        in der Pilotphase.
      </p>
      <p style={{ marginTop: "1rem" }}>
        Du erreichst uns direkt: <a href={KONTAKT_TELEFON_LINK}>{KONTAKT_TELEFON}</a> oder{" "}
        <a href={`mailto:${KONTAKT_MAIL}`}>{KONTAKT_MAIL}</a>. Anschrift und weitere Angaben stehen im{" "}
        <a href="/impressum.html">Impressum</a>. Auch Investoren und Partner schreiben uns an dieselbe Adresse.
      </p>
    </Section>
  );
}
