import Cta from "@/components/Cta";
import Section from "@/components/Section";

export default function Stand() {
  return (
    <Section id="stand" no="07" label="Stand heute">
      <h2>Pilotphase. Das läuft, das kommt.</h2>
      <dl className="rows">
        <div className="row">
          <dt className="mono" style={{ color: "var(--neon)" }}>Läuft</dt>
          <dd>
            E-Rechnung und ein Foto-Annahmeprotokoll. Dazu das Fundament: Kunden, Fahrzeuge, Aufträge,
            Kalender und Rechnungen.
          </dd>
        </div>
        <div className="row">
          <dt className="mono">In Arbeit</dt>
          <dd>Der Assistent mit WhatsApp auf deiner bestehenden Geschäftsnummer, Angebote aus Fotos und Terminvorschläge.</dd>
        </div>
        <div className="row">
          <dt className="mono faint">Ziel, noch nicht gemessen</dt>
          <dd>
            Unter 4 Stunden Büro pro Woche statt 10 bis 15. Sobald Pilotbetriebe es gemessen haben, stehen
            hier ihre Zahlen.
          </dd>
        </div>
      </dl>
      <p style={{ marginTop: "2rem" }}>
        Wir vergeben fünf Pilotplätze. Preis und Bedingungen besprechen wir im Pilotgespräch.
      </p>
      <Cta stelle="stand" />
      <p className="note">Das ist kein Vertragsangebot.</p>
    </Section>
  );
}
