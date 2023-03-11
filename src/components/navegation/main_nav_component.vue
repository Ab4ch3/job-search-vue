<template>
  <!-- De esta manera podemos especificar clases atra vez de propiedades computadas y poder seguir ejecutando clases de tailwind -->
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link to="/" class="flex items-center h full text-xl">{{
          company
        }}</router-link>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="item of menuItems"
              :key="item.text"
              class="h-full ml-9 first:ml-0"
            >
              <router-link
                :to="item.url"
                class="flex items-center h-full py-2.5"
                >{{ item.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile_image_component
            v-if="isLoggedIn"
            data-test="profile-images"
          />
          <action_button_component
            v-else
            text="Sign in"
            type="primary"
            data-test="login-button"
            @click="loginUser"
          />
        </div>
      </div>

      <sub_nav_component v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script setup>
// Import Components
import action_button_component from "@/components/shared/action_button_component";
import profile_image_component from "@/components/navegation/profile_image_component";
import sub_nav_component from "@/components/navegation/sub_nav_component.vue";
// Import library
import { useAuthStore } from "@/store/AuthStore.js";
import { computed } from "vue";
// Data
const store = useAuthStore();
let company = "Island Jobs";
let menuItems = [
  { text: "Teams", url: "/teams" },
  { text: "Locations", url: "/" },
  { text: "Life at Island Jobs", url: "/" },
  { text: "how we hire", url: "/" },
  { text: "Student", url: "/" },
  { text: "Jobs", url: "/jobs/results" },
];
// Funtions
const loginUser = () => {
  store.loginUser();
};
// Computed
const isLoggedIn = computed(() => {
  return store.isLoggin;
});
const headerHeightClass = computed(() => {
  return {
    "h-16": !isLoggedIn.value,
    "h-32": isLoggedIn.value,
  };
});
</script>

<style lang="scss" scoped></style>
