import { defineStore } from "pinia";
import { useCookies } from "@vueuse/integrations/useCookies";

export const useStore = defineStore({
  id: "userStore",
  state: () => ({
    loggedIn: !!useCookies(["token"]).get("token"),
  }),
  actions: {
    update() {
      this.loggedIn = !!useCookies(["token"]).get("token");
    },
  },
});
