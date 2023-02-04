<template>
  <input
    type="text"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
// let value = ref("");
let props = defineProps({
  placeholder: { type: String, required: false, default: "" },
  modelValue: { type: String, required: true },
});
// Esto emitira un evento personalizdo en componente padre
const emits = defineEmits(["update:modelValue"]);

const handleInput = ($event) => {
  // value.value = $event.target.value;
  // Aca estamos llamando al padre evento que va a correr el padre y pasandole datos , con los que va actualizar propiedades alla
  emits("update:modelValue", $event.target.value);
};
</script>

<style scoped></style>
