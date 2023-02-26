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
      try {
        const response = await axios.get(`${baseUrl}/jobs`);
        this.Jobs = response.data;
      } catch (error) {
        console.warn(error);
      }
    },
  },
});
