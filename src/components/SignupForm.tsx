"use client";

import { useState } from "react";

// Formspree verarbeitet die Anmeldungen (statisches Hosting kann keine Formulare selbst
// entgegennehmen). EINZIGE Stelle, die zum Ändern des Ziels angepasst werden muss:
const FORM_ENDPOINT = "https://formspree.io/f/mlgqwzjv";

type NoteState = { text: string; ok: boolean } | null;

export default function SignupForm() {
  const [sent, setSent] = useState(false);
  const [note, setNote] = useState<NoteState>(null);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const consent = (form.elements.namedItem("einwilligung") as HTMLInputElement).checked;
    if (!email) return;
    if (!consent) {
      setNote({ text: "Bitte bestätige kurz die Einwilligung.", ok: false });
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setSent(true);
        setNote({ text: "Danke! Du stehst auf der Liste — wir melden uns zum Start. ✨", ok: true });
      } else {
        setNote({ text: "Senden hat nicht geklappt — bitte gleich noch einmal versuchen.", ok: false });
      }
    } catch {
      setNote({ text: "Senden hat nicht geklappt — bitte gleich noch einmal versuchen.", ok: false });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form
      id="signup"
      className={`signup${sent ? " sent" : ""}`}
      name="interesse"
      method="POST"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" value="Neue Mobilnova-Anmeldung (Warteliste)" />
      <div className="hp" aria-hidden="true">
        <label>
          Nicht ausfüllen <input name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="row">
        <input
          className="in"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="deine@email.de"
          aria-label="E-Mail-Adresse"
        />
        <button className="btn" type="submit" disabled={busy}>
          {busy ? "Wird gesendet …" : "Frühen Zugang sichern"}
        </button>
      </div>
      <input
        className="in in-full"
        type="text"
        name="betrieb"
        autoComplete="organization"
        placeholder="Betrieb & Ort (optional)"
        aria-label="Betrieb und Ort"
      />
      <label className="consent">
        <input type="checkbox" name="einwilligung" required />
        <span>
          Informiert mich per E-Mail zum Start von Mobilnova. Jederzeit abbestellbar — es gilt die{" "}
          <a href="/datenschutz.html">Datenschutzerklärung</a>.
        </span>
      </label>
      <p className={`formnote${note ? (note.ok ? " ok" : " err") : ""}`} role="status" aria-live="polite">
        {note?.text ?? ""}
      </p>
    </form>
  );
}
