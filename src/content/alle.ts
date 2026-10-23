import type { Inhalt } from "@/content/typen";
import { AUFBEREITER, BRANCHEN, FOLIERER } from "@/content/segmente";
import { RATGEBER_ARTIKEL, RATGEBER_INDEX } from "@/content/ratgeber";

// Alle Unterseiten; Grundlage für Sitemap, Verweise und Tests.
export const SEITEN: Inhalt[] = [BRANCHEN, FOLIERER, AUFBEREITER, RATGEBER_INDEX, ...RATGEBER_ARTIKEL];

export const nachPfad = (pfad: string): Inhalt => {
  const treffer = SEITEN.find((s) => s.pfad === pfad);
  if (!treffer) throw new Error(`Unbekannte Seite: ${pfad}`);
  return treffer;
};
