import type { Inhalt } from "@/content/typen";
import { KONTAKT_MAIL } from "@/lib/links";

const PREIS =
  "Der Pilot dauert zwei Monate und kostet einmalig 99 €. Danach ist ein Preis von 149 € pro Monat geplant; das ist noch kein Angebot. Alle Preise zuzüglich gesetzlicher Umsatzsteuer. Es gibt fünf Pilotplätze für Aufbereiter und Folierer.";

export const FOLIERER: Inhalt = {
  pfad: "/folierer/",
  titel: "Software für Folierer und PPF-Betriebe",
  h1: "Software für Folierer und PPF-Betriebe.",
  lead:
    "mobilnova ist eine Betriebsverwaltung für Folier- und PPF-Betriebe: Angebot nach Bauteilen, Folienlager mit Rollenrest, digitale Annahme und Rechnung. Der Assistent bereitet Anfragen und Angebote vor, du gibst frei.",
  beschreibung:
    "Betriebssoftware für Folierer und PPF-Betriebe in Deutschland: Angebot nach Bauteilen, Folienlager mit Rollenrest, Annahme am Tablet, E-Rechnung. Pilotphase.",
  kurz: "Angebot nach Bauteilen, Folienlager, Annahme und Rechnung in einer Software.",
  stand: "2026-10-23",
  bloecke: [
    {
      h2: "Angebot nach Bauteilen kalkulieren",
      p: [
        "Der Preis entsteht je Bauteil nach der Formel deines Betriebs: Folienbedarf, Verschnitt in Prozent, Materialaufschlag und Arbeitszeit mit deinem Stundensatz. So lassen sich Vollfolierung und Teilfolierung im selben Angebot abbilden.",
        "Die Rechnung macht die Software nach festen Regeln, kein Sprachmodell. Die Werte, also Stundensatz, Aufschlag und Preisliste nach Fahrzeuggröße, legst du selbst fest.",
      ],
    },
    {
      h2: "Folienlager mit Rollenrest",
      p: [
        "Jede Folienrolle bekommt Hersteller, Serie, Farbcode, Finish, Breite, Chargennummer und Lagerort. Der Verbrauch aus Aufträgen mindert den Rollenrest, und die Inventur zählt Rolle für Rolle oder die Gesamtmenge.",
        "Auf jedes Rollenetikett kommt ein QR-Code. Am Handy öffnet er genau diese Rolle mit Rest, Charge, Lagerort und Anbruchdatum. Das Folienregal zeigt alle Rollen auf einen Blick.",
      ],
    },
    {
      h2: "Annahme, Auftrag und Belegung",
      p: [
        "Die Fahrzeugannahme läuft am Tablet: Zustand, Fotos, Schäden auf dem Fahrzeugschema, Lackdicke und Unterschrift. Mehrtagesaufträge stehen an jedem Tag im Kalender, und der Belegungsplan zeigt Hallenplätze je Tag.",
      ],
    },
    {
      h2: "Garantie und Charge",
      p: [
        "Beim Abschluss eines Auftrags legt mobilnova die Garantie an. Die Charge kommt aus dem Verbrauch der Rolle, ein Zertifikat als PDF landet in der Kundenakte. Die Registrierung direkt beim Hersteller ist noch nicht angebunden.",
      ],
    },
    {
      h2: "Rechnung und E-Rechnung",
      p: [
        "Rechnungen gibt es als PDF und auf Wunsch als E-Rechnung (XRechnung oder ZUGFeRD). Für den Steuerberater exportierst du die Rechnungen als DATEV-Export (CSV).",
      ],
    },
    {
      h2: "Was der Assistent übernimmt",
      p: [
        "Der Assistent beantwortet Anfragen per WhatsApp und E-Mail vor, fragt fehlende Fotos nach, bereitet das Angebot vor und schlägt Termine vor. Jeder Vorschlag landet zuerst bei dir: freigeben, ändern oder ablehnen. Einzelne Funktionen des Assistenten sind noch im Aufbau; welche, sagen wir dir im Gespräch offen.",
      ],
    },
  ],
  faq: [
    [
      "Welche Software braucht ein Folierbetrieb?",
      "Mindestens fünf Dinge: eine Kalkulation für das Angebot, Auftrag und Terminplanung, eine Dokumentation bei der Fahrzeugannahme, eine Materialverwaltung für die Folienrollen und eine Rechnungsstellung samt E-Rechnung. mobilnova bündelt diese Bausteine in einer Software.",
    ],
    [
      "Kann ich Voll- und Teilfolierung kalkulieren?",
      "Ja. Der Preis wird je Bauteil berechnet, nach der Formel deines Betriebs. Ein Angebot kann ein Bauteil, mehrere oder das ganze Fahrzeug enthalten.",
    ],
    [
      "Läuft mobilnova im Browser?",
      "Ja, auf Handy, Tablet und PC. Es gibt keinen Server im Büro und keine Installation.",
    ],
    ["Gibt es mobilnova schon, und was kostet es?", PREIS],
  ],
  weiter: [
    "/ratgeber/fahrzeugfolierung-angebot-kalkulieren/",
    "/ratgeber/folienrollen-verwalten/",
    "/ratgeber/e-rechnung-folierer-aufbereiter/",
    "/aufbereiter/",
    "/branchen/",
  ],
};

export const AUFBEREITER: Inhalt = {
  pfad: "/aufbereiter/",
  titel: "Software für Autoaufbereiter und Detailer",
  h1: "Software für Autoaufbereiter und Detailing-Betriebe.",
  lead:
    "mobilnova ist eine Betriebsverwaltung für Aufbereitungsbetriebe: Fahrzeugannahme mit Zustandsprotokoll, Angebote nach deiner Preisliste, Termine und Rechnung. Entwickelt von jemandem, der selbst einen Aufbereitungsbetrieb führt.",
  beschreibung:
    "Betriebssoftware für Autoaufbereiter und Detailing-Betriebe in Deutschland: Zustandsprotokoll am Tablet, Angebote, Termine, E-Rechnung. Pilotphase, fünf Plätze.",
  kurz: "Zustandsprotokoll, Angebot, Termin und Rechnung für Aufbereitungsbetriebe.",
  stand: "2026-10-23",
  bloecke: [
    {
      h2: "Fahrzeugannahme mit Zustandsprotokoll",
      p: [
        "Zustand, Fotos und Unterschrift am Tablet. Schäden markierst du auf dem Fahrzeugumriss, die Lackdicke je Bauteil hältst du als Messwert fest. Der Kunde bekommt das Protokoll als PDF. Welche Ansichten Pflicht sind, legst du für deinen Betrieb fest.",
      ],
    },
    {
      h2: "Angebote nach deiner Preisliste",
      p: [
        "Politur, Versiegelung, Keramikversiegelung, Innenreinigung: Deine Leistungen und Preise pflegst du im Leistungskatalog, gestaffelt nach Fahrzeuggröße. Angebote entstehen aus dieser Liste. Die Beträge rechnet die Software, nicht das Sprachmodell.",
      ],
    },
    {
      h2: "Termine, Auftrag und Nachpflege",
      p: [
        "Der Kalender zeigt Termine und Hallenplätze je Tag. Ein Auftrag läuft vom Angebot über „in Arbeit“ bis „fertig“. Nach dem Abschluss erinnert mobilnova an fällige Nachpflege.",
      ],
    },
    {
      h2: "Rechnung, Mahnung und E-Rechnung",
      p: [
        "Rechnungen gibt es als PDF und auf Wunsch als E-Rechnung (XRechnung oder ZUGFeRD). Dazu kommen Erinnerung, 1. und 2. Mahnung sowie ein DATEV-Export (CSV) für den Steuerberater.",
      ],
    },
    {
      h2: "Was der Assistent übernimmt",
      p: [
        "Der Assistent bereitet Antworten auf Anfragen per WhatsApp und E-Mail vor, fragt fehlende Fotos nach und schlägt Termine vor. Er arbeitet auch abends und am Wochenende; du gibst am nächsten Morgen frei. Einzelne Funktionen sind noch im Aufbau, welche sagen wir dir im Gespräch.",
      ],
    },
  ],
  faq: [
    [
      "Was gehört in eine Software für Autoaufbereiter?",
      "Eine Annahme mit Zustandsprotokoll und Fotos, ein Leistungskatalog mit Preisen nach Fahrzeuggröße, Terminplanung, Rechnung mit Mahnwesen und ein Export für den Steuerberater. mobilnova deckt diese Punkte ab.",
    ],
    [
      "Kann ich meine Kunden und Fahrzeuge übernehmen?",
      "Ja. Kunden und Fahrzeuge übernimmst du als Liste (CSV, zum Beispiel aus Excel). Fertige Anbindungen an lexoffice, sevdesk, Bexio oder DIO gibt es heute noch nicht.",
    ],
    ["Gibt es mobilnova schon, und was kostet es?", PREIS],
  ],
  weiter: [
    "/ratgeber/fahrzeugannahme-dokumentieren/",
    "/ratgeber/e-rechnung-folierer-aufbereiter/",
    "/folierer/",
    "/branchen/",
  ],
};

export const BRANCHEN: Inhalt = {
  pfad: "/branchen/",
  titel: "Software für Dienstleister: für welche Gewerke",
  h1: "Ein Ablauf für viele Gewerke.",
  lead:
    "mobilnova bildet den Ablauf eines Dienstleistungsbetriebs einmal ab: Anfrage, Angebot, Termin, Arbeit beim Kunden, Rechnung. Was sich von Gewerk zu Gewerk unterscheidet, steht in einem Branchenpaket. Hier steht, wo wir heute stehen.",
  beschreibung:
    "Betriebssoftware für Dienstleister: ein Ablauf von der Anfrage bis zur Rechnung, ein Branchenpaket je Gewerk. Pilot in Fahrzeugpflege und Folierung.",
  kurz: "Ein Ablauf, ein Branchenpaket je Gewerk, und wo wir heute stehen.",
  stand: "2026-10-23",
  bloecke: [
    {
      h2: "Der Ablauf ist überall derselbe",
      p: [
        "Ob Fahrzeug, Fenster oder Folie: Der Weg durch das Büro sieht bei Dienstleistern fast immer gleich aus. Der Assistent bereitet die Schritte vor, du gibst frei.",
      ],
      liste: [
        "Anfrage per WhatsApp, E-Mail oder Formular",
        "Angebot aus deiner Preisliste",
        "Termin im Kalender",
        "Arbeit beim Kunden, mit Fotos",
        "Übergabe",
        "Rechnung und Zahlung",
      ],
    },
    {
      h2: "Was je Gewerk anders ist",
      p: [
        "Das steht im Branchenpaket: die Leistungen und ihre Preiseinheiten (je Stück, Bauteil, Stunde oder Fläche), die Angaben zum Objekt (bei einem Fahrzeug etwa Kennzeichen und Größe, bei einem Gebäude Adresse und Fläche), die Textvorlagen und die Regeln für Termine. Die Preise legst du selbst fest.",
      ],
    },
    {
      h2: "Wo wir heute stehen",
      p: [
        "Im Pilot laufen Betriebe aus der Fahrzeugaufbereitung und aus der Folierung mit PPF und Lackschutz. Die Bausteine dafür stehen auf den Seiten für Folierer und für Aufbereiter.",
        "In Vorbereitung ist das Paket für Fensterreinigung und Gebäudereinigung. Geplant sind Preise nach Fläche oder Einsatz und wiederkehrende Einsätze. Es ist noch nicht im Pilot und noch nicht nutzbar.",
        "Weitere Gewerke mit demselben Ablauf sind denkbar, etwa Garten- und Landschaftsbau. Zugesagt ist davon nichts.",
      ],
    },
    {
      h2: "Dein Gewerk ist nicht dabei?",
      p: [
        `Schreib uns kurz, wie bei dir der Weg von der Anfrage bis zur Rechnung aussieht, an ${KONTAKT_MAIL}. Passt der Ablauf, ist dein Gewerk ein Kandidat für ein weiteres Branchenpaket. Im Pilotgespräch klären wir offen, was heute geht und was nicht.`,
      ],
    },
  ],
  faq: [
    [
      "Läuft mobilnova schon für Reinigungsbetriebe?",
      "Noch nicht. Der Pilot läuft mit Betrieben aus Fahrzeugaufbereitung und Folierung. Das Paket für Fensterreinigung und Gebäudereinigung ist in Vorbereitung. Pilotplätze gibt es dort noch nicht. Schreib uns, wenn dich das Paket interessiert.",
    ],
    [
      "Was ist ein Branchenpaket?",
      "Ein Satz Angaben für ein Gewerk: Leistungen und Preiseinheiten, Angaben zum Objekt, Textvorlagen und Terminregeln. Der Ablauf von der Anfrage bis zur Rechnung bleibt für alle Gewerke gleich.",
    ],
  ],
  weiter: ["/folierer/", "/aufbereiter/", "/ratgeber/"],
};
