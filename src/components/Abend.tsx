import Section from "@/components/Section";

const ABLAUF: [string, string][] = [
  [
    "20:30",
    "Zwei Anfragen kommen rein. Per E-Mail fragt ein Kunde nach einem Termin. Per WhatsApp schickt ein anderer ein Foto von einem Lackschaden und fragt, ob sich das reparieren lässt.",
  ],
  [
    "20:31",
    "Der Assistent liest beide Nachrichten und das Foto, schaut in deinen Kalender und deine Preisliste und bereitet alles vor: Terminvorschlag, Angebot für die Reparatur und zwei Antworten.",
  ],
  ["07:30", "Du öffnest die Freigabe-Liste vor der Werkstatt, änderst bei Bedarf einen Preis und gibst frei."],
  ["07:31", "Angebot, Terminplanung und Antworten gehen raus."],
];

export default function Abend() {
  return (
    <Section no="03" label="Der Abend im Büro">
      <h2>Anfrage um 20:30. Antwort am nächsten Morgen.</h2>
      <p>
        So soll ein Abend aussehen, wenn der Assistent mitläuft. Ein Beispiel, noch nicht im Pilot gemessen.
      </p>
      <dl className="rows">
        {ABLAUF.map(([zeit, text]) => (
          <div className="row" key={zeit}>
            <dt className="mono">{zeit}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
