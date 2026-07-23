import type { Config } from "tailwindcss";

// Chrom-Blau-Palette von Mobilnova (hell, fest) — als Tailwind-Farben verfügbar gemacht,
// damit die reworkten Sektionen dieselben Töne nutzen wie der (beibehaltene) Hero.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#e9f1f8",
        panel: "#ffffff",
        "panel-2": "#f2f8fc",
        sink: "#e2edf5",
        ink: "#0c1a24",
        muted: "#4c6273",
        faint: "#7d95a6",
        line: "#d7e4ee",
        "line-2": "#e8f0f7",
        accent: "#0e6f95",
        "accent-2": "#1fb3d8",
        "accent-3": "#0a4f6c",
        "accent-bg": "#e0f0f7",
        "accent-line": "#bfe1ec",
        good: "#1c9a68",
        "good-bg": "#dcf1e8",
        amber: "#e0902f",
        danger: "#dd5a52",
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "Arial", "sans-serif"],
        serif: ['"Iowan Old Style"', "Charter", "Georgia", '"Times New Roman"', "serif"],
        mono: ["ui-monospace", '"SF Mono"', '"Cascadia Mono"', "Menlo", "Consolas", "monospace"],
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "18px",
        xl: "24px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(13,40,60,.06)",
        DEFAULT: "0 1px 2px rgba(13,40,60,.05),0 12px 30px rgba(13,40,60,.09)",
        lg: "0 34px 64px -24px rgba(9,58,84,.4),0 12px 26px rgba(9,58,84,.12)",
      },
      backgroundImage: {
        grad: "linear-gradient(135deg,#1aa6c9 0%,#0e6f95 100%)",
        "grad-soft": "linear-gradient(135deg,#e8f6fb,#dbeef6)",
      },
      maxWidth: {
        wrap: "74rem",
      },
    },
  },
  plugins: [],
};

export default config;
