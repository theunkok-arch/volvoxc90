// Generates a QR code that points to the live site, in three forms:
//   1. xc90-qrcode.png       plain high-res QR (save to phone, quick print)
//   2. xc90-qrcode.svg       vector QR (sharpest for any print size)
//   3. xc90-qrcode-print.png on-brand printable card (heading + QR + URL)
// Outputs to the user's Desktop and to public/ (qr.png) in the repo.
import QRCode from "qrcode";
import sharp from "sharp";
import { writeFile, mkdir } from "node:fs/promises";
import { homedir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const URL = "https://xc90-v8-verkoop.netlify.app";
const DARK = "#1B1C1A";
const LIGHT = "#FFFFFF";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const desktop = join(homedir(), "Desktop");
await mkdir(join(repoRoot, "public"), { recursive: true });

// 1. Plain PNG (1200px, generous quiet zone) -> Desktop + repo public/qr.png
const pngOpts = {
  width: 1200,
  margin: 4,
  errorCorrectionLevel: "Q",
  color: { dark: DARK + "FF", light: LIGHT + "FF" },
};
await QRCode.toFile(join(desktop, "xc90-qrcode.png"), URL, pngOpts);
await QRCode.toFile(join(repoRoot, "public", "qr.png"), URL, pngOpts);

// 2. Vector SVG -> Desktop
const svg = await QRCode.toString(URL, {
  type: "svg",
  margin: 4,
  errorCorrectionLevel: "Q",
  color: { dark: DARK, light: LIGHT },
});
await writeFile(join(desktop, "xc90-qrcode.svg"), svg, "utf8");

// 3. Printable card (on-brand "Skog"): paper bg, heading, QR on white, URL.
const qrBuf = await QRCode.toBuffer(URL, {
  width: 620,
  margin: 0,
  errorCorrectionLevel: "Q",
  color: { dark: DARK, light: LIGHT },
});
const qrData = `data:image/png;base64,${qrBuf.toString("base64")}`;

const W = 1080;
const H = 1440;
const FONT = "Mona Sans, Helvetica, Arial, sans-serif";
const cardSize = 780;
const cardX = (W - cardSize) / 2;
const cardY = 470;
const qrSize = 620;

const cardSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#F4F2EC"/>
  <g transform="translate(${W / 2} 150)" text-anchor="middle">
    <text x="0" y="-4" font-family="${FONT}" font-size="24" letter-spacing="6" fill="#3C5A47" font-weight="600">TE KOOP</text>
    <text x="0" y="78" font-family="${FONT}" font-size="62" font-weight="600" letter-spacing="-1.5" fill="#1B1C1A">Volvo XC90 V8</text>
    <text x="0" y="146" font-family="${FONT}" font-size="62" font-weight="600" letter-spacing="-1.5" fill="#1B1C1A">Executive</text>
    <text x="0" y="214" font-family="${FONT}" font-size="30" font-weight="400" fill="#62655D">Scan voor alle info en foto&#39;s</text>
  </g>
  <rect x="${cardX}" y="${cardY}" width="${cardSize}" height="${cardSize}" rx="36" fill="#FFFFFF" stroke="#E2DFD6" stroke-width="2"/>
  <image href="${qrData}" x="${(W - qrSize) / 2}" y="${cardY + (cardSize - qrSize) / 2}" width="${qrSize}" height="${qrSize}"/>
  <text x="${W / 2}" y="${cardY + cardSize + 80}" text-anchor="middle" font-family="${FONT}" font-size="34" font-weight="500" fill="#3C5A47">xc90-v8-verkoop.netlify.app</text>
  <text x="${W / 2}" y="${cardY + cardSize + 130}" text-anchor="middle" font-family="${FONT}" font-size="26" font-weight="400" fill="#62655D">Theun Kok</text>
</svg>`;

await sharp(Buffer.from(cardSvg)).png().toFile(join(desktop, "xc90-qrcode-print.png"));

console.log("QR written to Desktop (png, svg, print card) and public/qr.png ->", URL);
