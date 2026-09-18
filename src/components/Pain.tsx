const ALTE_WERKZEUGE = [
  "Angebot abends am Küchentisch",
  "Folie pro Bauteil ausrechnen",
  "WhatsApp während der Arbeit",
  "Rückruf vergessen",
  "Terminbuch",
  "Rechnung in Word",
  "Anzahlung hinterherlaufen",
  "Nachfassen vergessen",
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

        <p className="mt-8 max-w-[58ch] text-lg font-semibold text-ink">
          mobilnova Autopilot soll dir diese Arbeit abnehmen. Deine Assistenten bereiten vor,{" "}
          <b className="text-accent">du gibst nur frei</b>. Unser Ziel: unter vier Stunden Büro pro
          Woche statt zehn bis fünfzehn.
        </p>
      </div>
    </section>
  );
}
