export const APP_LOGIN = "https://app.mobilnova.de/login";
export const KONTAKT_MAIL = "info@mobilnova.de";
// Gleiche Angaben wie im Impressum (public/impressum.html).
export const KONTAKT_NAME = "Twan Vandenbroucke";
export const KONTAKT_TELEFON = "0160 3367626";
export const KONTAKT_TELEFON_LINK = "tel:+491603367626";

// Pilotgespräche werden per E-Mail angefragt. Der Dienst autopilot.mobilnova.de mit Formularen,
// Warteliste und Umfrage wird geschlossen; die Kurzlinks in public/autopilot und public/umfrage
// leiten deshalb auf die Startseite.
const ANFRAGE_BETREFF = "Pilotgespräch mobilnova";
const ANFRAGE_TEXT = "Hallo,\n\nich möchte ein Pilotgespräch.\n\nBetrieb:\nGewerk:\nTelefon (optional):\n";

export const PILOTGESPRAECH = `mailto:${KONTAKT_MAIL}?subject=${encodeURIComponent(ANFRAGE_BETREFF)}&body=${encodeURIComponent(ANFRAGE_TEXT)}`;
