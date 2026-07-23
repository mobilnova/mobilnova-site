const ALTE_WERKZEUGE = [
  "Auftragszettel",
  "Excel-Kundenliste",
  "WhatsApp-Fotos",
  "Terminbuch",
  "Rechnung in Word",
  "Schäden erklären",
  "Nachfassen vergessen",
  "Wo ist die Historie?",
];

export default function Pain() {
  return (
    <section className="border-b border-line-2 bg-panel-2">
      <div className="wrap py-16 md:py-24">
        <p className="kick">Kommt dir bekannt vor?</p>
        <h2 className="mt-2 max-w-[22ch] text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-[2.55rem]">
          Der Betrieb läuft — die Verwaltung frisst den Feierabend.
        </h2>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {ALTE_WERKZEUGE.map((w) => (
            <span
              key={w}
              className="rounded-lg border border-dashed border-line px-3 py-1.5 font-mono text-sm text-faint line-through decoration-accent-2/70"
            >
              {w}
            </span>
          ))}
        </div>

        <p className="mt-8 max-w-[56ch] text-lg font-semibold text-ink">
          Mobilnova fasst das zusammen, was heute auf fünf Werkzeuge verteilt ist —{" "}
          <b className="text-accent">ein System für den ganzen Betrieb</b>, gebaut für
          Fahrzeugaufbereitung, nicht für „irgendeine Branche".
        </p>
      </div>
    </section>
  );
}
