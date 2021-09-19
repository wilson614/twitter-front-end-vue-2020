import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminLogin from "../views/AdminLogin.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users/:userid",
    name: "user",
    redirect: "/users/:userid/profile",
    component: () => import("../views/User.vue"),
    children: [
      {
        path: "profile",
        name: "profile",
        component: () => import("../components/UserTweets.vue"),
      },
      {
        path: "replies",
        name: "replies",
        component: () => import("../components/UserReplies.vue"),
      },
      {
        path: "likes",
        name: "likes",
        component: () => import("../components/UserLikes.vue"),
      },
    ],
  },
  {
    path: "/users/:userid/followers",
    name: "followers",
    component: () => import("../views/UserFollowers.vue"),
  },
  {
    path: "/users/:userid/followings",
    name: "followers",
    component: () => import("../views/UserFollowings.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/Setting.vue"),
  },
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
    path: "/admin/tweets",
    name: "admin-tweets",
    component: () => import("../views/AdminTweets.vue"),
  },
  {
    path: "/admin/users",
    name: "admin-users",
    component: () => import("../views/AdminUsers.vue"),
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
  linkActiveClass: "router-link-active",
  linkActive: "router-link-exact-active",
});

export default router;
