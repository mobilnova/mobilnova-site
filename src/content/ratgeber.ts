import type { Inhalt } from "@/content/typen";

export const KALKULATION: Inhalt = {
  pfad: "/ratgeber/fahrzeugfolierung-angebot-kalkulieren/",
  titel: "Folierung kalkulieren: Angebot in 5 Schritten",
  h1: "Fahrzeugfolierung kalkulieren: das Angebot in fünf Schritten.",
  lead:
    "Ein Folierungsangebot besteht aus Material, Arbeitszeit, Nebenkosten und Aufschlag. Wer diese Blöcke je Bauteil festhält, kalkuliert nachvollziehbar und kann jedes Angebot erklären.",
  beschreibung:
    "So kalkulierst du ein Angebot für Fahrzeugfolierung: Folienbedarf je Bauteil, Verschnitt, Arbeitszeit, Nebenkosten, Aufschlag. Mit Checkliste für Betriebe.",
  kurz: "Folienbedarf, Verschnitt, Arbeitszeit und Aufschlag je Bauteil: die Schritte zum nachvollziehbaren Angebot.",
  stand: "2026-10-13",
  bloecke: [
    {
      h2: "1. Fahrzeug und Umfang festhalten",
      p: [
        "Zuerst klärst du, was überhaupt gemacht werden soll: Vollfolierung oder Teilfolierung, welche Bauteile (zum Beispiel Motorhaube, Dach, Türen, Stoßfänger) und welche Fahrzeugklasse. Die Größe des Fahrzeugs bestimmt Folienbedarf und Arbeitszeit, deshalb gehört sie in jedes Angebot.",
        "Halte auch den Zustand des Lacks fest, bevor du zusagst. Vorarbeiten wie Reinigung, Lackkorrektur oder das Abbauen von Anbauteilen kosten Zeit und gehören als eigene Positionen ins Angebot.",
      ],
    },
    {
      h2: "2. Folienbedarf je Bauteil bestimmen",
      p: [
        "Rechne den Bedarf je Bauteil und nicht pauschal fürs ganze Auto. Auf den Bedarf kommt ein Verschnitt in Prozent, denn Zuschnitt, Fehlversuche und die Rollenbreite verbrauchen mehr Folie, als die reine Fläche vermuten lässt. Wie hoch der Verschnitt ist, legt jeder Betrieb aus Erfahrung fest; er unterscheidet sich je nach Bauteil und Folie.",
        "Vergleiche nach jedem Auftrag den tatsächlichen Verbrauch mit deiner Annahme. Nach wenigen Aufträgen siehst du, wo dein Verschnitt zu knapp oder zu großzügig ist.",
      ],
    },
    {
      h2: "3. Arbeitszeit mit eigenem Stundensatz",
      p: [
        "Schätze die Stunden je Bauteil und multipliziere sie mit deinem Stundensatz. Die beste Quelle sind deine eigenen abgeschlossenen Aufträge: Wie lange hat die Motorhaube beim letzten Mal wirklich gedauert?",
      ],
    },
    {
      h2: "4. Nebenkosten und Materialaufschlag",
      p: [
        "Verbrauchsmaterial, Reinigung, Demontage, Anfahrt: Was nicht in der Arbeitszeit steckt, braucht eine eigene Zeile. Auf das Material kommt ein Aufschlag in Prozent, der Einkauf, Lagerung und Risiko abdeckt.",
      ],
    },
    {
      h2: "5. Netto, Steuer und Anzahlung klar ausweisen",
      p: [
        "Zeige, ob die Beträge netto oder brutto sind, und weise die Umsatzsteuer aus. Bei Sonderfarben oder teurer Folie ist eine Anzahlung üblich, weil du das Material vorab bestellst. Nenne außerdem, wie lange das Angebot gilt.",
      ],
    },
    {
      h2: "Checkliste vor dem Absenden",
      liste: [
        "Voll- oder Teilfolierung und alle Bauteile genannt",
        "Fahrzeugklasse und Lackzustand festgehalten",
        "Folienbedarf je Bauteil mit Verschnitt",
        "Arbeitszeit je Bauteil mit Stundensatz",
        "Vorarbeiten und Nebenkosten als eigene Zeilen",
        "Netto, Umsatzsteuer, Brutto und Gültigkeit ausgewiesen",
        "Anzahlung und Zahlungsziel genannt",
      ],
    },
  ],
  mobilnova: {
    h2: "Wie mobilnova dabei hilft",
    p: [
      "In mobilnova berechnet die Folienkalkulation den Preis je Bauteil nach der Formel deines Betriebs: Folienbedarf, Verschnitt, Materialaufschlag und Arbeitszeit mit deinem Stundensatz. Die Werte pflegst du selbst im Leistungskatalog; gerechnet wird nach festen Regeln, nie von einem Sprachmodell. Der Assistent kann aus Kundenfotos ein Angebot vorbereiten, du prüfst es in der Freigabe.",
    ],
  },
  faq: [
    [
      "Wie hoch sollte der Verschnitt bei der Folierung sein?",
      "Eine allgemeingültige Zahl gibt es nicht. Der Verschnitt hängt vom Bauteil, von der Folie und von deiner Routine ab. Lege ihn je Bauteilart fest und prüfe ihn nach jedem Auftrag gegen den echten Verbrauch.",
    ],
    [
      "Pauschal oder je Bauteil anbieten?",
      "Je Bauteil ist nachvollziehbarer: Der Kunde sieht, woraus der Preis entsteht, und du kannst Teilfolierungen und Änderungswünsche sauber nachrechnen.",
    ],
  ],
  weiter: ["/folierer/", "/ratgeber/folienrollen-verwalten/", "/ratgeber/fahrzeugannahme-dokumentieren/"],
};

export const ANNAHME: Inhalt = {
  pfad: "/ratgeber/fahrzeugannahme-dokumentieren/",
  titel: "Fahrzeugannahme dokumentieren: Zustandsprotokoll",
  h1: "Fahrzeugannahme dokumentieren: Das gehört ins Zustandsprotokoll.",
  lead:
    "Ein Kratzer, der „schon vorher da war“, ist der häufigste Streit nach einer Aufbereitung oder Folierung. Ein sauberes Zustandsprotokoll mit Fotos klärt ihn, bevor er entsteht.",
  beschreibung:
    "Zustandsprotokoll bei der Fahrzeugannahme: Was Aufbereiter und Folierer festhalten sollten, von Fotos über Lackdicke bis zur Unterschrift. Mit Checkliste.",
  kurz: "Fotos, Schäden, Lackdicke, Unterschrift: Was bei der Annahme dokumentiert werden sollte.",
  stand: "2026-10-13",
  bloecke: [
    {
      h2: "Warum die Annahme dokumentiert werden sollte",
      p: [
        "Wenn ein Kunde nach der Abholung einen Schaden meldet, zählt, was bei der Annahme festgehalten wurde. Ohne Protokoll steht Aussage gegen Aussage. Mit Protokoll, Fotos und Unterschrift hast du eine Grundlage für das Gespräch. Wie belastbar sie im Streitfall ist, hängt vom Einzelfall ab; das ist keine Rechtsberatung.",
      ],
    },
    {
      h2: "Was ins Protokoll gehört",
      liste: [
        "Kunde und Fahrzeug: Name, Kennzeichen, Fahrzeug-Identifizierungsnummer (FIN), Kilometerstand",
        "Zustand außen und innen, zum Beispiel Steinschläge, Kratzer, Dellen, Verschmutzung",
        "Zubehör und Gegenstände im Fahrzeug",
        "Fotos rundum: immer gleiche Ansichten in gleicher Reihenfolge, dazu Detailfotos der Schäden",
        "Schäden auf einem Fahrzeugumriss markiert, damit die Stelle eindeutig ist",
        "Lackschichtdicke in µm je Bauteil, vor allem vor Politur oder Folierung",
        "Datum, Uhrzeit und Unterschrift des Kunden",
      ],
    },
    {
      h2: "Praxis-Tipps",
      p: [
        "Fotografiere vor der Wäsche und bei gutem Licht, damit Kratzer sichtbar sind. Nimm die Ansichten immer in derselben Reihenfolge auf, dann fehlt nie eine. Lass das Protokoll unterschreiben, bevor die Arbeit beginnt, und gib dem Kunden eine Kopie.",
        "Die Lackdicke hilft zwei Mal: Sie zeigt vorhandene Nachlackierungen, und sie warnt vor einer Politur an Stellen, an denen kaum Lack übrig ist.",
      ],
    },
  ],
  mobilnova: {
    h2: "Wie mobilnova dabei hilft",
    p: [
      "Die digitale Annahme läuft am Tablet: Zustand, Fotos, Schäden auf dem Fahrzeugschema, Lackdicke und Unterschrift. Welche Ansichten Pflicht sind, legst du für deinen Betrieb fest; ohne die Pflichtansichten schließt die Annahme nicht ab. Der Kunde bekommt das Protokoll als PDF.",
    ],
  },
  faq: [
    [
      "Muss der Kunde bei der Annahme unterschreiben?",
      "Vorgeschrieben ist es nicht, aber üblich und sinnvoll. Die Unterschrift zeigt, dass der Kunde den dokumentierten Zustand zur Kenntnis genommen hat.",
    ],
  ],
  weiter: ["/aufbereiter/", "/folierer/", "/ratgeber/fahrzeugfolierung-angebot-kalkulieren/"],
};

export const ERECHNUNG: Inhalt = {
  pfad: "/ratgeber/e-rechnung-folierer-aufbereiter/",
  titel: "E-Rechnung für Folierer und Aufbereiter: Fristen",
  h1: "E-Rechnung für Folierer und Aufbereiter: Was wann gilt.",
  lead:
    "Seit dem 1. Januar 2025 muss jeder Betrieb E-Rechnungen empfangen können. Das Ausstellen wird in Stufen Pflicht, die letzte Frist endet am 31. Dezember 2027. Der Überblick für Betriebe, Stand 13. Oktober 2026.",
  beschreibung:
    "E-Rechnung für Folierer und Aufbereiter: Wer sie braucht, welche Fristen bis 2028 gelten, was Kleinunternehmer beachten, XRechnung und ZUGFeRD erklärt.",
  kurz: "Wer eine E-Rechnung braucht, welche Fristen gelten und was das für Privat- und Gewerbekunden heißt.",
  stand: "2026-10-13",
  bloecke: [
    {
      h2: "Was eine E-Rechnung ist",
      p: [
        "Eine E-Rechnung ist eine Rechnung in einem strukturierten, maschinenlesbaren Format, das Software automatisch verarbeiten kann. In Deutschland sind das vor allem XRechnung und ZUGFeRD (ab Version 2.0.1). Ein einfaches PDF, das du per E-Mail schickst, ist keine E-Rechnung im Sinne der Pflicht.",
      ],
    },
    {
      h2: "Wen sie betrifft: Gewerbekunden ja, Privatkunden nein",
      p: [
        "Die Pflicht gilt für Umsätze zwischen inländischen Unternehmen (B2B). Rechnungen an Privatkunden sind nicht betroffen, ebenso wenig Kleinbetragsrechnungen bis 250 €. Wenn du also hauptsächlich Privatkunden bedienst, ändert sich beim Ausstellen zunächst wenig. Sobald du Flotten, Autohäuser, Händler oder andere Firmen als Kunden hast, betrifft es dich.",
      ],
    },
    {
      h2: "Die Fristen im Überblick",
      liste: [
        "Seit 1. Januar 2025: Jeder Betrieb muss E-Rechnungen empfangen können. Dafür reicht ein E-Mail-Postfach, das solche Rechnungen annimmt.",
        "Bis 31. Dezember 2026: Du darfst B2B-Rechnungen weiter als Papier oder, mit Zustimmung des Empfängers, in einem anderen elektronischen Format wie PDF ausstellen.",
        "Bis 31. Dezember 2027: Das gilt weiter, wenn dein Umsatz im Vorjahr höchstens 800.000 € betrug.",
        "Ab 1. Januar 2028: Alle Betriebe stellen B2B-Rechnungen als E-Rechnung aus.",
      ],
    },
    {
      h2: "Sonderfall Kleinunternehmer",
      p: [
        "Kleinunternehmer nach § 19 UStG müssen keine E-Rechnungen ausstellen. Empfangen müssen sie sie wie alle anderen können, zum Beispiel Rechnungen ihrer Folienlieferanten.",
      ],
    },
    {
      h2: "Was du jetzt tun kannst",
      liste: [
        "Prüfe, ob dein E-Mail-Postfach E-Rechnungen von Lieferanten annehmen kann.",
        "Kläre mit deinem Steuerberater, wie Eingangs-E-Rechnungen archiviert werden. E-Rechnungen müssen unveränderbar im Originalformat aufbewahrt werden.",
        "Stelle fest, welche deiner Kunden Gewerbekunden sind, und frage nach deren Wunsch.",
        "Nutze eine Rechnungssoftware, die XRechnung oder ZUGFeRD ausstellen kann.",
      ],
    },
    {
      h2: "Hinweis",
      p: [
        "Dieser Text gibt den Stand vom 13. Oktober 2026 wieder und ersetzt keine Steuerberatung. Prüfe Einzelfälle mit deinem Steuerberater.",
      ],
    },
  ],
  mobilnova: {
    h2: "Wie mobilnova dabei hilft",
    p: [
      "In mobilnova kannst du Rechnungen auf Wunsch als E-Rechnung (XRechnung oder ZUGFeRD) ausstellen. Für den Steuerberater gibt es einen DATEV-Export (CSV). Eingangsrechnungen von Folienlieferanten lassen sich ins Material- und Rollenlager übernehmen.",
    ],
  },
  faq: [
    [
      "Reicht ein PDF per E-Mail als E-Rechnung?",
      "Nein. Ein PDF ist ein sonstiges elektronisches Format. Es ist übergangsweise noch erlaubt, aber keine E-Rechnung im Sinne der Pflicht.",
    ],
    [
      "Muss ich als Kleinunternehmer E-Rechnungen ausstellen?",
      "Nein, die Pflicht zum Ausstellen entfällt für Kleinunternehmer nach § 19 UStG. Empfangen können musst du sie trotzdem.",
    ],
  ],
  weiter: ["/folierer/", "/aufbereiter/", "/ratgeber/fahrzeugfolierung-angebot-kalkulieren/"],
};

export const ROLLEN: Inhalt = {
  pfad: "/ratgeber/folienrollen-verwalten/",
  titel: "Folienrollen verwalten: Rollenrest und Charge",
  h1: "Folienrollen verwalten: Rollenrest, Charge und Lagerort.",
  lead:
    "Vier angebrochene Rollen derselben Folie im Regal, und niemand weiß, welche noch wie viele Meter hat. Das lässt sich mit wenigen Angaben je Rolle lösen.",
  beschreibung:
    "Folienrollen im Betrieb verwalten: Welche Angaben je Rolle sinnvoll sind, wie du den Rollenrest führst, warum die Charge zählt und wie ein QR-Etikett hilft.",
  kurz: "Welche Angaben je Rolle zählen und wie du Rollenrest, Charge und Lagerort nachverfolgst.",
  stand: "2026-10-13",
  bloecke: [
    {
      h2: "Das Problem: angebrochene Rollen",
      p: [
        "Folie wird in Metern von der Rolle verbraucht. Bei jedem Auftrag bleibt ein Rest übrig, und mit der Zeit liegen mehrere angebrochene Rollen derselben Serie im Regal. Ohne Aufzeichnung entscheidet das Gedächtnis, ob für den nächsten Auftrag genug da ist.",
      ],
    },
    {
      h2: "Diese Angaben gehören zu jeder Rolle",
      liste: [
        "Hersteller, Serie, Farbe beziehungsweise Farbcode und Finish",
        "Rollenbreite in Zentimetern und gelieferte Länge in Metern",
        "Chargen- oder Rollennummer des Herstellers",
        "Eingangsdatum und Lagerort",
        "Anbruchdatum, also der Tag des ersten Verbrauchs",
      ],
    },
    {
      h2: "Rollenrest führen",
      p: [
        "Der Rest ergibt sich aus der gelieferten Länge minus aller gebuchten Verbräuche. Buche den Verbrauch pro Auftrag in Metern, nicht nach Gefühl. Zählst du zusätzlich in regelmäßigen Abständen nach (Inventur), siehst du Abweichungen früh und kannst rechtzeitig nachbestellen.",
      ],
    },
    {
      h2: "Warum die Charge zählt",
      p: [
        "Bei Garantiefragen und Reklamationen fragen Hersteller häufig nach der Charge der verwendeten Folie. Wenn du je Auftrag festhältst, aus welcher Rolle der Verbrauch kam, hast du die Antwort sofort und musst nicht im Lager suchen.",
      ],
    },
    {
      h2: "Etikett mit QR-Code",
      p: [
        "Ein Etikett mit QR-Code auf jeder Rolle löst das Zuordnungsproblem: Du scannst die Rolle mit dem Handy und siehst Rest, Charge und Lagerort, ohne eine Liste durchzusuchen.",
      ],
    },
  ],
  mobilnova: {
    h2: "Wie mobilnova dabei hilft",
    p: [
      "mobilnova führt das Folienlager je Rolle: Hersteller, Serie, Farbcode, Finish, Breite, Charge, Lagerort und Anbruchdatum. Verbrauch und Wareneingang bewegen den Rollenrest, die Inventur zählt Rolle für Rolle oder die Gesamtmenge. Zu jeder Rolle gibt es ein Etikett mit QR-Code, das am Handy genau diese Rolle öffnet. Das Folienregal zeigt alle Rollen.",
    ],
  },
  faq: [
    [
      "Reicht eine Excel-Liste für das Folienlager?",
      "Für den Anfang ja. Spätestens, wenn mehrere Personen Folie entnehmen oder die Charge für die Garantie gebraucht wird, lohnt sich eine Lösung, die den Verbrauch direkt am Auftrag bucht.",
    ],
  ],
  weiter: ["/folierer/", "/ratgeber/fahrzeugfolierung-angebot-kalkulieren/"],
};

export const RATGEBER_ARTIKEL: Inhalt[] = [KALKULATION, ANNAHME, ERECHNUNG, ROLLEN];

export const RATGEBER_INDEX: Inhalt = {
  pfad: "/ratgeber/",
  titel: "Ratgeber für Folierer und Aufbereiter",
  h1: "Ratgeber für Folierer und Aufbereiter.",
  lead:
    "Kurze, praktische Texte aus dem Betriebsalltag: Angebote kalkulieren, Fahrzeuge annehmen, Folie verwalten und Rechnungen richtig stellen.",
  beschreibung:
    "Ratgeber für Folier-, PPF- und Aufbereitungsbetriebe: Angebot kalkulieren, Fahrzeugannahme dokumentieren, Folienrollen verwalten, E-Rechnung.",
  kurz: "",
  stand: "2026-10-13",
  bloecke: [],
  weiter: ["/folierer/", "/aufbereiter/"],
};
