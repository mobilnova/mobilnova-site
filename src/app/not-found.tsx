import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-bg px-6">
      <div className="text-center">
        <div className="mx-auto flex w-fit items-center gap-2 text-xl font-bold text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-grad text-sm font-extrabold text-white">
            M
          </span>
          Mobilnova
        </div>
        <p className="mt-8 font-mono text-6xl font-extrabold text-accent">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink">Seite nicht gefunden</h1>
        <p className="mx-auto mt-3 max-w-[42ch] text-muted">
          Diese Seite gibt es nicht (mehr). Vielleicht hilft dir der Weg zurück zur Startseite
          weiter.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-grad px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          ← Zur Startseite
        </Link>
      </div>
    </main>
  );
}
