/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F65F5F",
        secondary: "#FDCE77",
        bg_color: "#0D0D0D",
      },
      fontSize: {
        hero: "58px",
        header: "48px",
        medium: "40px",
        small: "24px",
        smaller: "22px",
      },
    },
  },
  plugins: [],
};
