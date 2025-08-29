/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFD500",   // Accent / glow
          black: "#111111",    // Primary dark
          gray: "#333333",     // Secondary background
          light: "#F9F9F9",    // Light background
        },
      },
      fontFamily: {
        heading: ["'Montserrat'", "sans-serif"], // bold + modern
        body: ["'Inter'", "sans-serif"],         // clean + readable
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
