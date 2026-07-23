import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mobilnova.de"),
  title: "Mobilnova — Software für Fahrzeugaufbereiter",
  description:
    "Die Betriebssoftware für Fahrzeugaufbereiter: digitale Fahrzeugannahme am Tablet, " +
    "Angebot, Auftrag, E-Rechnung und Kundengewinnung — alles an einem Ort. Jetzt auf die Warteliste.",
  applicationName: "Mobilnova",
  keywords: [
    "Fahrzeugaufbereitung Software",
    "Aufbereiter Software",
    "Detailing Software",
    "Fahrzeugannahme App",
    "E-Rechnung",
    "Folierung",
    "Keramikversiegelung",
  ],
  authors: [{ name: "Glanz Fahrzeugaufbereitung" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://mobilnova.de",
    siteName: "Mobilnova",
    title: "Mobilnova — Software für Fahrzeugaufbereiter",
    description:
      "Digitale Fahrzeugannahme, Angebot, Auftrag, E-Rechnung und Kundengewinnung — " +
      "die Software für den Aufbereitungs-Alltag. Auf die Warteliste eintragen.",
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
