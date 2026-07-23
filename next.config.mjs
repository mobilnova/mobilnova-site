/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statischer Export → nach out/ (GitHub Pages serviert reine Dateien).
  output: "export",
  // Kein Next-Image-Optimizer beim statischen Export.
  images: { unoptimized: true },
  // Jede Route wird zu einem Ordner mit index.html (z. B. /impressum/ → /impressum/index.html),
  // was auf GitHub Pages ohne Server-Rewrites zuverlässig funktioniert.
  trailingSlash: true,
};

export default nextConfig;
