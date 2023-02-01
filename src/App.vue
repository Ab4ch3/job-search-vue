<template>
  <div>
    <main_nav_component />
    <hero_component />
  </div>
</template>

<script>
import main_nav_component from "@/components/navegation/main_nav_component.vue";
import hero_component from "@/components/job_search/hero_component.vue";
export default {
  name: "App",
  components: {
    main_nav_component,
    hero_component,
  },
};
</script>

<style scoped></style>
