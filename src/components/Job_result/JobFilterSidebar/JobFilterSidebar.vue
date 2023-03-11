<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-grow justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do ?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear Filter" type="secondary" />
        </div>
      </div>
      <!-- EL contenido que le pasamos a este componente sera el que el interprete con el slot que tiene alla  -->

      <Accordion header="Degree" />

      <Accordion header="Job Types">
        <p>Placeholder For Now</p>
      </Accordion>

      <AccordionOrganization />
    </section>
  </div>
</template>

<script setup>
import ActionButton from "@/components/shared/action_button_component.vue";
import Accordion from "@/components/shared/Accordion.vue";
import AccordionOrganization from "@/components/Job_result/JobFilterSidebar/JobFilterSidebarOrganization.vue";
</script>

<style scoped></style>
