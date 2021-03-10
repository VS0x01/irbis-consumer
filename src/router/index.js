import Vue from "vue";
import VueRouter from "vue-router";
import { layout, route } from "../util/routes";

Vue.use(VueRouter);

const routes = [
  layout("default", [route("Home"), route("About", "/about")]),
  { path: "*", component: () => import("@/views/Error") },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
