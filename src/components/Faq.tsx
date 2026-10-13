import Section from "@/components/Section";
import { FAQ } from "@/content/faq";

export default function Faq() {
  return (
    <Section id="fragen" no="08" label="Fragen">
      <h2>Kurz beantwortet.</h2>
      <div className="faq">
        {FAQ.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
