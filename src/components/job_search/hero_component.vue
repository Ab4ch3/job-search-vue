<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <head_line_component />
          <job_search_form_component />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt="vue logo"
            class="w-80 h-80 object-contain"
            srcset=""
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script setup>
import head_line_component from "@/components/job_search/head_line_component";
import job_search_form_component from "@/components/job_search/job_search_form_component";
</script>

<style lang="scss" scoped></style>
