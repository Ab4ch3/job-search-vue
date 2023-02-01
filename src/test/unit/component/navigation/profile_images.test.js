import { shallowMount } from "@vue/test-utils";

import profile_image_component from "@/components/navegation/profile_image_component.vue";

describe("ProfileImages", () => {
  it("renders", () => {
    const wrapper = shallowMount(profile_image_component);
    expect(wrapper.exists()).toBe(true);
  });
});
