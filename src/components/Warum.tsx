import Section from "@/components/Section";

const GRUENDE: [string, string][] = [
  [
    "Weil Wiederholungen automatisch laufen.",
    "Angebote nach deiner Preisliste, Erinnerungen, Rechnungen: Was jedes Mal gleich abläuft, bereitet der Assistent vor. Du prüfst und gibst frei.",
  ],
  [
    "Weil dein Büro Unterstützung bekommt.",
    "Der Assistent sortiert Anfragen, fragt fehlende Fotos nach und schlägt Termine vor. Die Vorarbeit ist gemacht, bevor du am Schreibtisch sitzt.",
  ],
  [
    "Weil Kunden nicht bis morgen warten.",
    "Auch abends und am Wochenende bereitet der Assistent Antworten auf Anfragen vor, per WhatsApp und E-Mail. Du gibst sie frei, wenn du Zeit hast.",
  ],
  [
    "Weil du siehst, wo dein Betrieb steht.",
    "Offene Angebote, neue Anfragen, anstehende Termine: Du siehst auf einen Blick, was läuft und was liegen geblieben ist.",
  ],
];

export default function Warum() {
  return (
    <Section id="warum" no="02" label="Warum Autopilot">
      <h2>Warum sich der Autopilot lohnt.</h2>
      <ul className="gruende">
        {GRUENDE.map(([titel, text]) => (
          <li key={titel}>
            <h3>{titel}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
