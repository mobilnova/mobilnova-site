import Section from "@/components/Section";

const REGELN: [string, string][] = [
  [
    "Der Mensch gibt frei.",
    "Der Assistent bereitet vor, der Inhaber entscheidet. Angebote und Rechnungen gehen erst raus, wenn du sie freigibst.",
  ],
  [
    "Branchentiefe vor Breite.",
    "Wir gehen erst in ein neues Gewerk, wenn das vorige sitzt. „Sitzt“ heißt: Pilotbetriebe haben es gemessen und bleiben dabei. Danach gehen wir zügig weiter.",
  ],
  [
    "Kein Systemwechsel nötig.",
    "Der Assistent arbeitet auch neben der Software, die ein Betrieb schon nutzt. Du musst nicht alles umwerfen, um anzufangen.",
  ],
  [
    "Ehrliche Zahlen.",
    "Wir veröffentlichen nur, was Pilotbetriebe gemessen haben. Bis dahin steht bei uns „Ziel“, nicht „Ergebnis“.",
  ],
];

export default function Grundsaetze() {
  return (
    <Section id="grundsaetze" no="05" label="Grundsätze">
      <h2>Vier Regeln, an denen du uns messen kannst.</h2>
      <ol className="rules">
        {REGELN.map(([titel, text]) => (
          <li className="rule" key={titel}>
            <div style={{ gridColumn: 2 }}>
              <h3>{titel}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
