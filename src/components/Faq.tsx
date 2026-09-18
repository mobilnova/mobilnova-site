const FAQ: { q: string; a: string; open?: boolean }[] = [
  {
    q: "Was kostet mobilnova Autopilot?",
    a: "Den geplanten Preis und die Konditionen für die fünf Pilotbetriebe findest du auf der Autopilot-Seite, zusammen mit der Warteliste.",
    open: true,
  },
  {
    q: "Schreiben die Assistenten einfach los?",
    a: "Nein. Jeder Vorschlag landet zuerst bei dir: freigeben, ändern oder ablehnen. Automatik schaltest du je Ablauf selbst frei, sobald du eine Reihe von Vorschlägen in Folge unverändert freigegeben hast (Standard: drei, die Zahl legst du fest). Preise, Beträge und Steuern rechnet immer deine Preisliste, nie die KI.",
  },
  {
    q: "Wann kann ich loslegen?",
    a: "Die Grundfunktionen (Kunden, Fahrzeugannahme, Aufträge, Rechnungen) sind gebaut. Die Assistenten entstehen im Pilot mit fünf Betrieben; die Pilotplätze sind noch frei. Wer auf der Warteliste steht, erfährt als Erstes vom Start.",
  },
  {
    q: "Ist das nur für Folierer?",
    a: "Nein. mobilnova ist für Folierer, PPF-Betriebe und Aufbereiter gebaut. Was sich unterscheidet, etwa Folienbedarf je Bauteil oder Pakete in der Aufbereitung, soll sich je Betrieb einstellen lassen; daran arbeiten wir mit den Pilotbetrieben.",
  },
  {
    q: "Brauche ich technisches Wissen oder eigene Hardware?",
    a: "Nein. mobilnova läuft im Browser auf Handy, Tablet und PC — kein Server im Büro, keine Installation. Die Einrichtung machen wir gemeinsam mit dir.",
  },
  {
    q: "Was passiert mit meinen Daten?",
    a: "Deine Daten gehören dir. Sie werden sicher gespeichert, DSGVO-konform behandelt und streng von den Daten anderer Betriebe getrennt.",
  },
];

export default function Faq() {
  return (
    <section className="border-b border-line-2 bg-panel-2">
      <div className="wrap py-16 md:py-24">
        <p className="kick">Häufige Fragen</p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-[2.55rem]">
          Kurz erklärt.
        </h2>

        <div className="mt-8 grid max-w-3xl gap-3">
          {FAQ.map((f) => (
            <details
              key={f.q}
              open={f.open}
              className="group rounded-xl border border-line bg-panel px-5 py-4 shadow-sm transition open:border-accent-line"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-accent-bg text-accent transition-transform duration-200 group-open:rotate-45">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
