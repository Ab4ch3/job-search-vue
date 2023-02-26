<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ path: '/jobs/results', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ path: '/jobs/results', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import JobListing from "@/components/Job_result/JobLinsting.vue";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useJobsStore } from "@/store/JobsStore.js";

const store = useJobsStore();
const route = useRoute();
onMounted(() => {
  store.getJobs();
});

const getJobs = computed(() => {
  return store.Jobs;
});

const currentPage = computed(() => {
  const pageString = route.query.page || "1"; //Se le da un valor por defecto
  return Number.parseInt(pageString);
});

const displayedJobs = computed(() => {
  const pageNumber = currentPage;
  const firtsJobIndex = (pageNumber.value - 1) * 10;
  const lastJobIndex = pageNumber.value * 10;
  return getJobs.value.slice(firtsJobIndex, lastJobIndex);
});
const previousPage = computed(() => {
  const previousPage = currentPage.value - 1;
  const firtsPage = 1;
  return previousPage >= firtsPage ? previousPage : undefined;
});

const nextPage = computed(() => {
  const nextPage = currentPage.value + 1;
  const maxPage = getJobs.value.length / 10;
  return nextPage <= maxPage ? nextPage : undefined;
});
</script>

<style scoped></style>
