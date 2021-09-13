import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminLogin from "../views/AdminLogin.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    name: "admin",
    redirect: "/admin/login",
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: AdminLogin,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
