/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'inter': ['Inter'],
        'manrope': ['Manrope']
      },

      colors: {
        dark: {
          100: "#23272E"
        },

        RED: {
          _100: "#D7263D"
        },

        MODAL_BACKGROUND: "rgba(0, 0, 0, 0.23)",
      }

    },
  },
  plugins: [],
}