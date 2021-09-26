import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminLogin from "../views/AdminLogin.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";
import store from "./../store";

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tweets/:id',
    name: 'tweets',
    component: () => import('../views/Tweets.vue'),
  },
  // {
  //   path: '/notify',
  //   name: 'notify',
  //   component: () => import('../views/Tweets.vue'),
  // },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/views/Chat.vue'),
  },
  // {
  //   path: '/message',
  //   name: 'message',
  //   component: () => import('../views/Message.vue'),
  // },
  {
    path: '/users/:userid',
    name: 'user',
    redirect: '/users/:userid/profile',
    component: () => import('../views/User.vue'),
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../components/UserTweets.vue'),
      },
      {
        path: 'replies',
        name: 'replies',
        component: () => import('../components/UserReplies.vue'),
      },
      {
        path: 'likes',
        name: 'likes',
        component: () => import('../components/UserLikes.vue'),
      },
    ],
  },
  {
    path: '/users/:userid/followers',
    name: 'followers',
    component: () => import('../views/UserFollowers.vue'),
  },
  {
    path: '/users/:userid/followings',
    name: 'followings',
    component: () => import('../views/UserFollowings.vue'),
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/login',
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin,
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminTweets.vue'),
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass: "router-link-active",
  linkActive: "router-link-exact-active",
});

//監聽全域的「切換路由」事件
router.beforeEach(async (to, from, next) => {
  const isAdminRoute = to.path.includes("admin");
  const isLoginRoute = to.path.includes("login");
  // 從 localStorage 取出 token
  const tokenInLocalStorage = localStorage.getItem("token");
  const tokenInStore = store.state.token;
  // 預設是尚未驗證
  let isAuthenticated = store.state.isAuthenticated;
  let isAdmin = store.state.isAdmin;

  // 如果有 token 的話才驗證
  // 比較 localStorage 和 store 中的 token 是否一樣
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch("fetchCurrentUser");
    isAdmin = store.state.isAdmin;
  }
  // 如果 token 無效則轉址到登入頁
  if (!isAuthenticated && !isLoginRoute && to.name !== "register") {
    if (isAdminRoute) {
      next("/admin/login");
      return;
    } else {
      next("/login");
      return;
    }
  }
  //如果 token 已存在且有效
  if (isAuthenticated) {
    if (isLoginRoute) {
      if (isAdminRoute) {
        //admin登入頁
        if (isAdmin) {
          next("/admin/tweets"); //admin首頁
          return;
        }
      } else {
        //一般登入頁
        if (!isAdmin) {
          next("/");
          return;
        }
      }
      //前往(admin) login route
    } else {
      //非login頁, 且非註冊頁
      if (isAdminRoute && !isAdmin) {
        next("/admin/login");
        return;
      } else if (!isAdminRoute && isAdmin) {
        next("/login");
        return;
      }
    }
  }
  next();
});

export default router;
