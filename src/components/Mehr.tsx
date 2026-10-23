import Section from "@/components/Section";

const LINKS: [string, string, string][] = [
  ["/branchen/", "Für welche Gewerke", "Ein Ablauf, ein Branchenpaket je Gewerk, und wo wir heute stehen."],
  ["/folierer/", "Software für Folierer und PPF-Betriebe", "Angebot nach Bauteilen, Folienlager, Annahme und Rechnung."],
  ["/aufbereiter/", "Software für Autoaufbereiter", "Zustandsprotokoll, Angebot, Termin und Rechnung."],
  ["/ratgeber/", "Ratgeber", "Angebot kalkulieren, Annahme dokumentieren, Folienrollen verwalten, E-Rechnung."],
];

export default function Mehr() {
  return (
    <Section id="mehr" no="10" label="Mehr lesen">
      <h2>Für deinen Betrieb im Detail.</h2>
      <ul className="mehr">
        {LINKS.map(([href, titel, text]) => (
          <li key={href}>
            <a href={href}>
              <strong>{titel}</strong>
            </a>
            <p style={{ marginTop: "0.3rem" }}>{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
