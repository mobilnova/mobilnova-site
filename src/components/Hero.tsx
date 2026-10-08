import Cta from "@/components/Cta";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <p className="mono mute">Für Folierer, PPF- und Aufbereitungsbetriebe</p>
        <h1 style={{ marginTop: "1.4rem" }}>
          <span>Der Betrieb läuft.</span>
          <span className="acc">Du entscheidest.</span>
        </h1>

        <div className="hero-grid">
          <div>
            <p className="lead">
              mobilnova Autopilot ist der digitale Assistent für deinen Betrieb. Er beantwortet Anfragen,
              bereitet Angebote vor, schlägt Termine vor und schreibt Rechnungen. Du siehst, was er
              vorschlägt, und gibst frei.
            </p>
            <Cta stelle="hero" />
            <p className="status mono faint">Pilotphase · fünf Pilotplätze · kein Vertragsangebot</p>
          </div>

          <figure className="shot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screens/screen-freigaben.png"
              alt="Freigabe-Ansicht in mobilnova: eine vorgeschlagene Terminerinnerung mit fertigem Betreff und Text und den Knöpfen Freigeben, Ändern, Ablehnen"
              width={2420}
              height={1460}
            />
            <figcaption className="cap mono faint">Freigabe-Ansicht, laufendes System, Beispieldaten</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
