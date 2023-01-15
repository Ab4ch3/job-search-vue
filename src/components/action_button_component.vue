<template>
  <button :class="buttonClass">
    {{ props.text }}
  </button>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  text: { type: String, required: true },
  type: { type: String, required: true },
});

// La computada verificara el cambio en tiempo real de la propiedad primary y lo mostrara
const buttonClass = computed(() => {
  return {
    //Dependiendo del valor que coloquemos al prop type , es lo que el leera como true y aplicara la clase correspondiente
    [props.type]: true,
  };
});
</script>
<style scoped>
button {
  /* Apply nos permite usar tailwind en esta seccion de Css puro */
  @apply px-5 py-3 rounded font-medium;
}
.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue-200;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2  hover:text-white;
}
</style>
