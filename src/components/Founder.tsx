// Kein Betriebsname: Die Aussage muss am Tag der Veröffentlichung stimmen (siehe PR-Beschreibung).
export default function Founder() {
  return (
    <section className="border-b border-line-2">
      <div className="wrap py-16 md:py-24">
        <p className="kick">Warum es das gibt</p>
        <p className="mt-4 max-w-[34ch] font-serif text-2xl font-medium leading-snug tracking-tight text-ink md:text-[1.95rem]">
          Entstanden in einem Aufbereitungsbetrieb,{" "}
          <b className="text-accent">gebaut aus echten Abläufen</b> statt am Reißbrett.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-grad font-bold text-white">
            M
          </span>
          <span className="max-w-[48ch] text-[0.975rem] text-muted">
            Die Grundfunktionen liefen zuerst im Betriebsalltag. Die Assistenten entwickeln wir mit den
            ersten fünf Pilotbetrieben aus Folierung und Aufbereitung.
          </span>
        </div>
      </div>
    </section>
  );
}
