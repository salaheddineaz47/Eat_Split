/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightest: "#fff4e6",
        light: "#ffe8cc",
        medium: "#ffa94d",
        dark: "#ff922b",
        // green: "#66a80f",
        // red: "#e03131",
      },
      textColor: {
        inherit: "inherit",
      },
      fontFamily: {
        inherit: "inherit",
        custom: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          '"Open Sans"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
      animation: {
        blink: "blink 0.7s steps(2, start) infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
