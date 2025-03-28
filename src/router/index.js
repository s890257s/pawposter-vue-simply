import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        { path: "/", component: () => import("@/views/HomeView.vue") },
        { path: "/pets", component: () => import("@/views/PetView.vue") },
      ],
    },
    {
      path: "/login",
      component: () => import("@/layouts/LoginLayout.vue"),
    },
  ],
});

export default router;
