<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFilterSidebar />
    <JobListing />
  </div>
</template>

<script setup>
import JobListing from "@/components/Job_result/JobListings.vue";
import JobFilterSidebar from "@/components/Job_result/JobFilterSidebar/JobFilterSidebar.vue";
</script>
