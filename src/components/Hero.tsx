import SignupForm from "./SignupForm";

// Der HERO ist bewusst unverändert aus der bisherigen Seite übernommen (gefällt dem Betrieb):
// Zwei-Spalten-Layout mit App-Mockup der digitalen Fahrzeugannahme. Styles siehe globals.css.
export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="topbar">
          <div className="brand">
            <span className="mark">M</span>
            <span>
              Mobilnova<small>für Aufbereiter</small>
            </span>
          </div>
          <a className="topcta" href="#signup">
            Auf die Warteliste →
          </a>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="tagpill">
              <span className="dot"></span> In Entwicklung · frühe Plätze verfügbar
            </div>
            <h1 className="lead">
              Dein Betrieb, <span className="shine">glänzend</span> organisiert.
            </h1>
            <p className="sub">
              Die Software, die den Aufbereitungs-Alltag kann — von der{" "}
              <b>Fahrzeugannahme am Tablet</b> über Angebot, Auftrag und Rechnung bis zur{" "}
              <b>Kundengewinnung</b>. Alles an einem Ort, statt Zettel, Excel und Foto-Chaos.
            </p>

            <SignupForm />

            <div className="trust">
              <span>
                <span className="c">✓</span> Kostenlos &amp; unverbindlich
              </span>
              <span>
                <span className="c">✓</span> Kein Spam — nur die Startnachricht
              </span>
            </div>
          </div>

          {/* APP-MOCKUP */}
          <div
            className="shot"
            aria-label="Beispielansicht der Mobilnova-App: digitale Fahrzeugannahme"
            role="img"
          >
            <div className="glow"></div>
            <div className="device">
              <div className="bar">
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="ttl">mobilnova.app · Fahrzeugannahme</span>
                <span className="save">Gespeichert</span>
              </div>
              <div className="app">
                <nav className="rail" aria-hidden="true">
                  <span className="ico act">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l1.6-4.2A2 2 0 0 1 8.5 7h7a2 2 0 0 1 1.9 1.8L19 13v5h-2v-2H7v2H5z"></path>
                      <circle cx="8" cy="16" r="1"></circle>
                      <circle cx="16" cy="16" r="1"></circle>
                    </svg>
                  </span>
                  <span className="ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="8" r="3"></circle>
                      <path d="M3 20a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6"></path>
                    </svg>
                  </span>
                  <span className="ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="17" rx="2"></rect>
                      <path d="M3 9h18M8 2v4M16 2v4"></path>
                    </svg>
                  </span>
                  <span className="ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                      <path d="M6 3h8l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                    </svg>
                  </span>
                  <span className="ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path>
                    </svg>
                  </span>
                </nav>
                <div className="main">
                  <div className="mhead">
                    <div>
                      <b>Mercedes GLC</b> <span className="pl">B·MN 2026</span>
                    </div>
                    <span className="step">Schritt 3 / 6</span>
                  </div>
                  <div className="canvas">
                    <span className="tag tag-a">Kratzer · Tür</span>
                    <svg className="car" viewBox="0 0 210 270" role="presentation">
                      <defs>
                        <linearGradient id="paint" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0" stopColor="#2bb6d8" />
                          <stop offset="1" stopColor="#0d6288" />
                        </linearGradient>
                      </defs>
                      <ellipse cx="105" cy="258" rx="70" ry="8" fill="rgba(10,50,70,.14)" />
                      <rect x="47" y="60" width="18" height="36" rx="7" fill="#26323c" />
                      <rect x="145" y="60" width="18" height="36" rx="7" fill="#26323c" />
                      <rect x="47" y="176" width="18" height="36" rx="7" fill="#26323c" />
                      <rect x="145" y="176" width="18" height="36" rx="7" fill="#26323c" />
                      <rect x="54" y="46" width="12" height="10" rx="3" fill="url(#paint)" />
                      <rect x="144" y="46" width="12" height="10" rx="3" fill="url(#paint)" />
                      <rect x="56" y="18" width="98" height="236" rx="46" fill="url(#paint)" />
                      <path d="M72 92 L138 92 L130 64 Q105 56 80 64 Z" fill="#d7eef8" opacity=".92" />
                      <rect x="74" y="98" width="62" height="74" rx="9" fill="#ffffff" opacity=".14" />
                      <path d="M74 178 L136 178 L130 206 Q105 212 80 206 Z" fill="#d7eef8" opacity=".9" />
                      <path d="M105 100 L105 170" stroke="#ffffff" strokeOpacity=".22" strokeWidth="1.5" />
                      <g className="mk a">
                        <circle className="ring" cx="80" cy="150" r="9" />
                        <circle className="dot" cx="80" cy="150" r="5.5" />
                      </g>
                      <g className="mk b">
                        <circle className="ring" cx="120" cy="232" r="9" />
                        <circle className="dot" cx="120" cy="232" r="5.5" />
                      </g>
                    </svg>
                  </div>
                  <div className="chips">
                    <span className="chip">
                      <span className="g">
                        <i></i>
                      </span>{" "}
                      <b>118{" "}µm</b> Lackdicke
                    </span>
                    <span className="chip">3 Fotos</span>
                    <span className="chip ok">
                      <b>✓</b> Unterschrift
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="floatcard">
              <span className="ok">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12l5 5L20 6"></path>
                </svg>
              </span>
              <span>
                <b>Angebot #241 erstellt</b>
                <span>480 € · in Auftrag übernommen</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
