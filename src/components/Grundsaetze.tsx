import Section from "@/components/Section";

const REGELN: [string, string][] = [
  ["Der Mensch gibt frei.", "Der Assistent bereitet vor, der Inhaber entscheidet. Jeder Vorschlag landet zuerst bei dir."],
  [
    "Automatik, wenn du sie willst.",
    "Du startest mit Freigabe für jeden Vorschlag. Wenn du dem System genug vertraust, wechselst du selbst auf die Stufe Automatik.",
  ],
  [
    "Gebaut für EU-Recht und deine Daten.",
    "Deine Daten gehören dir und sind von denen anderer Betriebe getrennt. Wir bauen nach DSGVO, und Rechnungen folgen dem europäischen Standard für die E-Rechnung.",
  ],
  [
    "Dein Betrieb, deine Regeln.",
    "Preisliste, Texte und Abläufe legst du fest. Der Assistent hält sich daran und rechnet Preise, Steuern und Fristen nach festen Regeln.",
  ],
];

export default function Grundsaetze() {
  return (
    <Section id="grundsaetze" no="05" label="Grundsätze">
      <h2>Vier Regeln, an denen du uns messen kannst.</h2>
      <p className="mission-line">Wir nehmen Betriebsinhabern die Büroarbeit ab, ohne ihnen die Kontrolle zu nehmen.</p>
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
