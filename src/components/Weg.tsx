import Section from "@/components/Section";

export default function Weg() {
  return (
    <Section id="weg" no="06" label="Der Weg">
      <h2>
        Erst beweisen. <span className="acc">Dann schnell wachsen.</span>
      </h2>
      <p>
        Du kennst Software, die alles verspricht. Darum fangen wir klein an und zeigen zuerst, dass der
        Assistent in einer Branche wirklich Büroarbeit abnimmt. Danach übertragen wir ihn zügig. Das ist
        unser Plan, kein Vertragsangebot.
      </p>

      <ol className="plan" aria-label="Fahrplan in drei Schritten mit einem Beweis-Tor">
        <li className="step">
          <p className="mono faint">1 · Beachhead</p>
          <h3>Fahrzeugveredelung</h3>
          <p>
            Folierer, PPF- und Aufbereitungsbetriebe mit 2 bis 10 Mitarbeitern in Deutschland. Anfrage um
            21 Uhr, Foto vom Kunden, Angebot am nächsten Morgen. Wir vergeben fünf Pilotplätze und testen
            den Assistenten auch im eigenen Betrieb.
          </p>
        </li>
        <li className="step">
          <p className="mono faint">2 · Beweis</p>
          <h3>Pilotbetriebe messen</h3>
          <p>
            Vier Dinge: Bürostunden pro Woche, Antwortzeit auf Anfragen, Anteil der Entwürfe, die Inhaber
            unverändert freigeben, und ob Betriebe nach dem Pilot dabeibleiben. Wir veröffentlichen die
            Zahlen.
          </p>
        </li>
        <li className="gate">
          <span className="mono">Tor</span>
          <p>Erst wenn die vier Pilotzahlen stehen, beginnt die Erweiterung.</p>
        </li>
        <li className="step later">
          <p className="mono faint">3 · Erweiterung</p>
          <h3>Schnell übertragen</h3>
          <p>
            Jedes neue Gewerk bekommt ein Branchenpaket mit eigenen Fachbegriffen, Kalkulationsregeln und
            Vorlagen, eingestellt statt neu gebaut. Zuerst angrenzende Branchen und weitere Länder, etwa
            Kfz-Werkstätten und DACH. Danach Gewerke wie Elektro, Heizung und Sanitär oder Garten- und
            Landschaftsbau.
          </p>
        </li>
      </ol>
      <p className="note" style={{ marginTop: "1.6rem" }}>
        <span className="desk">Tor: Erst wenn die vier Pilotzahlen stehen, beginnt die Erweiterung. </span>
        Die Felder zeigen die Reihenfolge, keine Zeiträume.
      </p>

      <p className="goal">
        <span className="mono faint">Unser Ziel am Ende</span>
        Ein Assistent, der den digitalen Teil eines kleinen Betriebs führt, in vielen Gewerken, und bei dem
        der Inhaber immer entscheidet.
      </p>
    </Section>
  );
}
