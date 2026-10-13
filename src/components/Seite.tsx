import type { ReactNode } from "react";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { nachPfad } from "@/content/alle";
import type { Inhalt } from "@/content/typen";
import { absolut, istArtikel, SITE_NAME } from "@/lib/seo";

// Rumpf aller Unterseiten: Brotkrumen, Überschrift, Inhaltsblöcke, FAQ, Verweise, Aufruf zum Handeln.
export default function Seite({ inhalt, children }: { inhalt: Inhalt; children?: ReactNode }) {
  const artikel = istArtikel(inhalt);
  const krumen: [string, string][] = [["Startseite", "/"]];
  if (artikel) krumen.push(["Ratgeber", "/ratgeber/"]);
  krumen.push([inhalt.h1.replace(/\.$/, ""), inhalt.pfad]);
  const kurzname = inhalt.titel;

  const daten: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: krumen.map(([name, pfad], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: i === krumen.length - 1 ? kurzname : name,
        item: absolut(pfad),
      })),
    },
  ];
  if (artikel) {
    daten.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: inhalt.h1,
      description: inhalt.beschreibung,
      inLanguage: "de-DE",
      datePublished: inhalt.stand,
      dateModified: inhalt.stand,
      mainEntityOfPage: absolut(inhalt.pfad),
      image: absolut("/og.png"),
      author: { "@type": "Organization", name: SITE_NAME, url: absolut("/") },
      publisher: { "@type": "Organization", name: SITE_NAME, url: absolut("/"), logo: { "@type": "ImageObject", url: absolut("/logo.png") } },
    });
  }
  if (inhalt.faq?.length) {
    daten.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: inhalt.faq.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }

  return (
    <>
      {daten.map((d, i) => (
        <JsonLd key={i} daten={d} />
      ))}
      <a className="skip" href="#inhalt">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="inhalt">
        <article className="page">
          <div className="wrap">
            <nav className="crumbs mono faint" aria-label="Brotkrumen">
              {krumen.map(([name, pfad], i) => {
                const letzte = i === krumen.length - 1;
                return (
                  <span key={pfad}>
                    {letzte ? <span aria-current="page">{kurzname}</span> : <a href={pfad}>{name}</a>}
                    {letzte ? null : " / "}
                  </span>
                );
              })}
            </nav>
            <h1>{inhalt.h1}</h1>
            <p className="lead">{inhalt.lead}</p>
            {artikel ? (
              <p className="note stand">Stand: {new Date(inhalt.stand).toLocaleDateString("de-DE")}</p>
            ) : null}

            <div className="prose">
              {inhalt.bloecke.map((b) => (
                <section key={b.h2}>
                  <h2>{b.h2}</h2>
                  {b.p?.map((t) => <p key={t}>{t}</p>)}
                  {b.liste ? (
                    <ul>
                      {b.liste.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              {children}

              {inhalt.mobilnova ? (
                <section className="hilfe">
                  <h2>{inhalt.mobilnova.h2}</h2>
                  {inhalt.mobilnova.p?.map((t) => <p key={t}>{t}</p>)}
                </section>
              ) : null}

              {inhalt.faq?.length ? (
                <section>
                  <h2>Häufige Fragen</h2>
                  <div className="faq">
                    {inhalt.faq.map(([q, a]) => (
                      <details key={q}>
                        <summary>{q}</summary>
                        <p>{a}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>

            {inhalt.weiter.length ? (
              <aside className="weiter">
                <p className="mono faint">Weiterlesen</p>
                <ul>
                  {inhalt.weiter.map((pfad) => {
                    const ziel = nachPfad(pfad);
                    return (
                      <li key={pfad}>
                        <a href={pfad}>{ziel.titel}</a>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            ) : null}

            <div className="seitencta">
              <h2>Sprich mit uns, bevor du entscheidest.</h2>
              <p>Fünf Pilotplätze. Im Pilotgespräch klären wir, ob der Assistent zu deinem Betrieb passt.</p>
              <Cta stelle={`seite${inhalt.pfad.replace(/\/$/, "").replace(/\//g, "-")}`} />
              <p className="note" style={{ marginTop: "1rem" }}>
                Der Pilot dauert zwei Monate und kostet einmalig 99 € zzgl. USt. Informationsseite, kein Vertragsangebot.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
