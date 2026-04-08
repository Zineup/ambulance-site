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
        urgent: "#E63946", // Rausch Red equivalent for medical
        "urgent-dark": "#c13515", 
        medical: "#2DC653", // Keep green for success/positive medical
        "medical-dark": "#1B9E3E",
        dark: "#1D3557", // Medical Navy for text and trust
        light: "#f2f2f2", // Airbnb round buttons bg
      },
      fontFamily: {
        arabic: ["var(--font-arabic)", "Tahoma", "Arial", "sans-serif"],
        sans: ["var(--font-nunito)", "var(--font-arabic)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
