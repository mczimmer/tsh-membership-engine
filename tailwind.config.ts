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
          blue: "#2E7CF6",
          pink: "#F5A0B1",
          yellow: "#FACC15",
          green: "#1A8F3F",
        },
        bg: {
          primary: "#B3B0AE",
          secondary: "#C1BEBC",
          card: "#FFFFFF",
          elevated: "#FFFFFF",
        },
        accent: {
          primary: "#2E7CF6",
          secondary: "#1A8F3F",
          pink: "#F5A0B1",
          amber: "#FACC15",
          green: "#1A8F3F",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#4F4842",
          tertiary: "#6F6761",
          muted: "#8E857D",
        },
        border: {
          subtle: "#E8E2DB",
          strong: "#D4CEC7",
          accent: "rgba(46,124,246,0.2)",
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
