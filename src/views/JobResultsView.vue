<template>
  <div>
    <h1 class="text-6xl font-bold">Job Result View</h1>
    <h2>{{ experiment }}</h2>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const experiment = computed(() => {
  console.log(useRoute());
  return "Irrelevant";
});
</script>
