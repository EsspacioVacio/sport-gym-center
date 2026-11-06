import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gym: { yellow: "#FACC15", gold: "#FFD700", black: "#0B0B0B", card: "#141414", wa: "#25D366" },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 24px rgba(250,204,21,.55), inset 0 0 16px rgba(250,204,21,.2)",
      },
    },
  },
  plugins: [],
};
export default config;
