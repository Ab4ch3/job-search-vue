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
});
