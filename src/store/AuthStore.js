import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    Login: false,
  }),
  getters: {
    isLoggin: (state) => {
      return state.Login;
    },
  },
  actions: {
    loginUser() {
      this.Login = true;
    },
  },
});
