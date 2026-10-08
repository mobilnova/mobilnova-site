import type { ReactNode } from "react";

// Beschriftung links (Nummer + Eyebrow in Mono), Inhalt rechts. Auf dem Handy untereinander.
export default function Section({
  id,
  no,
  label,
  className,
  children,
}: {
  id?: string;
  no: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`sec ${className ?? ""}`} id={id}>
      <div className="wrap sec-grid">
        <p className="label mono">
          <b>{no}</b>
          {label}
        </p>
        <div className="body">{children}</div>
      </div>
    </section>
  );
}
