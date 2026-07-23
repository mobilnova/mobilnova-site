type Pillar = {
  no: string;
  title: string;
  body: string;
  points: string[];
};

const PILLARS: Pillar[] = [
  {
    no: "01",
    title: "Annahme direkt am Fahrzeug",
    body:
      "Zustand, Lackdicke, Schäden und Fotos am Tablet erfassen — mit Unterschrift des Kunden. Klare Beweislage, kein Streit hinterher.",
    points: ["Schaden-Marker aufs Fahrzeug", "Fotos & Lackmessung", "Digitale Unterschrift"],
  },
  {
    no: "02",
    title: "Angebot, Auftrag, Rechnung",
    body:
      "Aus der Annahme wird per Klick ein Angebot, daraus ein Auftrag und am Ende die Rechnung — inklusive E-Rechnung nach Vorgabe.",
    points: ["Ein Klick statt Copy-Paste", "E-Rechnung (ZUGFeRD/XRechnung)", "Sammelrechnung für B2B"],
  },
  {
    no: "03",
    title: "Der ganze Betrieb, geplant",
    body:
      "Termine, Status und Auslastung auf einen Blick. Vom Eingang bis zur Abholung weißt du jederzeit, wo jedes Fahrzeug steht.",
    points: ["Termin- & Kapazitätsplanung", "Status-Board je Fahrzeug", "Nichts geht mehr unter"],
  },
  {
    no: "04",
    title: "Aus Kunden werden Stammkunden",
    body:
      "Historie je Fahrzeug und Kunde, automatische Erinnerungen und Nachfass-Anlässe — damit die nächste Aufbereitung wieder bei dir landet.",
    points: ["Fahrzeug- & Kundenakte", "Erinnerungen & Anlässe", "Weniger Aufwand, mehr Wiederkehr"],
  },
  {
    no: "05",
    title: "Überall dabei, immer sicher",
    body:
      "Läuft im Browser auf Tablet, Handy und PC. Deine Daten liegen DSGVO-konform in Deutschland — nichts geht verloren.",
    points: ["Tablet, Handy & Desktop", "DSGVO-konform, Server in DE", "Automatische Sicherung"],
  },
];

export default function Pillars() {
  return (
    <section id="funktionen" className="border-b border-line-2">
      <div className="wrap py-16 md:py-24">
        <p className="kick">Ein System, fünf Baustellen weniger</p>
        <h2 className="mt-2 max-w-[20ch] text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-[2.55rem]">
          Von der Annahme bis zum Stammkunden — durchgängig.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <article
              key={p.no}
              className="group relative overflow-hidden rounded-xl border border-line bg-panel p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent-line hover:shadow-lg"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-grad opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-bg font-mono text-sm font-bold text-accent ring-1 ring-accent-line">
                  {p.no}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-[0.975rem] leading-relaxed text-muted">{p.body}</p>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink">
                    <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-good-bg text-[10px] font-bold text-good">
                      ✓
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="grid place-items-center rounded-xl border border-dashed border-accent-line bg-accent-bg/50 p-6 text-center">
            <div>
              <p className="text-lg font-bold text-accent-3">Alles greift ineinander.</p>
              <p className="mt-2 text-[0.975rem] leading-relaxed text-muted">
                Keine Insellösungen, keine doppelte Erfassung. Ein Datenstand für den ganzen Betrieb.
              </p>
              <a
                href="#signup"
                className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-grad px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
              >
                Warteliste sichern →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
