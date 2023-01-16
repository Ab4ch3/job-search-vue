// Esta libreria nos permite probar componenetes de vue fuera del navegador
import { shallowMount } from "@vue/test-utils";

import main_nav_component from "@/components/main_nav_component";

describe("main_nav_component", () => {
  it("Displays company name", () => {
    // Montaremos el componente que montara para realizar la prueba
    const wrapper = shallowMount(main_nav_component);
    //to match es una comparacion menos efectiva porq buscara que en cualquier parte aparesca en alguna parte del componente, el nomnbre que estoy esperando que devuelva
    expect(wrapper.text()).toMatch("Island Jobs");
    //.text => No se centrara en el html solo en la data real que le mostrara al usuario

    // console.log(wrapper.html()); //Nos mostrara la porcion html de nuestro codigo
  });
  it("Displays menu items for navigation", () => {
    const wrapper = shallowMount(main_nav_component);
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
      const wrapper = shallowMount(main_nav_component);
      const loginButton = wrapper.find("[data-test='login-button']");
      // El metodo exits() te devolvera true o sie xiste el componente que le pasamos
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile picture", async () => {
      const wrapper = shallowMount(main_nav_component);
      //Esta vez usamos find para buscar un elemento con propiedades creadas por nosotros para evitar cambios a futuro
      let profileImage = wrapper.find("[data-test='profile-images']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      // Vamos a simular el click del usuario para hacer el cambio en las propiedades que harian que la imagen apareciera
      await loginButton.trigger("click");
      // Se tiene q volver a correr ya que la primera busqueda mantendra los valores originales que no tenian la imagen luego del click se buscaria de nuevo
      profileImage = wrapper.find("[data-test='profile-images']");
      // El metodo exits() te devolvera true o sie xiste el componente que le pasamos
      expect(profileImage.exists()).toBe(true);
    });
  });

  describe("Display subnavigation menu with additional information", async () => {
    const wrapper = shallowMount(main_nav_component);
    let subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exists()).toBe(false);

    const loginButton = wrapper.find("[data-test='login-button']");
    await loginButton.trigger("click");

    subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exists()).toBe(true);
  });
});
