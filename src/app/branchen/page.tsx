import Seite from "@/components/Seite";
import { BRANCHEN } from "@/content/segmente";
import { metaFuer } from "@/lib/seo";

export const metadata = metaFuer(BRANCHEN);

export default function Page() {
  return <Seite inhalt={BRANCHEN} />;
}
