// Generates tasteful, on-brand placeholder JPGs for the car photos and the
// Open Graph share image. Replace public/images/side.jpg and rear.jpg with the
// real high-resolution photos later; keep the same filenames.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");
await mkdir(outDir, { recursive: true });

const FONT = "Mona Sans, Helvetica, Arial, sans-serif";

// Simple side-view SUV silhouette, low contrast, anchored bottom-centre.
const carSilhouette = (w, h, color, opacity) => {
  const cx = w / 2;
  const cy = h * 0.62;
  const s = Math.min(w, h) / 520;
  return `
    <g transform="translate(${cx - 230 * s} ${cy - 80 * s}) scale(${s})" fill="${color}" opacity="${opacity}">
      <path d="M20 120 q4 -34 40 -40 l40 -44 q14 -16 38 -16 h150 q26 0 44 18 l34 36 q40 4 54 22 q12 14 12 34 l0 14 q0 8 -8 8 h-30
               a26 26 0 1 0 -52 0 h-150 a26 26 0 1 0 -52 0 h-26 q-8 0 -8 -8 z" />
      <rect x="118" y="44" width="70" height="40" rx="7" fill="#F4F2EC" opacity="0.55"/>
      <rect x="196" y="44" width="78" height="40" rx="7" fill="#F4F2EC" opacity="0.55"/>
    </g>
    <g fill="#1B1C1A" opacity="${opacity * 0.9}">
      <circle cx="${cx - 116 * s}" cy="${cy + 6 * s}" r="${26 * s}" />
      <circle cx="${cx + 132 * s}" cy="${cy + 6 * s}" r="${26 * s}" />
      <circle cx="${cx - 116 * s}" cy="${cy + 6 * s}" r="${12 * s}" fill="#F4F2EC" />
      <circle cx="${cx + 132 * s}" cy="${cy + 6 * s}" r="${12 * s}" fill="#F4F2EC" />
    </g>`;
};

const photoPlaceholder = (label) => {
  const w = 1600;
  const h = 1000;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#F2EFE7"/>
        <stop offset="1" stop-color="#E5E1D5"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect x="28" y="28" width="${w - 56}" height="${h - 56}" rx="26" fill="none" stroke="#3C5A47" stroke-opacity="0.22" stroke-width="2"/>
    ${carSilhouette(w, h, "#BFC2B4", 0.85)}
    <g transform="translate(${w / 2} 150)" text-anchor="middle">
      <rect x="-86" y="-34" width="172" height="48" rx="24" fill="#3C5A47"/>
      <text x="0" y="-2" font-family="${FONT}" font-size="20" font-weight="600" letter-spacing="2" fill="#FBF8F0">FOTO VOLGT</text>
    </g>
    <g transform="translate(${w / 2} ${h - 150})" text-anchor="middle" fill="#1B1C1A">
      <text x="0" y="0" font-family="${FONT}" font-size="52" font-weight="600" letter-spacing="-1">Volvo XC90 V8 Executive</text>
      <text x="0" y="46" font-family="${FONT}" font-size="26" font-weight="400" fill="#62655D">${label}</text>
    </g>
  </svg>`;
};

const ogImage = () => {
  const w = 1200;
  const h = 630;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#F4F2EC"/>
        <stop offset="1" stop-color="#E7E3D8"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    ${carSilhouette(w, h + 120, "#C7CABB", 0.7)}
    <g transform="translate(80 120)" fill="#1B1C1A">
      <g transform="translate(0 -42)">
        <rect x="0" y="-26" width="62" height="34" rx="8" fill="#3C5A47"/>
        <text x="31" y="-2" text-anchor="middle" font-family="${FONT}" font-size="20" font-weight="700" fill="#FBF8F0">V8</text>
        <text x="78" y="0" font-family="${FONT}" font-size="22" letter-spacing="3" fill="#3C5A47" font-weight="600">YOUNGTIMER, 35% BIJTELLING</text>
      </g>
      <text x="0" y="58" font-family="${FONT}" font-size="78" font-weight="600" letter-spacing="-2">Volvo XC90 V8</text>
      <text x="0" y="138" font-family="${FONT}" font-size="78" font-weight="600" letter-spacing="-2">Executive</text>
      <text x="0" y="206" font-family="${FONT}" font-size="32" font-weight="400" fill="#62655D">2005, 202.000 km, 7 zitplaatsen, AWD, Full Options</text>
    </g>
  </svg>`;
};

async function render(svg, file, q = 82) {
  await sharp(Buffer.from(svg)).jpeg({ quality: q, mozjpeg: true }).toFile(join(outDir, file));
  console.log("wrote", file);
}

await render(photoPlaceholder("Zijaanzicht"), "side.jpg");
await render(photoPlaceholder("Achterkant"), "rear.jpg");
await render(ogImage(), "og.jpg", 86);
console.log("done");
