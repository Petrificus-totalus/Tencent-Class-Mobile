import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import List from "../views/List.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/list",
    name: "list",
    component: List,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
