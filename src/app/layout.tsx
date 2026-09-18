import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mobilnova.de"),
  title: "mobilnova Autopilot — Foto rein, Angebot raus",
  description:
    "Betriebsverwaltung mit Assistenten für Folierer, PPF- und Aufbereitungsbetriebe: " +
    "Angebot aus Kundenfotos, Anfragen, Termin und Rechnung. Du gibst nur frei. In Entwicklung – Warteliste offen.",
  applicationName: "mobilnova",
  keywords: [
    "Folierung Software",
    "Car Wrapping Software",
    "PPF Software",
    "Fahrzeugaufbereitung Software",
    "Angebot aus Fotos",
    "E-Rechnung",
  ],
  authors: [{ name: "mobilnova" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://mobilnova.de",
    siteName: "mobilnova",
    title: "mobilnova Autopilot — Foto rein, Angebot raus",
    description:
      "Für Folierer, PPF- und Aufbereitungsbetriebe. Deine Assistenten sollen Angebot, " +
      "Antwort, Termin und Rechnung vorbereiten. In Entwicklung – fünf Pilotplätze.",
  },
  alternates: { canonical: "https://mobilnova.de" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e6f95",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {children}
        {/* Reichweitenmessung mit Umami (datensparsam, ohne Cookies) — siehe Datenschutz §5. */}
        <Script
          src="https://umami.bluecore.cards/script.js"
          data-website-id="c7078693-771d-4d6d-92ef-79f4d7ed8dda"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
