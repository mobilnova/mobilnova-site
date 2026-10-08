import Section from "@/components/Section";

const FAQ: [string, string][] = [
  [
    "Schreibt der Assistent einfach los?",
    "Nein. Jeder Vorschlag landet zuerst bei dir. Automatik schaltest du je Ablauf selbst frei, sobald du mehrere Vorschläge in Folge unverändert freigegeben hast. Standard sind drei, die Zahl legst du fest.",
  ],
  [
    "Ich nutze schon eine Software. Muss ich wechseln?",
    "Nein. Der Assistent arbeitet auch neben dem, was du schon nutzt. Du musst nicht alles umwerfen, um anzufangen.",
  ],
  [
    "Was kostet es?",
    "Preis und Bedingungen besprechen wir im Pilotgespräch. Es gibt fünf Pilotplätze.",
  ],
  [
    "Brauche ich technisches Wissen oder eigene Hardware?",
    "Nein. mobilnova läuft im Browser auf Handy, Tablet und PC. Es gibt keinen Server im Büro und keine Installation. Die Einrichtung machen wir gemeinsam mit dir.",
  ],
  [
    "Was passiert mit meinen Daten?",
    "Deine Daten gehören dir. Sie liegen auf Servern in den Niederlanden, getrennt von den Daten anderer Betriebe. Einzelheiten stehen in der Datenschutzerklärung.",
  ],
  [
    "Ist das nur für Folierer?",
    "Wir starten bei Folierern, PPF- und Aufbereitungsbetrieben. Danach gehen wir in weitere Gewerke, sobald die Pilotzahlen stehen.",
  ],
];

export default function Faq() {
  return (
    <Section no="09" label="Fragen">
      <h2>Kurz beantwortet.</h2>
      <div className="faq">
        {FAQ.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
