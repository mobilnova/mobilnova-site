export default function Footer() {
  return (
    <footer className="bg-sink">
      <div className="wrap py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 text-lg font-bold text-ink">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-grad text-sm font-extrabold text-white">
                M
              </span>
              Mobilnova
            </div>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
              Die Betriebssoftware für Fahrzeugaufbereiter. Entwickelt in der Praxis der Glanz
              Aufbereitung.
            </p>
          </div>

          <div>
            <b className="text-sm font-bold uppercase tracking-wide text-ink">Kontakt</b>
            <div className="mt-3 flex flex-col gap-1.5 text-[0.95rem]">
              <a className="text-accent hover:underline" href="mailto:info@glanz-aufbereitung.de">
                info@glanz-aufbereitung.de
              </a>
              <a className="text-accent hover:underline" href="#signup">
                Auf die Warteliste
              </a>
            </div>
          </div>

          <div>
            <b className="text-sm font-bold uppercase tracking-wide text-ink">Rechtliches</b>
            <div className="mt-3 flex flex-col gap-1.5 text-[0.95rem]">
              <a className="text-accent hover:underline" href="/impressum.html">
                Impressum
              </a>
              <a className="text-accent hover:underline" href="/datenschutz.html">
                Datenschutzerklärung
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Glanz Aufbereitung · Mobilnova</span>
          <span>Info- und Warteliste-Seite · noch kein Vertragsangebot</span>
        </div>
      </div>
    </footer>
  );
}
