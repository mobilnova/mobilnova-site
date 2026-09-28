// Echte Screenshots aus dem laufenden System (Beispielbetrieb, erfundene Daten) — kein Mockup.
// Bewusst drei Ansichten, die für Aufbereiter und Folierer identisch aussehen: die Annahme
// fragt Fahrzeugfotos und Schäden ab, die Startseite zeigt Kennzahlen, das Angebots-PDF ist
// derselbe Beleg. Nur der Leistungskatalog dahinter unterscheidet sich nach Sparte, nicht die
// Oberfläche (CLAUDE.md: "ein System, Segmentspezifisches über Konfiguration").
const SCREENS: {
  step: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  label: string;
}[] = [
  {
    step: "1",
    title: "Foto rein",
    body: "Acht Pflichtfotos rundum, Schäden direkt am Fahrzeugschema markiert. Am Tablet, in unter zwei Minuten.",
    src: "/screens/screen-annahme.png",
    alt: "Fahrzeugannahme in mobilnova: acht Pflichtfotos rundum und Schadensmarkierung am Fahrzeugschema",
    label: "mobilnova.app · Fahrzeugannahme",
  },
  {
    step: "2",
    title: "Der Rest läuft von selbst",
    body: "Auftragswert, offene Aufträge, Termine und Nachpflege auf einen Blick — bei jedem Login neu.",
    src: "/screens/screen-dashboard.png",
    alt: "Startseite von mobilnova mit Auftragswert, offenen Aufträgen, Terminen und Nachpflege",
    label: "mobilnova.app · Startseite",
  },
  {
    step: "3",
    title: "Angebot raus",
    body: "Fertiges PDF mit Steuerausweis, direkt aus den erfassten Daten — kein Word, kein Nachrechnen.",
    src: "/screens/screen-angebot.png",
    alt: "Fertiges Angebot als PDF mit Positionen, Steuerausweis und Gesamtbetrag",
    label: "mobilnova.app · Angebot",
  },
];

export default function Proof() {
  return (
    <section className="border-b border-line-2">
      <div className="wrap py-16 md:py-24">
        <p className="kick">Kein Mockup</p>
        <h2 className="mt-2 max-w-[26ch] text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-[2.55rem]">
          Das ist die echte Oberfläche.
        </h2>
        <p className="mt-3 max-w-[62ch] text-lg text-muted">
          Drei Ansichten aus dem laufenden System, mit erfundenen Beispieldaten. Für Folierer und
          Aufbereiter dieselbe Software — nur der Leistungskatalog dahinter unterscheidet sich.
        </p>

        <div className="mt-10 grid items-start gap-x-8 gap-y-12 md:grid-cols-3">
          {SCREENS.map((s) => (
            <div key={s.step}>
              <div className="device">
                <div className="bar">
                  <span className="dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                  <span className="ttl">{s.label}</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={s.alt} className="block h-auto w-full" loading="lazy" />
              </div>
              <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                {s.step} · {s.title}
              </p>
              <p className="mt-1.5 text-[0.975rem] leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
