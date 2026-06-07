import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Self-hosted Mona Sans (variable). Humanist grotesk, close in spirit to
// Volvo Novum. No external font requests: good for privacy and performance.
const mona = localFont({
  src: "./fonts/MonaSans.woff2",
  variable: "--font-mona",
  weight: "200 900",
  display: "swap",
});

const title =
  "Volvo XC90 V8 Executive | Youngtimer 35% bijtelling | 7-zitter, Full Options";
const description =
  "Te koop: ruime en comfortabele Volvo XC90 met de 4.4 V8 (Yamaha), Executive uitvoering, bouwjaar 2005, 205.000 km, APK tot 04-2027, 7 zitplaatsen en AWD. Aantrekkelijke youngtimer met 35% bijtelling. Vraagprijs € 14.500.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "Volvo XC90 V8 te koop",
  keywords: [
    "Volvo XC90",
    "XC90 V8",
    "Yamaha V8",
    "youngtimer",
    "35% bijtelling",
    "Executive",
    "te koop",
    "occasion",
  ],
  authors: [{ name: "Particuliere verkoop" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: "Volvo XC90 V8 Executive te koop",
    title,
    description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Volvo XC90 V8 Executive in grijsmetallic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F2EC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={mona.variable}>
      <body>{children}</body>
    </html>
  );
}
