import Seite from "@/components/Seite";
import { FOLIERER } from "@/content/segmente";
import { metaFuer } from "@/lib/seo";

export const metadata = metaFuer(FOLIERER);

export default function Page() {
  return <Seite inhalt={FOLIERER} />;
}
