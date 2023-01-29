<template>
  <section>
    <h1
      class="font-bold tracking-tighter text-8xl mb-14"
      data-test="action-phrase"
    >
      <span :class="actionClass">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">find your next job at island job</h2>
  </section>
</template>

<script setup>
import nextElementeInList from "@/utils/next_element_in_list";
import { ref, onBeforeUnmount, computed } from "vue";
let action = ref("Build");
let interval = ref(null);

const changeTitle = () => {
  interval = setInterval(() => {
    let actions = ["Build", "Create", "Design", "Code"];
    action.value = nextElementeInList(actions, action.value);
  }, 5000);
};

const actionClass = computed(() => action.value.toLowerCase());
// Se ejecuta al crear el componente
changeTitle();
// Despues de desmontar el componente
onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f0ab00;
}
.code {
  color: #d93025;
}
</style>
