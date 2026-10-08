import Logo from "@/components/Logo";
import { APP_LOGIN, KONTAKT_MAIL } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Logo />
            <p style={{ marginTop: "0.9rem", maxWidth: "26rem" }}>
              Ein digitaler Assistent für kleine Betriebe. Wir starten bei Folierern, PPF- und
              Aufbereitungsbetrieben.
            </p>
          </div>
          <div>
            <p className="mono faint">Kontakt</p>
            <ul>
              <li>
                <a href={`mailto:${KONTAKT_MAIL}`}>{KONTAKT_MAIL}</a>
              </li>
              <li>
                <a href={APP_LOGIN}>Anmelden</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mono faint">Rechtliches</p>
            <ul>
              <li>
                <a href="/impressum.html">Impressum</a>
              </li>
              <li>
                <a href="/datenschutz.html">Datenschutzerklärung</a>
              </li>
              <li>
                <a href="/nutzungsbedingungen.html">Nutzungsbedingungen</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="fine">© 2026 mobilnova · Informationsseite · kein Vertragsangebot</p>
      </div>
    </footer>
  );
}
