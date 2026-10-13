import Seite from "@/components/Seite";
import { RATGEBER_ARTIKEL } from "@/content/ratgeber";
import { metaFuer } from "@/lib/seo";

// Statischer Export: alle Artikel werden beim Build erzeugt, andere Adressen gibt es nicht.
export const dynamicParams = false;

const slugVon = (pfad: string) => pfad.split("/").filter(Boolean)[1];
const finde = (slug: string) => RATGEBER_ARTIKEL.find((a) => slugVon(a.pfad) === slug)!;

export function generateStaticParams() {
  return RATGEBER_ARTIKEL.map((a) => ({ slug: slugVon(a.pfad) }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return metaFuer(finde(params.slug));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <Seite inhalt={finde(params.slug)} />;
}
