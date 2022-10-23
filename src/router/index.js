import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SettingsView from "../views/SettingsView.vue";
import LoginView from "../views/LoginView.vue";

import { useAuthStore } from "../stores/auth.store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/settings", name: "settings", component: SettingsView },
    { path: "/login", name: "login", component: LoginView },
  ],
});

router.beforeEach(async(to) => {
  const publicPages = ['/', '/login', '/settings'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if(authRequired && !auth.user){
    auth.returnUrl = to.fullPath;
    return '/login';
  }

})

export default router;
