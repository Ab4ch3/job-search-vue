<template>
  <button :class="buttonClass">
    {{ props.text }}
  </button>
</template>

<script setup>
import { defineProps, computed } from "vue";
// Definimos los props que esta pasando el componente padre
const props = defineProps({
  text: { type: String, required: true },
  type: {
    type: String,
    required: true,
    default: "primary",
    // una manera de validar los valores esperados en props
    validator(value) {
      return ["primary", "secondary"].includes(value);
    },
  },
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
  @apply px-5 py-3 font-medium;
}
.primary {
  @apply rounded text-white bg-brand-blue-1 hover:shadow-blue-200;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2  hover:text-white;
}
</style>
