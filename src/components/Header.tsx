import Logo from "@/components/Logo";
import { APP_LOGIN } from "@/lib/links";

export default function Header() {
  return (
    <header className="head">
      <div className="wrap head-in">
        <Logo />
        <nav className="nav mono" aria-label="Abschnitte">
          <a href="#vision">Vision</a>
          <a href="#grundsaetze">Grundsätze</a>
          <a href="#weg">Der Weg</a>
          <a href="#stand">Stand heute</a>
        </nav>
        <a className="login mono" href={APP_LOGIN}>
          Anmelden
        </a>
      </div>
    </header>
  );
}
