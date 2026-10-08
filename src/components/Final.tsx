import Cta from "@/components/Cta";

export default function Final() {
  return (
    <section className="sec final">
      <div className="wrap">
        <h2>
          Sprich mit uns, <span className="acc">bevor du entscheidest.</span>
        </h2>
        <p style={{ marginTop: "1.4rem", maxWidth: "34rem", color: "#d4dbe0" }}>
          Fünf Pilotplätze. Im Pilotgespräch klären wir, ob der Assistent zu deinem Betrieb passt.
        </p>
        <Cta stelle="schluss" />
      </div>
    </section>
  );
}
