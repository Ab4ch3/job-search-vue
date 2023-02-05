<template>
  <div>
    <h1 class="text-6xl font-bold">Job Result View</h1>
    <button @click="goToHome">Go to Home Page</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goToHome = () => {
  router.push("/");
};
</script>
