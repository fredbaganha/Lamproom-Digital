/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#0d2b15",   // Deep Green
        "brand-eggshell": "#eae1cc", // Eggshell
        "brand-orange": "#a93807",   // Burnt Orange
        "brand-brown": "#6a4023",    // Soft Brown
        "brand-black": "#000000",    // Black
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
