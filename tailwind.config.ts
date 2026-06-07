import type { Config } from "tailwindcss";

// Concept "Skog" (Nordic light): warm paper, muted forest-green accent,
// humanist grotesk (Mona Sans). Restrained, Scandinavian, trustworthy.
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1C1A", // near-black body text
        muted: "#62655D", // secondary cool grey
        paper: "#F4F2EC", // warm paper background
        card: "#FFFFFF", // card surface
        cream: "#FBF8F0", // highlight / callout surface
        forest: "#3C5A47", // muted Nordic green accent
        "forest-700": "#2E4636", // darker green (hover)
        "forest-50": "#EDF1EC", // tinted green wash
        hair: "#E2DFD6", // hairline borders
      },
      fontFamily: {
        sans: ["var(--font-mona)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      letterSpacing: {
        tightish: "-0.015em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(27,28,26,0.04), 0 8px 30px rgba(27,28,26,0.06)",
        lift: "0 2px 6px rgba(27,28,26,0.05), 0 18px 50px rgba(27,28,26,0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
