import Vue from "vue";
import Vuex from "vuex";
import userAPI from "./../apis/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: "",
      account: "",
      avatar: "",
      role: "",
      cover: "",
      followerCount: -1,
      followingCount: -1,
      tweetCount: -1,
    },
    isAuthenticated: false,
    isAdmin: false,
    token: "", // 新增 token 屬性
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser,
      };
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true;
      state.isAdmin = state.currentUser.role === "admin";
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem("token");
    },
    revokeAuthentication(state) {
      state.currentUser = {};
      state.isAuthenticated = false;
      state.isAdmin = false;
      // 登出時一併將 state 內的 token 移除
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await userAPI.getCurrentUser();
        commit("setCurrentUser", data);
        return true; // 判斷call current user是否成功
      } catch (error) {
        console.error("can not fetch user information");
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit("revokeAuthentication");
        return false; // 回傳fetch api失敗
      }
    },
  },
  modules: {},
});
