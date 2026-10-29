import Logo from "@/components/Logo";
import { APP_LOGIN } from "@/lib/links";

export default function Header() {
  return (
    <header className="head">
      <div className="wrap head-in">
        <Logo />
        <nav className="nav mono" aria-label="Abschnitte">
          <a href="/#warum">Warum mobilnova</a>
          <a href="/#branchen">Gewerke</a>
          <a href="/#arbeit">So arbeitet es</a>
          <a href="/#grundsaetze">Grundsätze</a>
          <a href="/#pilot">Pilot</a>
          <a href="/#wer">Wer dahintersteht</a>
          <a href="/#fragen">Fragen</a>
          <a href="/ratgeber/">Ratgeber</a>
        </nav>
        <a className="login mono" href={APP_LOGIN}>
          Anmelden
        </a>
      </div>
    </header>
  );
}
