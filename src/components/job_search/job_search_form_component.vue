<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <TextInput v-model="role" placeholder="Software Engineer" />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex item flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <TextInput v-model="location" placeholder="Los Angeles" />
      </div>
    </div>

    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ActionButton from "@/components/shared/action_button_component.vue";
import TextInput from "@/components/shared/text_input_component.vue";
const router = useRouter();
let role = ref("");
let location = ref("");

const searchForJobs = () => {
  router.push({
    path: "/jobs/results",
    query: { role: role.value, location: location.value }, // Asi enviamos paramatros hacia una ruta
  });
};
</script>

<style scoped></style>
