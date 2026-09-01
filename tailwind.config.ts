import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pp-red": {
          DEFAULT: "#8B1E24",
          light: "#A8323A",
          dark: "#651419",
          darker: "#3D0D10",
        },
        "pp-cream": {
          DEFAULT: "#F5F0E8",
          warm: "#FCFAF6",
        },
        "pp-charcoal": {
          DEFAULT: "#171717",
          light: "#2A2A2A",
        },
        "pp-black": "#000000",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1440px",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(23,23,23,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,23,23,0.05) 1px, transparent 1px)",
        "grid-pattern-dark":
          "linear-gradient(to right, rgba(245,240,232,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,240,232,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        "dash-flow": {
          to: { strokeDashoffset: "-1000" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "dash-flow": "dash-flow 20s linear infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease forwards",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
