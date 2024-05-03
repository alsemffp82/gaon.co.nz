import { createWebHistory, createRouter } from "vue-router";
import Home from "../view/Home.vue";
import Menu from "../view/Menu.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;