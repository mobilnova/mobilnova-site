import { AUTOPILOT } from "@/lib/links";

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
            Fünf Pilotplätze
          </p>
          <h2 className="relative mx-auto mt-3 max-w-[22ch] text-3xl font-extrabold tracking-tight text-white md:text-[2.55rem]">
            Bau die Assistenten mit uns zusammen.
          </h2>
          <p className="relative mx-auto mt-4 max-w-[60ch] text-lg leading-relaxed text-white/85">
            Pilotbetriebe nutzen mobilnova Autopilot als Erste und bestimmen mit, was zuerst gebaut
            wird. Preis, Pilotkonditionen und Warteliste findest du auf einer Seite.
          </p>
          <a
            href={AUTOPILOT("abschluss")}
            className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-bold text-accent-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Preis &amp; Pilotplätze ansehen →
          </a>
        </div>
      </div>
    </section>
  );
}
