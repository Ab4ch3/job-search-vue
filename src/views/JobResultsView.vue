<template>
  <div>
    <h1 class="text-6xl font-bold">Job Result View</h1>
    <h2>{{ experiment }}</h2>
  </div>
</template>

<script setup>
import { computed, r } from "vue";

const experiment = computed(() => {
  console.log(route);
  return "Irrelevant";
});
</script>
