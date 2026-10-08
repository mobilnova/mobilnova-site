// Echtes Logo (Zeichen und Wortmarke, nebeneinander gesetzt). Darstellung 40 px hoch, Datei 160 px hoch.
export default function Logo({ hoehe = 40 }: { hoehe?: number }) {
  return (
    <a className="logo" href="/" aria-label="mobilnova, zur Startseite">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="mobilnova" height={hoehe} width={Math.round((hoehe * 766) / 160)} />
    </a>
  );
}
