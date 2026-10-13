// Inhalte der Unterseiten (Segmente und Ratgeber) als Daten. Eine Seite = ein Eintrag.
// Aussagen zum Produkt dürfen nur stehen, was auch auf der Startseite belegt ist.

export type Block = { h2: string; p?: string[]; liste?: string[] };

export type Inhalt = {
  pfad: string; // mit führendem und abschließendem Schrägstrich, z. B. "/folierer/"
  titel: string; // <title> ohne Zusatz " | mobilnova"
  h1: string;
  lead: string;
  beschreibung: string; // Meta-Description, höchstens 160 Zeichen
  kurz: string; // Teaser für Übersichten
  stand: string; // ISO-Datum der letzten inhaltlichen Änderung
  bloecke: Block[];
  mobilnova?: Block; // „Wie mobilnova dabei hilft“
  faq?: [string, string][];
  weiter: string[]; // Pfade verwandter Seiten
};
