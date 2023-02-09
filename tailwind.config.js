/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Para asegurar que nuestra fuente este disponible y tener los respaldo que tiene por defecto el tailwind
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-gray-2": "#f8f9fa",
        "brand-gray-3": "#80868b",
        "brand-blue-1": "#1967d2",
        "brand-blue-2": "#4285f4",
        "brand-green-1": "#137333",
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285F4", //Box shadow blue
        gray: "0 1px 3px 0 rgba(60,64,67, .3)",
      },
    },
  },
  plugins: [],
  variants: {
    extends: {
      // Con este nos permitira seleccionar el primer elemento de un grupo y aplicale estilo diferente
      margin: ["first"],
    },
  },
};
