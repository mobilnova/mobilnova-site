import { PILOTGESPRAECH, WARTELISTE } from "@/lib/links";

// Ein Hauptbutton (Neon), die zweite Aktion als Outline. `stelle` landet als utm_medium.
export default function Cta({ stelle }: { stelle: string }) {
  return (
    <div className="acts">
      <a className="btn" href={PILOTGESPRAECH(stelle)}>
        Pilotgespräch anfragen
      </a>
      <a className="btn btn-o" href={WARTELISTE(stelle)}>
        Auf die Warteliste
      </a>
    </div>
  );
}
