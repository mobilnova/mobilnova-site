import Cta from "@/components/Cta";
import Section from "@/components/Section";

// [Situation, ohne mobilnova, mit mobilnova]. Nur Aussagen, die das Produkt heute trägt (siehe Arbeit.tsx).
const VERGLEICH: [string, string, string][] = [
  [
    "Eine Anfrage kommt abends",
    "Du antwortest morgen, zwischen zwei Aufträgen, oder gar nicht. Der Kunde wartet.",
    "Die Antwort liegt am nächsten Morgen vorbereitet in deiner Freigabe-Liste. Du prüfst sie und gibst frei.",
  ],
  [
    "Der Kunde will ein Angebot",
    "Fotos ansehen, Preisliste suchen, Text tippen.",
    "Das Angebot ist aus Fotos und deiner Preisliste vorbereitet. Die Preise rechnet die Software nach festen Regeln, nicht ein Sprachmodell.",
  ],
  [
    "Ein Termin muss gefunden werden",
    "Nachrichten hin und her, ein Blick in den Kalender, ein Tippfehler.",
    "Der Assistent schlägt einen Termin vor, du gibst ihn frei, Bestätigung und Erinnerung gehen raus.",
  ],
  [
    "Der Auftrag ist fertig",
    "Die Rechnung entsteht irgendwann am Wochenende.",
    "Sie liegt direkt nach dem Auftrag fertig da, auf Wunsch als E-Rechnung.",
  ],
  [
    "Du willst wissen, wo du stehst",
    "Zettel, WhatsApp-Verläufe und eine Excel-Liste.",
    "Eine Liste für alles: neue Anfragen, offene Angebote, anstehende Termine, offene Rechnungen.",
  ],
];

export default function Warum() {
  return (
    <Section id="warum" no="02" label="Warum mobilnova">
      <h2>
        Du arbeitest beim Kunden. <span className="acc">Das Büro läuft mit.</span>
      </h2>
      <p>
        Ein Servicebetrieb verdient sein Geld bei der Arbeit, nicht am Schreibtisch. mobilnova ist deshalb kein Werkzeug,
        das du selbst bedienen musst, sondern ein Assistent, der die Büroarbeit vorbereitet. Anfrage, Angebot, Termin,
        Rechnung: Du entscheidest, er erledigt die Vorarbeit.
      </p>
      <dl className="rows">
        {VERGLEICH.map(([lage, ohne, mit]) => (
          <div className="row" key={lage}>
            <dt>
              <span className="t">{lage}</span>
            </dt>
            <dd>
              <span className="mono faint">Ohne:</span> {ohne}
              <br />
              <span className="mono acc">Mit mobilnova:</span> {mit}
            </dd>
          </div>
        ))}
      </dl>
      <ul className="gruende">
        <li>
          <h3>Du bleibst der Chef.</h3>
          <p>
            Nichts geht ohne deine Freigabe raus. Automatik gibt es erst, wenn du sie selbst einschaltest, und deine
            Preisliste, deine Texte und deine Regeln gelten.
          </p>
        </li>
        <li>
          <h3>Du musst nichts umstellen.</h3>
          <p>
            Der Assistent arbeitet mit deiner WhatsApp-Geschäftsnummer und deinen E-Mails. Bestehende Kunden übernimmst
            du als Liste, die Einrichtung machen wir gemeinsam.
          </p>
        </li>
        <li>
          <h3>Am meisten bringt es kleinen Betrieben.</h3>
          <p>
            Wenn der Inhaber das Büro nebenbei macht, in einem Betrieb mit zwei bis zehn Leuten, ist die Vorarbeit
            des Assistenten am meisten wert.
          </p>
        </li>
      </ul>
      <Cta />
      <p className="note" style={{ marginTop: "1rem" }}>
        Pilotphase: Der Assistent ist nicht in allen Teilen fertig. Was heute läuft und was noch nicht, sagen wir dir im
        Gespräch offen.
      </p>
    </Section>
  );
}
