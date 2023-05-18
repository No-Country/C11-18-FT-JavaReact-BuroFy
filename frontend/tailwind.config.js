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
        "primary": "36px",
        "secundary": "30px",
        "tertiary": "25px",
      },
      fontFamily: {
        "DM-primary": 'DM-Sans',
      },
      backgroundColor: {
        "primary": "#C600E0",
        "secundary": "#7FCEFF",
        "tertiary": "#2E2E2E",
        "quaternary": "#FFFFFF",
      },
      backgroundImage: {
        'header-img': "url('/bg-header-burofy.svg')",
      },
      colors: {
        lilac: "#C600E0",
        "sky-blue": "#7FCEFF",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};

