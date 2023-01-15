<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex items-center h full text-xl">{{
          company
        }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="item of menuItems"
              :key="item"
              class="h-full ml-9 first:ml-0"
            >
              <a href="" class="flex items-center h-full py-2.5">{{ item }}</a>
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
    </div>
  </header>
</template>

<script setup>
import action_button_component from "@/components/action_button_component";
import profile_image_component from "@/components/profile_image_component";
import { ref } from "vue";

let company = "Island Jobs";
let url = "https://careers.google.com";
let menuItems = [
  "Teams",
  "Locations",
  "Life at Island Jobs",
  "how we hire",
  "Student",
  "Jobs",
];
let isLoggedIn = ref(false);
const loginUser = () => {
  isLoggedIn.value = true;
};
</script>

<style lang="scss" scoped></style>
