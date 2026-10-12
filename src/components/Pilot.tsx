import Cta from "@/components/Cta";
import Section from "@/components/Section";

const ABLAUF: [string, string][] = [
  [
    "Gespräch",
    "Wir schreiben dich persönlich an und finden einen Termin. Im Gespräch klären wir, ob der Assistent zu deinem Betrieb passt, und besprechen die Bedingungen.",
  ],
  [
    "Preis",
    "Der Pilot dauert drei Monate und kostet 99 € pro Monat. Danach ist ein Preis von 149 € pro Monat geplant, das ist noch kein Angebot. Alle Preise zuzüglich gesetzlicher Umsatzsteuer.",
  ],
  [
    "Einrichtung",
    "Wir richten alles gemeinsam mit dir ein. In der App führt dich eine Karte in fünf Schritten zur ersten Rechnung: Betriebsdaten, Leistungskatalog, erster Kunde, erstes Fahrzeug, erste Rechnung. Bestehende Kunden und Fahrzeuge übernimmst du als Liste.",
  ],
  ["Start", "Du startest mit Freigabe für jeden Vorschlag. Funktionen schalten wir Schritt für Schritt frei."],
  [
    "Stand heute",
    "Die Betriebsverwaltung läuft. Einzelne Funktionen des Assistenten sind noch im Aufbau. Welche, sagen wir dir im Gespräch offen.",
  ],
];

export default function Pilot() {
  return (
    <Section id="pilot" no="06" label="Pilot">
      <h2>
        Sei einer von <span className="acc">fünf Pilotbetrieben.</span>
      </h2>
      <p>
        Wir suchen fünf Betriebe, die den Autopiloten mit uns im Alltag testen. Im Pilotgespräch klären wir, ob der
        Assistent zu deinem Betrieb passt.
      </p>
      <dl className="rows">
        {ABLAUF.map(([titel, text]) => (
          <div className="row" key={titel}>
            <dt>
              <span className="t">{titel}</span>
            </dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
      <Cta stelle="mitte" />
      <p className="note" style={{ marginTop: "1rem" }}>
        Pilotgespräch: Du gibst deine E-Mail-Adresse an (Betrieb und Schwerpunkt sind freiwillig), wir schreiben dir
        persönlich. Bis dahin passiert nichts. Warteliste: kostenlos und unverbindlich, du bekommst nur eine Nachricht,
        wenn der Pilot startet und wenn Autopilot verfügbar ist.
      </p>
      <p className="note">Pilotphase · kein Vertragsangebot</p>
    </Section>
  );
}
