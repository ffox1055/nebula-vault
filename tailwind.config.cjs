/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2000px"
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "4rem",
        xl: "5rem"
      },
    },
    extend: {
      colors: {
        text: "#000000",
        background: "#ffffff",
        primary: "#8f191b",
        secondary: "#ff841f",
        tertiary: "#f7f0ec",
        accent: "#000000",
      },
      fontSize: {
        sm: "0.800rem",
        base: "1rem",
        xl: "1.250rem",
        "2xl": "1.563rem",
        "3xl": "1.954rem",
        "4xl": "2.442rem",
        "5xl": "3.053rem",
      },
      fontFamily: {
        primary: "Poppins",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      backgroundImage: {
        hero: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(/hero.jpg)",
        hero2: "linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(/hero-2.jpg)",
        bgParallax: "url(/bg-1.jpg)",
      },
		},
	},
	plugins: [],
}
