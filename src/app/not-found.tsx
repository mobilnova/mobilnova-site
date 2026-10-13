import type { Metadata } from "next";
import Logo from "@/components/Logo";

export const metadata: Metadata = { title: "Nicht gefunden", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <main className="nf">
      <div className="wrap">
        <Logo />
        <h1 style={{ marginTop: "3rem" }}>
          <span>404</span>
          <span className="acc">Nicht gefunden.</span>
        </h1>
        <p className="lead">Diese Seite gibt es nicht (mehr).</p>
        <div className="acts" style={{ marginTop: "2rem" }}>
          <a className="btn" href="/">
            Zur Startseite
          </a>
        </div>
      </div>
    </main>
  );
}
