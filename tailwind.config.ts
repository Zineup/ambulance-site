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
        urgent: "#E63946",
        "urgent-dark": "#C62828",
        medical: "#2DC653",
        "medical-dark": "#1B9E3E",
        dark: "#1A1A2E",
        light: "#F8F8F8",
      },
      fontFamily: {
        arabic: ["Noto Sans Arabic", "Tahoma", "Arial", "sans-serif"],
        sans: ["Inter", "Noto Sans Arabic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
