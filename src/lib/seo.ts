import type { Metadata } from "next";
import type { Inhalt } from "@/content/typen";

export const SITE_URL = "https://mobilnova.de";
export const SITE_NAME = "mobilnova";

export const istArtikel = (i: Inhalt) => i.pfad.startsWith("/ratgeber/") && i.pfad !== "/ratgeber/";

// metadataBase (layout.tsx) löst die relativen Pfade auf. Canonical und Open Graph müssen je Seite
// gesetzt werden, weil Next die Angaben aus dem Layout sonst auf jede Unterseite erbt.
export function metaFuer(i: Inhalt): Metadata {
  const titel = `${i.titel} | ${SITE_NAME}`;
  return {
    title: i.titel,
    description: i.beschreibung,
    alternates: { canonical: i.pfad },
    openGraph: {
      type: istArtikel(i) ? "article" : "website",
      locale: "de_DE",
      url: i.pfad,
      siteName: SITE_NAME,
      title: titel,
      description: i.beschreibung,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE_NAME }],
    },
  };
}

export const absolut = (pfad: string) => `${SITE_URL}${pfad}`;
