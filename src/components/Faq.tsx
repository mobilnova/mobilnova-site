const FAQ: { q: string; a: string; open?: boolean }[] = [
  {
    q: "Was kostet Mobilnova?",
    a: "Die Preise legen wir gemeinsam mit den ersten Betrieben fest. Wer sich jetzt einträgt, ist bei der Preisgestaltung dabei und erhält Frühbucher-Konditionen.",
    open: true,
  },
  {
    q: "Wann kann ich loslegen?",
    a: "Der Kern läuft bereits im täglichen Betrieb. Wir öffnen Schritt für Schritt für weitere Betriebe — deshalb die Warteliste. Trag dich ein, und wir melden uns, sobald ein Platz frei wird.",
  },
  {
    q: "Brauche ich technisches Wissen oder eigene Hardware?",
    a: "Nein. Mobilnova läuft im Browser und auf einem gängigen Tablet — kein Server im Büro, keine Installation. Die Einrichtung machen wir gemeinsam mit dir.",
  },
  {
    q: "Was passiert mit meinen Daten?",
    a: "Deine Daten gehören dir. Sie werden sicher gespeichert, DSGVO-konform behandelt und streng von den Daten anderer Betriebe getrennt.",
  },
  {
    q: "Kann ich meine bestehenden Kunden und Leistungen übernehmen?",
    a: "Ja. Dein Leistungskatalog und deine Kundendaten lassen sich einrichten und übernehmen — das besprechen wir beim Start mit dir.",
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
