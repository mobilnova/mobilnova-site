// m-Kachel: Neon auf Carbon. Dieselbe Form wie das Favicon (src/app/icon.svg).
export default function Logo() {
  return (
    <a className="logo" href="/" aria-label="mobilnova, zur Startseite">
      <svg className="tile" width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#c8f03c" />
        <path
          d="M8.5 23V12M8.5 16.5c0-3.4 2-4.8 4.3-4.8 2.4 0 3.2 1.5 3.2 3.6V23M16 16.5c0-3.4 2-4.8 4.3-4.8 2.4 0 3.2 1.5 3.2 3.6V23"
          fill="none"
          stroke="#0a0c0f"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="logo-word">mobilnova</span>
    </a>
  );
}
