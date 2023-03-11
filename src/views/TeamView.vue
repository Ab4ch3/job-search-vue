<template>
  <HeaderContainer>
    <!-- Asi nos referimos a un slot name y pasarle contenido al slot indicado , si tienes mas de un slot en un componente es recomendable usar slot con name , de lo contrario puede usarlos sin nombres -->
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>

    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light">
        It's awesome working here , join us!!
      </h2>
    </template>
  </HeaderContainer>
</template>

<script setup>
import HeaderContainer from "@/components/shared/HeaderContainer.vue";
</script>

<style scoped></style>
