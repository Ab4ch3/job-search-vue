<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <JobListing v-for="job in jobs.jobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>

<script setup>
import axios from "axios";
import JobListing from "@/components/Job_result/JobLinsting.vue";
import { reactive, onMounted } from "vue";

let jobs = reactive({ jobs: [] });
onMounted(() => {
  getJobs();
});

const getJobs = async () => {
  await axios.get("http://localhost:3000/jobs").then((response) => {
    jobs.jobs = response.data;
  });
};
</script>

<style scoped></style>
