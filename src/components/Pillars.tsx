import { AUTOPILOT } from "@/lib/links";

type Pillar = {
  no: string;
  title: string;
  body: string;
  points: string[];
};

// 01–04 beschreiben die Assistenten, die mit den Pilotbetrieben entstehen (Fahrplan Phase 2).
// 05 ist das Fundament, das heute schon läuft. Nichts hier behaupten, was noch nicht gebaut ist,
// ohne es als geplant zu kennzeichnen (Überschrift der Karte unten).
const PILLARS: Pillar[] = [
  {
    no: "01",
    title: "Angebot aus Fotos",
    body:
      "Dein Kunde schickt Fotos und sagt, was er will. Dein Angebots-Assistent erstellt daraus das Angebot mit Folienbedarf je Bauteil und Arbeitszeit.",
    points: ["Material je Bauteil kalkuliert", "Preise aus deiner Preisliste", "Du änderst und gibst frei"],
  },
  {
    no: "02",
    title: "Anfragen beantwortet",
    body:
      "Die Anfrage kommt abends oder während du am Auto stehst. Dein Anfrage-Assistent beantwortet Standardfragen, fordert fehlende Fotos an und schlägt Termine vor.",
    points: ["Auch auf WhatsApp", "Fehlende Angaben werden nachgefragt", "Du übernimmst jederzeit"],
  },
  {
    no: "03",
    title: "Termin und Rechnung",
    body:
      "Nach deiner Freigabe gehen Terminbestätigung und Erinnerung von selbst raus. Nach dem Auftrag liegt die Rechnung fertig da, auf Wunsch als E-Rechnung.",
    points: ["Anzahlung und Schlussrechnung", "Erinnerung an Termin und Zahlung", "E-Rechnung (XRechnung/ZUGFeRD)"],
  },
  {
    no: "04",
    title: "Du gibst nur frei",
    body:
      "Jeder Vorschlag landet zuerst bei dir. Automatik schaltest du je Ablauf selbst frei, sobald du eine Reihe von Vorschlägen in Folge unverändert freigegeben hast (Standard: drei).",
    points: ["Freigeben, ändern oder ablehnen", "Automatik je Ablauf schaltbar", "Du siehst, was erledigt wurde"],
  },
  {
    no: "05",
    title: "Das Fundament steht",
    body:
      "Kunden, Fahrzeuge, Annahme mit Fotos, Aufträge und Rechnungen laufen schon heute im System. Die Assistenten bauen darauf auf.",
    points: ["Annahme am Tablet mit Unterschrift", "Aufträge und Kalender", "Getrennte Daten je Betrieb"],
  },
];

export default function Pillars() {
  return (
    <section id="assistenten" className="border-b border-line-2">
      <div className="wrap py-16 md:py-24">
        <p className="kick">So sollen deine Assistenten arbeiten</p>
        <h2 className="mt-2 max-w-[22ch] text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-[2.55rem]">
          Sie bereiten vor. Du entscheidest.
        </h2>
        <p className="mt-3 max-w-[60ch] text-lg text-muted">
          Die Assistenten 01–04 bauen wir als Nächstes, zusammen mit fünf Pilotbetrieben. Die
          Pilotplätze sind noch frei. Das Fundament (05) läuft schon.
        </p>

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
              <p className="text-lg font-bold text-accent-3">Fünf Pilotplätze.</p>
              <p className="mt-2 text-[0.975rem] leading-relaxed text-muted">
                Pilotbetriebe nutzen die Assistenten als Erste und bestimmen mit, was zuerst gebaut
                wird. Preis, Pilotplätze und Warteliste stehen auf einer Seite.
              </p>
              <a
                href={AUTOPILOT("assistenten")}
                className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-grad px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
              >
                Preis &amp; Pilotplätze →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
