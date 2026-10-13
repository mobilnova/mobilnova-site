// Strukturierte Daten (schema.org) als JSON-LD. „<“ wird maskiert, damit nichts den Script-Block beendet.
export default function JsonLd({ daten }: { daten: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(daten).replace(/</g, "\\u003c") }}
    />
  );
}
