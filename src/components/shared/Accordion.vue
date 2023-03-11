<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ props.header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <!-- Custom Content -- Slot -->
      <slot>
        <!-- Esto aparecera cuando no le pasemos nada a nuestro slot desde nuesto componente padre -->
        <p>Whoops, somebody forgot to populate me!</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
let isOpen = ref(false);
const props = defineProps({
  header: {
    type: String,
    require: true,
    default: "",
  },
});

const open = () => {
  isOpen.value = !isOpen.value;
};
const caretIcon = computed(() => {
  return isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"];
});
</script>

<style scoped></style>
