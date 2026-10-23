import Section from "@/components/Section";

const GEWERKE: [string, string, string][] = [
  [
    "Fahrzeugaufbereitung und Detailing",
    "Im Pilot",
    "Zustandsprotokoll bei der Annahme, Leistungskatalog nach Fahrzeuggröße, Erinnerung an die Nachpflege.",
  ],
  [
    "Folierung, PPF und Lackschutz",
    "Im Pilot",
    "Angebot nach Bauteilen, Folienlager mit Rollenrest, Garantie mit Charge.",
  ],
  [
    "Fensterreinigung und Gebäudereinigung",
    "In Vorbereitung",
    "Derselbe Ablauf. Geplant sind Preise nach Fläche oder Einsatz und wiederkehrende Einsätze. Noch nicht im Pilot.",
  ],
];

export default function Branchen() {
  return (
    <Section id="branchen" no="03" label="Für welche Gewerke">
      <h2>Ein Ablauf. Viele Gewerke.</h2>
      <p>
        Bei Dienstleistern läuft das Büro fast immer gleich: Eine Anfrage kommt rein, es gibt ein Angebot und einen
        Termin, die Arbeit passiert beim Kunden, danach kommt die Rechnung. mobilnova bildet diesen Ablauf einmal ab.
        Was sich von Gewerk zu Gewerk unterscheidet, steht in einem eigenen Branchenpaket: Leistungen, Preiseinheiten,
        Angaben zum Objekt und Textvorlagen.
      </p>
      <dl className="rows">
        {GEWERKE.map(([titel, stand, text]) => (
          <div className="row" key={titel}>
            <dt>
              <span className="t">{titel}</span>
              <span className="mono faint">{stand}</span>
            </dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
      <p className="note">
        Stand heute läuft der Pilot mit Betrieben aus der Fahrzeugpflege. Weitere Gewerke kommen nacheinander dazu. Ist
        dein Gewerk nicht dabei, schreib uns: Oft ist der Ablauf derselbe.{" "}
        <a href="/branchen/">Mehr zu den Gewerken</a>
      </p>
    </Section>
  );
}
