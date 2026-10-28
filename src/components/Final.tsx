import Cta from "@/components/Cta";

export default function Final() {
  return (
    <section className="sec final">
      <div className="wrap">
        <h2>
          Sprich mit uns, <span className="acc">bevor du entscheidest.</span>
        </h2>
        <p style={{ marginTop: "1.4rem", maxWidth: "34rem", color: "#d4dbe0" }}>
          Fünf Pilotplätze für Aufbereiter und Folierer. Im Pilotgespräch klären wir, ob der Assistent zu deinem Betrieb
          passt.
        </p>
        <Cta />
        <p className="note" style={{ marginTop: "1rem" }}>
          Du schreibst uns eine E-Mail, wir antworten dir persönlich, bis dahin passiert nichts. Der Pilot dauert zwei
          Monate und kostet einmalig 99 € zzgl. USt.
        </p>
      </div>
    </section>
  );
}
