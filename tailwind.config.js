/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Saol", ...defaultTheme.fontFamily.sans],
        Eiko: ["Eiko", ...defaultTheme.fontFamily.sans],
        grotesk: ["Focal", ...defaultTheme.fontFamily.sans],
        mono: ["Fraktion", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        themeblue: "#123CA8",
      },
    },
  },
  plugins: [],
};
