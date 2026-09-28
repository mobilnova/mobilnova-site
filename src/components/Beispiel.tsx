// Zwei konkrete Beispiele aus dem Beispielbetrieb (erfundene Daten), als Beleg für zwei
// Sätze aus dem Fundament weiter oben: „Rechnungen & E-Rechnung" und „Mahnwesen/Nachpflege —
// Erinnerungen laufen automatisch". Beide Screenshots entstehen aus echten API-Aufrufen
// (Angebot -> Auftrag -> abgeschlossen -> Rechnung; Termin -> Regelwerk-Tick -> Freigabe-Karte).

function Device({ label, src, alt }: { label: string; src: string; alt: string }) {
  return (
    <div className="device">
      <div className="bar">
        <span className="dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="ttl">{label}</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block h-auto w-full" loading="lazy" />
    </div>
  );
}

export default function Beispiel() {
  return (
    <section className="border-b border-line-2 bg-panel-2">
      <div className="wrap py-16 md:py-24">
        <p className="kick">Ein Beispiel</p>
        <h2 className="mt-2 max-w-[28ch] text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-[2.55rem]">
          Von der Anfrage bis zur Rechnung — ein Kunde, ein Beispiel.
        </h2>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="kick">Schritt für Schritt im Verlauf</p>
            <h3 className="mt-2 max-w-[20ch] text-2xl font-bold leading-tight text-ink">
              Aus dem Angebot wird die Rechnung — ohne dass du es nachrechnest.
            </h3>
            <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-muted">
              Ein Kunde bringt sein Fahrzeug vorbei. Aus dem angenommenen Angebot wird ein
              Auftrag, aus dem abgeschlossenen Auftrag die Rechnung — mit eigener Nummer und
              Fälligkeitsdatum. Jeder Schritt steht im Verlauf: nachvollziehbar für dich und
              beim Steuerberater.
            </p>
          </div>
          <Device
            label="mobilnova.app · Kundenhistorie"
            src="/screens/screen-kundenhistorie.png"
            alt="Kundenhistorie mit Kennzahlen, Fahrzeug, abgeschlossenem Auftrag und ausgestellter Rechnung R-001"
          />
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Device
              label="mobilnova.app · Freigaben"
              src="/screens/screen-freigaben.png"
              alt="Freigabe-Karte mit vorgeschlagener Terminerinnerung, fertigem Betreff und Text, Knöpfen Freigeben/Ändern/Ablehnen"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="kick">Nachfassen, ohne dass du dran denken musst</p>
            <h3 className="mt-2 max-w-[22ch] text-2xl font-bold leading-tight text-ink">
              Die Terminerinnerung schreibt sich von selbst.
            </h3>
            <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-muted">
              Steht ein Termin in 12 bis 24 Stunden an und hat der Kunde noch keine Erinnerung
              bekommen, liegt Betreff und Text schon fertig für dich da — mit Fahrzeug und
              deinen Kontaktdaten. Verschickt wird erst, wenn du auf{" "}
              <b className="text-ink">Freigeben</b> tippst.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
