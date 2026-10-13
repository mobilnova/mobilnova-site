import type { MetadataRoute } from "next";
import { SEITEN } from "@/content/alle";
import { absolut } from "@/lib/seo";

// Statischer Export: die Sitemap wird beim Build als /sitemap.xml geschrieben.
export const dynamic = "force-static";

const STARTSEITE_GEAENDERT = "2026-10-13";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absolut("/"), lastModified: STARTSEITE_GEAENDERT },
    ...SEITEN.map((s) => ({ url: absolut(s.pfad), lastModified: s.stand })),
  ];
}
