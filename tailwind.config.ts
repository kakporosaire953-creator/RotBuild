import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#06070D",
        panel: "#0B0D16",
        line: "#1C2030",
        violet: "#7C5CFF",
        blue: "#3B82F6",
        cyan: "#22D3EE",
        ink: "#E7E9F2",
        "ink-dim": "#8B90A8",
        "ink-faint": "#5B607A",
      },
      fontFamily: {
        display: ["var(--font-inter-tight)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      keyframes: {
        auroraMove: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(40px,-30px) scale(1.15)" },
        },
        particleFloat: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%, 90%": { opacity: "0.6" },
          "100%": { transform: "translateY(-120px) translateX(20px)", opacity: "0" },
        },
        marqueeScroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-7px)" },
        },
      },
      animation: {
        aurora: "auroraMove 18s ease-in-out infinite",
        particle: "particleFloat linear infinite",
        marquee: "marqueeScroll 28s linear infinite",
        float: "floatY 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
