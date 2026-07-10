import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C96A",
          dark: "#9A7A2E",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          2: "#111111",
          3: "#1A1A1A",
          4: "#222222",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "carbon": "repeating-linear-gradient(45deg, #1a1a1a 0px, #1a1a1a 1px, #111 1px, #111 8px)",
        "gold-gradient": "linear-gradient(135deg, #C9A84C, #9A7A2E)",
      },
      animation: {
        "pulse-gold": "pulse-gold 2s infinite",
        "scroll-line": "scrollLine 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
