const AUDIENCE: [string, string][] = [
  ["Fahrzeugaufbereitung", "Innen & außen, im Kundenauftrag"],
  ["Folierung & Lackschutz", "Eigene Sparte mit Serie, Finish & Bauteil"],
  ["Keramikversiegelung", "Mit automatischer Nachpflege-Erinnerung"],
  ["Mobile Aufbereiter", "Annahme & Fotos direkt vor Ort per Tablet"],
  ["Ein-Mann-Betrieb", "Schlank starten, ohne Ballast"],
  ["Wachsende Teams", "Mitarbeiter, Rollen & Zeiten mitwachsend"],
];

export default function Audience() {
  return (
    <section className="border-b border-line-2 bg-panel-2">
      <div className="wrap py-16 md:py-24">
        <p className="kick">Für wen</p>
        <h2 className="mt-2 max-w-[24ch] text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-[2.55rem]">
          Gemacht für alle, die Fahrzeuge zum Glänzen bringen.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-xl border border-line bg-panel p-6 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:border-accent-line hover:shadow-lg"
            >
              <span className="block text-lg font-bold text-ink">{title}</span>
              <span className="mt-1 block text-[0.975rem] text-muted">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
