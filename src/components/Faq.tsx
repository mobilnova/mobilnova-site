import Section from "@/components/Section";

const FAQ: [string, string][] = [
  [
    "Schreibt der Assistent einfach los?",
    "Nein. Jeder Vorschlag landet zuerst bei dir. Automatik gibt es erst, wenn du selbst auf die Stufe Automatik wechselst, weil du dem System genug vertraust: Sie lässt sich erst nach drei unverändert freigegebenen Vorschlägen in Folge einschalten. Jede Änderung oder Ablehnung setzt den Zähler zurück und schaltet sie wieder aus. Ausschalten kannst du sie jederzeit.",
  ],
  [
    "Was, wenn der Assistent etwas falsch einschätzt?",
    "Dann siehst du es in der Freigabe, bevor etwas rausgeht: Jeder Vorschlag nennt seine Begründung, und du kannst ihn ändern oder ablehnen. Preise, Beträge, Steuern und Fristen rechnet die Software nach festen Regeln, nie das Sprachmodell. Ein Foto kann der Assistent nur einschätzen, nicht vermessen: Bei einem Lackschaden entscheidest du.",
  ],
  [
    "Was passiert, wenn ich auf „Pilotgespräch anfragen“ klicke?",
    "Du kommst auf ein kurzes Formular. Pflicht ist nur deine E-Mail-Adresse, Betrieb und Schwerpunkt sind freiwillig. Danach schreiben wir dir persönlich, um einen Termin zu finden. Bis dahin passiert nichts, und die Anfrage verpflichtet dich zu nichts, auch nicht zum Pilotpreis. Die Warteliste ist die leichtere Variante: kostenlos und unverbindlich, du bekommst nur eine Nachricht, wenn der Pilot startet und wenn Autopilot verfügbar ist.",
  ],
  [
    "Ich nutze schon eine Software. Muss ich wechseln?",
    "Nein. Der Assistent arbeitet auch neben dem, was du schon nutzt. Kunden und Fahrzeuge übernimmst du als Liste (CSV, zum Beispiel aus Excel), Rechnungen exportierst du als DATEV-Export (CSV) für den Steuerberater. Fertige Anbindungen an lexoffice, sevdesk, Bexio oder DIO gibt es heute noch nicht.",
  ],
  [
    "Läuft das auch mit Instagram?",
    "Anfragen von Instagram trägst du heute von Hand in die Anfragen-Liste ein: Nachricht kopieren, einfügen, fertig. Eine direkte Anbindung ist noch nicht gebaut. WhatsApp und E-Mail sind der Weg, auf dem der Assistent Anfragen selbst entgegennimmt.",
  ],
  [
    "Was kostet es?",
    "Der Pilot dauert drei Monate und kostet 99 € pro Monat. Danach ist ein Preis von 149 € pro Monat geplant; das ist ein geplanter Preis und noch kein Angebot. Weitere Bedingungen besprechen wir im Pilotgespräch, bevor du irgendetwas zusagst. Es gibt fünf Pilotplätze, und diese Seite ist eine Information, kein Vertragsangebot.",
  ],
  [
    "Brauche ich technisches Wissen oder eigene Hardware?",
    "Nein. mobilnova läuft im Browser auf Handy, Tablet und PC. Es gibt keinen Server im Büro und keine Installation. Die Einrichtung machen wir gemeinsam mit dir; die App führt dich in fünf Schritten zur ersten Rechnung.",
  ],
  [
    "Was passiert mit meinen Daten, und gilt EU-Recht?",
    "Deine Daten gehören dir und liegen in den Niederlanden, getrennt von den Daten anderer Betriebe. Für den Chat-Assistenten und das Auslesen von Belegen nutzen wir ein Sprachmodell von Anthropic: Dorthin gehen die jeweilige Frage samt Abfrageergebnis bzw. der Beleg, außerhalb der EU, vertraglich über Standardvertragsklauseln abgesichert. Wir arbeiten nach DSGVO; einen Auftragsverarbeitungsvertrag (AVV) bekommst du von uns. Für diese Website gilt die Datenschutzerklärung.",
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
