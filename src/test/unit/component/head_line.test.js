import { nextTick } from "vue";
import { mount } from "@vue/test-utils";

import head_line_component from "@/components/head_line_component";

describe("HeadLine", () => {
  // Esto lo ejecutara antes de cada prueba
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });
  // Realizara esto luego de se ejecute la prueba
  afterEach(() => {
    jest.useRealTimers();
  });
  it("displays introductory action verb ", () => {
    const wrapper = mount(head_line_component);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("change action verb at a consistent interval", () => {
    mount(head_line_component);
    expect(setInterval).toHaveBeenCalled();
  });

  it("swaps action verb after firts interval", async () => {
    const wrapper = mount(head_line_component);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("remove interval when component dissapperars ", () => {
    const wrapper = mount(head_line_component);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
