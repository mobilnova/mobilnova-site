// Formulare (Pilotgespräch, Warteliste, Umfrage) laufen als eigener Dienst unter
// autopilot.mobilnova.de (Repo mobilnova-validation, Railway). EINZIGE Stelle für die Adresse;
// die Kurzlinks mobilnova.de/autopilot/ und mobilnova.de/umfrage/ (public/) leiten ebenfalls dorthin.
export const FORMULAR_BASE = "https://autopilot.mobilnova.de";

// Jeder Link von dieser Seite trägt utm_source=website, damit die Auswertung ihn von DMs und
// Anzeigen trennen kann; utm_medium sagt, von welcher Stelle der Seite der Klick kam.
const mitHerkunft = (stelle: string, art: "pilot" | "warteliste") =>
  `${FORMULAR_BASE}/anfrage/?art=${art}&utm_source=website&utm_medium=${encodeURIComponent(stelle)}`;

export const PILOTGESPRAECH = (stelle: string) => mitHerkunft(stelle, "pilot");
export const WARTELISTE = (stelle: string) => mitHerkunft(stelle, "warteliste");

export const APP_LOGIN = "https://app.mobilnova.de/login";
export const KONTAKT_MAIL = "info@mobilnova.de";
