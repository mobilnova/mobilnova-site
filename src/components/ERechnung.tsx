const POINTS = [
  "E-Rechnung erstellen (XRechnung & ZUGFeRD)",
  "Eingehende E-Rechnungen automatisch einlesen",
  "Rechnung im Layout deines Betriebs, mit Logo",
  "Kleinunternehmer-Regelung (§19) berücksichtigt",
  "Zahlung per Kartenlink & automatische Erinnerung",
];

export default function ERechnung() {
  return (
    <section className="border-b border-line-2">
      <div className="wrap py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="kick">Rechtssicher ab Tag eins</p>
            <h2 className="mt-2 max-w-[16ch] text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-[2.55rem]">
              E-Rechnung ist Pflicht — <span className="text-accent">bei uns schon eingebaut.</span>
            </h2>
            <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted">
              Betriebe müssen elektronische Rechnungen empfangen und zunehmend selbst ausstellen
              können. Mobilnova erstellt und liest sie im geforderten Format — ohne Zusatzsoftware,
              ohne Aufpreis. Du musst dich um nichts kümmern.
            </p>
          </div>

          <div className="rounded-xl border border-accent-line bg-accent-bg/60 p-6 shadow-sm md:p-8">
            <ul className="space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-ink">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-good text-white">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                  </span>
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
