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
        "brand-blue-1": "#1967d2",
        "brand-green-1": "#137333",
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
