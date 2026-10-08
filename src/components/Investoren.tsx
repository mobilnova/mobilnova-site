import Section from "@/components/Section";
import { KONTAKT_MAIL } from "@/lib/links";

export default function Investoren() {
  return (
    <Section no="07" label="Für Investoren und Interessierte">
      <h2>Was mobilnova macht.</h2>
      <p>
        mobilnova baut den digitalen Assistenten für Betriebe. Er beantwortet Kundenanfragen über WhatsApp und
        E-Mail, bereitet Angebote und Termine vor und erzeugt E-Rechnungen. Der Inhaber gibt frei und wechselt
        erst auf die Stufe Automatik, wenn er dem System vertraut. Die Basis ist eine Betriebsverwaltung für
        Folierer, PPF- und Aufbereitungsbetriebe, entwickelt von einem Gründer, der selbst einen
        Aufbereitungsbetrieb führt. mobilnova ist in der Pilotphase. Für ein Gespräch schreib an{" "}
        <a href={`mailto:${KONTAKT_MAIL}`}>{KONTAKT_MAIL}</a>.
      </p>
    </Section>
  );
}
