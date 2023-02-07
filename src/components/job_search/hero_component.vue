<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <HeadLine />
          <JobSearch />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            :src="image"
            alt="vue logo"
            class="w-100 h-90 object-contain"
            srcset=""
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue";
import nextElementeInList from "@/utils/next_element_in_list";
import HeadLine from "@/components/job_search/head_line_component";
import JobSearch from "@/components/job_search/job_search_form_component";

let interval = ref(null);
let image = ref(
  "https://i.postimg.cc/2yc716TD/hero-01-1x-6edcfb8c57f30c2566faefba9c92ed8b.png"
);

const changeImg = () => {
  interval = setInterval(() => {
    let library = [
      "https://i.postimg.cc/2yc716TD/hero-01-1x-6edcfb8c57f30c2566faefba9c92ed8b.png",
      "https://i.postimg.cc/BQzCsjX5/hero-02-1x-ccad21962c34a5560e19fdee20717428.png",
      "https://i.postimg.cc/44B5LLGS/hero-03-1x-085e94af78d9906f55c83d558eca4453.png",
      "https://i.postimg.cc/8PcbqRPP/hero-04-1x-5377e160fa426c8b388a861f23cc185b.png",
    ];
    image.value = nextElementeInList(library, image.value);
  }, 5000);
};

changeImg();
onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style lang="scss" scoped></style>
