module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  // Este lo agregamos nosotros
  /*Estas las extensiones de los archivos que ejecutare nuestras pruebas */
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
};
