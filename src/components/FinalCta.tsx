export default function FinalCta() {
  return (
    <section className="border-b border-line-2">
      <div className="wrap py-16 md:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-grad px-6 py-14 text-center shadow-lg md:px-10 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />
          <p className="relative text-sm font-semibold uppercase tracking-widest text-white/80">
            Sei von Anfang an dabei
          </p>
          <h2 className="relative mx-auto mt-3 max-w-[20ch] text-3xl font-extrabold tracking-tight text-white md:text-[2.55rem]">
            Sichere dir deinen frühen Platz.
          </h2>
          <p className="relative mx-auto mt-4 max-w-[60ch] text-lg leading-relaxed text-white/85">
            Trag deine E-Mail ein und erfahre als Erster, wenn Mobilnova für neue Betriebe öffnet.
            Die Warteliste entscheidet die Reihenfolge — und frühe Betriebe bekommen
            Sonderkonditionen.
          </p>
          <a
            href="#signup"
            className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-bold text-accent-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            E-Mail eintragen →
          </a>
        </div>
      </div>
    </section>
  );
}
