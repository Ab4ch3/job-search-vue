<template>
  <section>
    <h1>{{ action }} for everyone</h1>
    <h2>find your next job at island job</h2>
  </section>
  {{ interval }}
</template>

<script setup>
import { ref } from "vue";
let action = ref("Build");
let interval = ref(null);
const changeTitle = () => {
  interval = setInterval(() => {
    let actions = ["Build", "Create", "Desing", "Code"];
    let currentActionIndex = actions.indexOf(action.value);
    let nextActionIndex = (currentActionIndex + 1) % 4;
    const nextAction = actions[nextActionIndex];
    action = nextAction;
    // console.log(nextAction);
    console.log(action);
  }, 5000);
};
changeTitle();

// onBeforeUnmount(){
//   clearInterval(interval);
// }
</script>

<style lang="scss" scoped></style>
