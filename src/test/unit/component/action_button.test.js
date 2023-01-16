import { mount } from "@vue/test-utils";

import action_button_component from "@/components/action_button_component.vue";

describe("ActionButton", () => {
  it("render text", () => {
    // Montamos el componenete con el cual realizaremos la prueba
    const wrapper = mount(action_button_component, {
      props: {
        // Establecemos props como en el original
        text: "I am so clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("I am so clickable");
  });
  it("applies one of several styles to button", () => {
    const wrapper = mount(action_button_component, {
      props: {
        // Establecemos props como en el original
        text: "I am so clickable",
        type: "primary",
      },
    });
    // Buscara un elemento en el htmt llamado button
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
