import { PILOTGESPRAECH } from "@/lib/links";

// Ein Hauptbutton (Neon): Pilotgespräch per E-Mail anfragen.
export default function Cta() {
  return (
    <div className="acts">
      <a className="btn" href={PILOTGESPRAECH}>
        Pilotgespräch anfragen
      </a>
    </div>
  );
}
