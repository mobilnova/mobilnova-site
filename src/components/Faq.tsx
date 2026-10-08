import Section from "@/components/Section";

const FAQ: [string, string][] = [
  [
    "Schreibt der Assistent einfach los?",
    "Nein. Jeder Vorschlag landet zuerst bei dir. Automatik gibt es erst, wenn du selbst auf die Stufe Automatik wechselst, weil du dem System genug vertraust.",
  ],
  [
    "Ich nutze schon eine Software. Muss ich wechseln?",
    "Nein. Der Assistent arbeitet auch neben dem, was du schon nutzt. Du musst nicht alles umwerfen, um anzufangen.",
  ],
  ["Was kostet es?", "Preis und Bedingungen besprechen wir im Pilotgespräch. Es gibt fünf Pilotplätze."],
  [
    "Brauche ich technisches Wissen oder eigene Hardware?",
    "Nein. mobilnova läuft im Browser auf Handy, Tablet und PC. Es gibt keinen Server im Büro und keine Installation. Die Einrichtung machen wir gemeinsam mit dir.",
  ],
  [
    "Was passiert mit meinen Daten, und gilt EU-Recht?",
    "Deine Daten gehören dir. Sie liegen auf Servern in den Niederlanden, getrennt von den Daten anderer Betriebe, und wir arbeiten nach DSGVO. Einzelheiten stehen in der Datenschutzerklärung.",
  ],
  [
    "Ist das nur für Folierer?",
    "Wir starten bei Folierern, PPF- und Aufbereitungsbetrieben, weil wir dort selbst arbeiten. Läuft dein Betrieb anders, sprich mit uns: Im Pilotgespräch klären wir, ob es passt.",
  ],
];

export default function Faq() {
  return (
    <Section id="fragen" no="08" label="Fragen">
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
