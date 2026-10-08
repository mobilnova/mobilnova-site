import Section from "@/components/Section";

type Zeile = { titel: string; text: string; status: string; art: "ok" | "wip" | "" };

const ZEILEN: Zeile[] = [
  {
    titel: "Angebot aus Fotos",
    text: "Dein Kunde schickt Fotos und sagt, was er will. Der Assistent bereitet das Angebot vor, mit Folienbedarf je Bauteil und Arbeitszeit. Die Preise kommen aus deiner Preisliste.",
    status: "In Arbeit",
    art: "wip",
  },
  {
    titel: "Anfragen",
    text: "Der Assistent arbeitet auf deiner bestehenden WhatsApp-Geschäftsnummer. Er bereitet Antworten auf Standardfragen vor, fragt fehlende Fotos nach und schlägt Termine vor. Du kannst jederzeit übernehmen.",
    status: "In Arbeit",
    art: "wip",
  },
  {
    titel: "Termin und Rechnung",
    text: "Nach deiner Freigabe gehen Terminbestätigung und Erinnerung raus. Nach dem Auftrag liegt die Rechnung fertig da, auf Wunsch als E-Rechnung (XRechnung und ZUGFeRD).",
    status: "Rechnung läuft · Terminvorschläge in Arbeit",
    art: "ok",
  },
  {
    titel: "Freigabe",
    text: "Jeder Vorschlag landet zuerst bei dir: freigeben, ändern oder ablehnen. Automatik schaltest du je Ablauf selbst frei, wenn du mehrere Vorschläge in Folge unverändert freigegeben hast. Standard: drei.",
    status: "Grundsatz",
    art: "",
  },
];

const FUNDAMENT = [
  "Kunden und Fahrzeuge",
  "Digitale Annahme mit Fotos und Unterschrift",
  "Schäden am Fahrzeugschema",
  "Lackdickenmessung",
  "Angebote und Aufträge",
  "Rechnungen und E-Rechnung",
  "Kartenzahlung per Link",
  "Mahnwesen",
  "Kalender und Stellplätze",
  "Online-Terminanfragen",
  "Mitarbeiter und Zeiten",
  "Material und Lager",
  "Nachpflege-Erinnerung",
  "Berichte",
];

const BILDER = [
  {
    src: "/screens/screen-annahme.png",
    w: 2690,
    h: 1320,
    alt: "Fahrzeugannahme in mobilnova: acht Pflichtfotos rundum und Schadensmarkierung am Fahrzeugschema",
    cap: "Annahme am Tablet",
  },
  {
    src: "/screens/screen-angebot.png",
    w: 1786,
    h: 1310,
    alt: "Fertiges Angebot als PDF mit Positionen, Steuerausweis und Gesamtbetrag",
    cap: "Angebot als PDF",
  },
  {
    src: "/screens/screen-kundenhistorie.png",
    w: 2420,
    h: 1300,
    alt: "Kundenhistorie mit Kennzahlen, Fahrzeug, abgeschlossenem Auftrag und ausgestellter Rechnung",
    cap: "Kundenhistorie mit Rechnung",
  },
];

export default function Arbeit() {
  return (
    <Section no="04" label="So arbeitet mobilnova">
      <h2>Vier Dinge, die der Assistent dir abnimmt.</h2>
      <dl className="rows">
        {ZEILEN.map((z) => (
          <div className="row" key={z.titel}>
            <dt>
              <span className="t">{z.titel}</span>
              <span className={`tag mono ${z.art}`}>{z.status}</span>
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
          {FUNDAMENT.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
