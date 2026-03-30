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
        tsh: {
          black: "#1A1A1A",
          cream: "#F5F0EB",
          warmwhite: "#FAF7F2",
          white: "#FFFFFF",
          red: "#E63946",
          blue: "#2563EB",
          yellow: "#FACC15",
          green: "#22C55E",
        },
        bg: {
          primary: "#F5F0EB",
          secondary: "#FAF7F2",
          card: "#FFFFFF",
          elevated: "#FFFFFF",
        },
        accent: {
          primary: "#E63946",
          secondary: "#2563EB",
          warm: "#F59E0B",
          green: "#22C55E",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#6B6560",
          tertiary: "#9B9490",
          muted: "#B8B2AB",
        },
        border: {
          subtle: "#E8E2DB",
          strong: "#D4CEC7",
          accent: "rgba(230,57,70,0.2)",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["Space Grotesk", "DM Sans", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        button: "12px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(26,26,26,0.04), 0 1px 2px rgba(26,26,26,0.03)",
        "card-hover":
          "0 4px 12px rgba(26,26,26,0.06), 0 2px 4px rgba(26,26,26,0.04)",
        elevated:
          "0 8px 24px rgba(26,26,26,0.06), 0 2px 8px rgba(26,26,26,0.04)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
