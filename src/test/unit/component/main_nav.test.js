// Esta libreria nos permite probar componenetes de vue fuera del navegador
import { mount } from "@vue/test-utils";

import main_nav_component from "@/components/main_nav_component";

describe("main_nav_component", () => {
  it("Displays company name", () => {
    // Montaremos el componente que montara para realizar la prueba
    const wrapper = mount(main_nav_component);
    //to match es una comparacion menos efectiva porq buscara que en cualquier parte aparesca en alguna parte del componente, el nomnbre que estoy esperando que devuelva
    expect(wrapper.text()).toMatch("Island Jobs");
    //.text => No se centrara en el html solo en la data real que le mostrara al usuario

    // console.log(wrapper.html()); //Nos mostrara la porcion html de nuestro codigo
  });
  it("Displays menu items for navigation", () => {
    const wrapper = mount(main_nav_component);
    // Find buscar ciertos elementos dentro de nuestro html, css clases o ID de elementos
    const navigationMenuItems = wrapper.findAll("li");
    // el metodo text() nos da el valor que tendran los elementos
    const navigationMenuText = navigationMenuItems.map((item) => item.text());
    // toEqual va evaluar que sean el mismo valor pero no el mismo tipo
    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Life at Island Jobs",
      "how we hire",
      "Student",
      "Jobs",
    ]);
  });

  describe("when user is logged out", () => {
    it("Prompts user to sing in", () => {
      const wrapper = mount(main_nav_component, {
        data() {
          return {
            isLoggedIn: false,
          };
        },
      });
      // Find component busca dentro de nuestra plantilla un conponente definido
      const loginButton = wrapper.find("[data-test='login-button']");

      const profileImage = wrapper.find("[data-test='profile-images']");

      // El metodo exits() te devolvera true o sie xiste el componente que le pasamos
      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile picture", () => {
      const wrapper = mount(main_nav_component, {
        data() {
          return {
            isLoggedIn: true,
          };
        },
      });
      //Esta vez usamos find para buscar un elemento con propiedades creadas por nosotros para evitar cambios a futuro
      const loginButton = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.find("[data-test='profile-images']");
      // El metodo exits() te devolvera true o sie xiste el componente que le pasamos
      expect(loginButton.exists()).toBe(false);
      expect(profileImage.exists()).toBe(true);
    });
  });
});
