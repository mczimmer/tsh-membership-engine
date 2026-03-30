import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a0c",
          secondary: "#09090b",
          card: "rgba(255,255,255,0.02)",
        },
        accent: {
          indigo: "#6366f1",
          violet: "#a78bfa",
          purple: "#c084fc",
          amber: "#f59e0b",
          red: "#ef4444",
          green: "#34d399",
        },
        text: {
          primary: "#ffffff",
          secondary: "rgba(255,255,255,0.55)",
          tertiary: "rgba(255,255,255,0.35)",
          muted: "rgba(255,255,255,0.25)",
        },
        border: {
          subtle: "rgba(255,255,255,0.06)",
          accent: "rgba(99,102,241,0.15)",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
