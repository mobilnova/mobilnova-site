const FEATURES: [string, string][] = [
  ["Kunden- & Fahrzeugkartei", "Stammdaten, Historie, Fahrzeugakte"],
  ["Digitale Fahrzeugannahme", "Geführt am Tablet, Schritt für Schritt"],
  ["Schäden am Fahrzeugschema", "Antippen statt beschreiben, 5 Ansichten"],
  ["Fotodokumentation", "Vorher/Nachher, sicher am Auftrag"],
  ["Lackdicken-Messung", "Schichtdicke je Bauteil erfassen"],
  ["Angebote & Aufträge", "Auch für mehrere Fahrzeuge"],
  ["Rechnungen & E-Rechnung", "Im eigenen Layout, gesetzeskonform"],
  ["Kartenzahlung per Link", "Kunde zahlt bequem online"],
  ["Mahnwesen", "Erinnerungen laufen automatisch"],
  ["Kalender & Stellplätze", "Tages-, Wochen- & Monatsansicht"],
  ["Online-Terminanfragen", "Von deiner Website direkt ins System"],
  ["Mitarbeiter & Zeiten", "Zeiterfassung und Stundenkonto"],
  ["Material & Lager", "Bestand und Materialkosten je Auftrag"],
  ["Nachpflege-Erinnerung", "Automatisch nach der Versiegelung"],
  ["Berichte & Umsatz", "Auslastung und Zahlen auf einen Blick"],
  ["Newsletter & Aktionen", "Mit Einwilligung, rechtssicher"],
  ["Cloud & Tablet", "Ohne Server im Büro, überall dabei"],
];

export default function FeatureGrid() {
  return (
    <section className="border-b border-line-2 bg-panel-2">
      <div className="wrap py-16 md:py-24">
        <p className="kick">Das Fundament</p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-[2.55rem]">
          Was heute schon im System steckt.
        </h2>
        <p className="mt-3 max-w-[60ch] text-lg text-muted">
          Darauf bauen die Assistenten auf. Jede Funktion ist für den Werkstattalltag von Folierern
          und Aufbereitern gebaut.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([title, desc]) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-lg border border-line bg-panel p-4 transition duration-150 hover:border-accent-line hover:bg-panel-2"
            >
              <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-good-bg text-good">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12l5 5L20 6" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold text-ink">{title}</span>
                <span className="mt-0.5 block text-sm text-muted">{desc}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
