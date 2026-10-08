/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Change these later without rewriting components
        brand: {
          50: "#faf6f1",
          100: "#f3ebe0",
          200: "#e6d5c0",
          300: "#d4b896",
          400: "#c49a6c",
          500: "#b8844f",
          600: "#a66f42",
          700: "#8a5938",
          800: "#714a32",
          900: "#5c3e2c",
        },
        accent: {
          DEFAULT: "#c45c4a",
          hover: "#a3483a",
          soft: "rgba(196, 92, 74, 0.12)",
        },
        ink: {
          DEFAULT: "#2c241c",
          muted: "#5c4f42",
        },
        surface: {
          DEFAULT: "rgba(250, 246, 241, 0.92)",
          card: "#faf6f1",
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        content: "960px",
        shell: "1100px",
      },
    },
  },
  plugins: [],
};
