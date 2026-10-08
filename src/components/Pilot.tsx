import Cta from "@/components/Cta";
import Section from "@/components/Section";

export default function Pilot() {
  return (
    <Section id="pilot" no="06" label="Pilot">
      <h2>
        Sei einer von <span className="acc">fünf Pilotbetrieben.</span>
      </h2>
      <p>
        Wir suchen fünf Betriebe, die den Autopiloten mit uns im Alltag testen. Wir richten alles
        gemeinsam mit dir ein und schalten Funktionen Schritt für Schritt frei. Im Pilotgespräch klären wir,
        ob der Assistent zu deinem Betrieb passt.
      </p>
      <Cta stelle="mitte" />
      <p className="note">Pilotphase · kein Vertragsangebot</p>
    </Section>
  );
}
