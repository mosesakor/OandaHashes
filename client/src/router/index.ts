import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FaqView from "@/views/FaqView.vue";
import PackagesView from "@/views/PackagesView.vue";
import EquipmentView from "@/views/EquipmentView.vue";
import LoginView from "@/views/LoginView.vue";
import OverviewView from "@/views/OverviewView.vue";
import AdminView from "@/views/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/faq", component: FaqView },
    { path: "/packages", component: PackagesView },
    { path: "/equipment", component: EquipmentView },
    { path: "/login", component: LoginView },
    { path: "/overview", component: OverviewView },
    { path: "/admin", component: AdminView },
  ],
});

export default router;
