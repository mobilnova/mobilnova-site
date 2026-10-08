import Section from "@/components/Section";

const ABLAUF: [string, string][] = [
  ["21:04", "Eine Anfrage kommt per WhatsApp. Drei Fotos vom Fahrzeug, eine Zeile Text: Dach und Heckklappe in Mattschwarz."],
  ["21:05", "Der Assistent liest Fotos und Nachricht, rechnet die Folie je Bauteil aus deiner Preisliste und schreibt einen Angebotsentwurf."],
  ["07:30", "Du öffnest die Freigabe-Liste vor der Werkstatt, änderst den Preis für die Dachfolie und gibst frei."],
  ["07:31", "Das Angebot geht raus, ein Terminvorschlag liegt bei."],
];

export default function Abend() {
  return (
    <Section no="03" label="Der Abend im Büro">
      <h2>Anfrage um 21 Uhr. Angebot am nächsten Morgen.</h2>
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
