export default function Founder() {
  return (
    <section className="border-b border-line-2">
      <div className="wrap py-16 md:py-24">
        <p className="kick">Warum es das gibt</p>
        <blockquote className="mt-4 max-w-[34ch] font-serif text-2xl font-medium leading-snug tracking-tight text-ink md:text-[1.95rem]">
          „Ich habe die Software gesucht, die es für unser Handwerk nicht gab — also{" "}
          <b className="text-accent">bauen wir sie im eigenen Betrieb</b>, aus echten Abläufen statt
          am Reißbrett."
        </blockquote>
        <div className="mt-6 flex items-center gap-3">
          <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-grad font-bold text-white">
            M
          </span>
          <span className="max-w-[46ch] text-[0.975rem] text-muted">
            Aus der Praxis der <b className="text-ink">Glanz Aufbereitung</b> — jeden Tag im eigenen
            Betrieb im Einsatz, bevor du sie bekommst.
          </span>
        </div>
      </div>
    </section>
  );
}
