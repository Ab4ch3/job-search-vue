import { defineStore } from "pinia";
import axios from "axios";

export const useJobsStore = defineStore("JobsStore", {
  state: () => ({
    Jobs: [],
  }),
  getters: {},
  actions: {
    async getJobs() {
      const baseUrl = process.env.VUE_APP_API_URL;
      await axios.get(`${baseUrl}/jobs`).then((response) => {
        this.Jobs = response.data;
      });
    },
  },
});
