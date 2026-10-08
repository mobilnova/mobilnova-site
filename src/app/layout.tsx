import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const TITEL = "mobilnova. Der Betrieb läuft. Du entscheidest.";
const BESCHREIBUNG =
  "Der digitale Assistent für deinen Betrieb: Anfragen, Angebote, Termine, Rechnungen. Du gibst frei. " +
  "Für Folierer und Aufbereiter. Pilotphase, fünf Plätze.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mobilnova.de"),
  title: TITEL,
  description: BESCHREIBUNG,
  applicationName: "mobilnova",
  authors: [{ name: "mobilnova" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://mobilnova.de",
    siteName: "mobilnova",
    title: TITEL,
    description: BESCHREIBUNG,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "mobilnova" }],
  },
  alternates: { canonical: "https://mobilnova.de" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0c0f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preload" href="/fonts/manrope-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/jetbrains-mono-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        {/* Reichweitenmessung mit Umami (ohne Cookies), siehe Datenschutzerklärung Abschnitt 4. */}
        <Script
          src="https://umami.bluecore.cards/script.js"
          data-website-id="c7078693-771d-4d6d-92ef-79f4d7ed8dda"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
