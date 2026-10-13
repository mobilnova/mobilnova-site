import Seite from "@/components/Seite";
import { RATGEBER_ARTIKEL, RATGEBER_INDEX } from "@/content/ratgeber";
import { metaFuer } from "@/lib/seo";

export const metadata = metaFuer(RATGEBER_INDEX);

export default function Page() {
  return (
    <Seite inhalt={RATGEBER_INDEX}>
      <ul className="artikel">
        {RATGEBER_ARTIKEL.map((a) => (
          <li key={a.pfad}>
            <h2>
              <a href={a.pfad}>{a.titel}</a>
            </h2>
            <p>{a.kurz}</p>
          </li>
        ))}
      </ul>
    </Seite>
  );
}
