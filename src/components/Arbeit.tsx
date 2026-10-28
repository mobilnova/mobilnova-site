import Section from "@/components/Section";

type Zeile = { titel: string; text: string };

const ZEILEN: Zeile[] = [
  {
    titel: "Angebot aus Fotos",
    text: "Dein Kunde schickt Fotos und sagt, was er will. Der Assistent bereitet das Angebot vor, mit den Leistungen und der Arbeitszeit. Die Preise kommen aus deiner Preisliste.",
  },
  {
    titel: "Anfragen",
    text: "Der Assistent arbeitet auf deiner bestehenden WhatsApp-Geschäftsnummer und mit deinen E-Mails. Er bereitet Antworten auf Standardfragen vor, fragt fehlende Fotos nach und schlägt Termine vor. Du kannst jederzeit übernehmen. Anfragen per Telefon oder Instagram trägst du von Hand in dieselbe Liste ein (Nachricht kopieren, einfügen); Instagram direkt anzubinden ist noch nicht gebaut.",
  },
  {
    titel: "Termin und Rechnung",
    text: "Nach deiner Freigabe gehen Terminbestätigung und Erinnerung raus. Nach dem Auftrag liegt die Rechnung fertig da, auf Wunsch als E-Rechnung (XRechnung oder ZUGFeRD: das maschinenlesbare Format, das Geschäftskunden für Rechnungen verlangen können).",
  },
  {
    titel: "Freigabe",
    text: "Jeder Vorschlag landet zuerst bei dir: freigeben, ändern oder ablehnen. Automatik gibt es erst, wenn du selbst auf die Stufe Automatik wechselst, weil du dem System genug vertraust.",
  },
];

const FUNDAMENT: [string, string][] = [
  ["Kunden und Kundenhistorie", "Alle Anfragen, Aufträge und Rechnungen eines Kunden an einer Stelle."],
  ["Angebote und Aufträge", "Vom Angebot über „in Arbeit“ bis „fertig“."],
  ["Rechnungen und E-Rechnung", "PDF und E-Rechnung, Anzahlung, Schlussrechnung und Sammelrechnung."],
  ["Kartenzahlung per Link", ""],
  ["Mahnwesen", "Erinnerung, 1. und 2. Mahnung."],
  ["Kalender", "Termine je Tag, Woche und Monat."],
  ["Online-Terminanfragen", ""],
  ["Mitarbeiter und Zeiten", ""],
  ["Datenübernahme", "Kunden als Liste (CSV, zum Beispiel aus Excel) übernehmen."],
  ["DATEV-Export", "Rechnungen als CSV für den Steuerberater."],
  ["Berichte", ""],
];

// Heute nur für Fahrzeugbetriebe gebaut; weitere Gewerke bekommen ein eigenes Branchenpaket.
const FAHRZEUG: [string, string][] = [
  ["Kunden und Fahrzeuge", "Kennzeichen, FIN, Farbe und Kilometerstand hängen am Fahrzeug."],
  ["Digitale Annahme", "Zustand, Fotos und Unterschrift am Tablet."],
  ["Schäden am Fahrzeugschema", "Schäden auf dem Fahrzeugumriss markieren."],
  ["Lackdickenmessung", "Messwerte je Bauteil bei der Annahme festhalten."],
  ["Belegungsplan", "Hallenplätze je Tag."],
  ["Material und Lager", "Mit Folienregal und Rollenrest."],
  ["Nachpflege-Erinnerung", "Erinnerung an fällige Nachpflege."],
];

const BILDER = [
  {
    src: "/screens/screen-eingang.png",
    w: 2000,
    h: 983,
    alt: "Anfragen in mobilnova: WhatsApp, E-Mail, Instagram und Telefon in einer Liste, mit Quelle, Anliegen, Alter und Status",
    cap: "Anfragen aus allen Kanälen an einer Stelle",
  },
  {
    src: "/screens/screen-kundenhistorie.png",
    w: 2000,
    h: 1358,
    alt: "Kundenhistorie mit Kennzahlen, Fahrzeug, abgeschlossenem Auftrag und ausgestellter Rechnung",
    cap: "Kundenhistorie mit Auftrag und Rechnung",
  },
];

export default function Arbeit() {
  return (
    <Section id="arbeit" no="05" label="So arbeitet mobilnova">
      <h2>Vier Dinge, die der Assistent dir abnimmt.</h2>
      <dl className="rows">
        {ZEILEN.map((z) => (
          <div className="row" key={z.titel}>
            <dt>
              <span className="t">{z.titel}</span>
            </dt>
            <dd>{z.text}</dd>
          </div>
        ))}
      </dl>
      <p className="note">
        Preise, Beträge, Steuern und Fristen rechnet die Software nach festen Regeln. Nie ein Sprachmodell.
      </p>

      <div className="shots">
        {BILDER.map((b) => (
          <figure key={b.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.src} alt={b.alt} width={b.w} height={b.h} loading="lazy" />
            <figcaption className="mono faint">{b.cap}</figcaption>
          </figure>
        ))}
      </div>
      <p className="note" style={{ marginTop: "1rem" }}>
        Echte Oberfläche aus dem laufenden System, mit erfundenen Beispieldaten.
      </p>

      <div className="found">
        <p className="mono faint">Das Fundament, auf dem der Assistent aufsetzt</p>
        <ul>
          {FUNDAMENT.map(([name, text]) => (
            <li key={name}>
              <strong>{name}</strong>
              {text ? <span> {text}</span> : null}
            </li>
          ))}
        </ul>
      </div>

      <div className="found">
        <p className="mono faint">Zusätzlich für Fahrzeugbetriebe</p>
        <ul>
          {FAHRZEUG.map(([name, text]) => (
            <li key={name}>
              <strong>{name}</strong>
              {text ? <span> {text}</span> : null}
            </li>
          ))}
        </ul>
        <p className="note" style={{ marginTop: "1rem" }}>
          Diese Bausteine gibt es heute für Fahrzeugbetriebe. Für weitere Gewerke bekommt jedes ein eigenes
          Branchenpaket, der Ablauf bleibt gleich.
        </p>
      </div>
    </Section>
  );
}
