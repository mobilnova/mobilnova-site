// Die Seiten /autopilot (Preis, Warteliste, Pilotplätze) und /umfrage laufen als eigener Dienst
// (Repo mobilnova-validation, Railway). EINZIGE Stelle für die Adresse; die Kurzlinks
// mobilnova.de/autopilot/ und mobilnova.de/umfrage/ (public/) leiten ebenfalls dorthin.
export const AUTOPILOT_BASE = "https://autopilot.mobilnova.de";

// Jeder Link von dieser Seite trägt utm_source=website, damit die Auswertung ihn von DMs und
// Anzeigen trennen kann; utm_medium sagt, von welcher Stelle der Seite der Klick kam.
export const AUTOPILOT = (stelle: string) =>
  `${AUTOPILOT_BASE}/autopilot/?utm_source=website&utm_medium=${encodeURIComponent(stelle)}`;
