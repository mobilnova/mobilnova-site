import Seite from "@/components/Seite";
import { AUFBEREITER } from "@/content/segmente";
import { metaFuer } from "@/lib/seo";

export const metadata = metaFuer(AUFBEREITER);

export default function Page() {
  return <Seite inhalt={AUFBEREITER} />;
}
