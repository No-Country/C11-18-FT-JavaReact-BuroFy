/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        primary: "36px",
        secundary: "30px",
        tertiary: "25px",
      },
      fontFamily: {
        "primary-roboto": "Epilogue",
      },
      backgroundColor: {
        primary: "#C600E0",
        secundary: "#7FCEFF",
        tertiary: "#2E2E2E",
        quaternary: "#FFFFFF",
        quinary: "#D9D9D9",
        sixnary: "#F0BFF7"
      },
      backgroundImage: {
        "header-img": "url('/bg-header-burofy.svg')",
      },
      colors: {
        lilac: "#C600E0",
        "sky-blue": "#7FCEFF",
      },
      animation: {
        "spinner-square": "spinner 3s infinite",
      },
      keyframes: {
        spinner: {
          "0%": { transform: "rotate(-45deg)" },
          "50%": {
            transform: "rotate(-360deg)",
            "border-radius": "50%",
          },
          "100%": {
            transform: "rotate(-45deg)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
