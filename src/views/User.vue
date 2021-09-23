<template>
  <div id="profile">
    <div class="navbar">
      <NavBars page="normal" />
    </div>
    <div class="profile-center">
      <NavTabs :user="user" :isbackArrow="true" />
      <div class="profile-center-profile">
        <UserProfile :initial-user="user" :currentUser="currentUser" />
      </div>
      <div class="profile-tabs">
        <UserProfileTabs />
      </div>
      <div class="profile-tabs-content d-flex justify-content-center scrollbar">
        <router-view></router-view>
      </div>
    </div>
    <div class="profile-right">
      <Popular />
    </div>
  </div>
</template>

<script>
import NavBars from "./../components/NavBars.vue";
import Popular from "./../components/Popular.vue";
import NavTabs from "../components/NavTabs.vue";
import UserProfile from "./../components/UserProfile.vue";
import UserProfileTabs from "./../components/UserProfileTabs.vue";
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    NavBars,
    NavTabs,
    Popular,
    UserProfile,
    UserProfileTabs,
  },
  data() {
    return {
      user: {
        id: -1,
        account: "",
        name: "",
        avatar: "",
        cover: "",
        role: "",
        introduction: "",
        followerCount: "",
        followingCount: "",
        tweetCount: "",
        isFollowed: false,
      },
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    const { userid: userid } = this.$route.params;
    this.fetchUser(userid);
  },
  beforeRouteUpdate(to, from, next) {
    const { userid } = to.params;
    this.fetchUser(userid);
    next();
  },
  methods: {
    async fetchUser(userid) {
      try {
        const { data } = await userAPI.get({ userid });
        this.user = data;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scrollbar {
  padding-left: 6px;
  // 整體的樣式
  &::-webkit-scrollbar {
    width: 4px;
  }
  // bar的樣式
  &::-webkit-scrollbar-thumb {
    background-color: $popular-border;
    border-radius: 2px;
  }
}

#profile {
  width: 100%;
  display: flex;
  max-width: 1245px;

}
.profile-center {
  margin: 0 2rem;
  flex-grow: 1;
  border-left: 1px solid $popular-border;
  border-right: 1px solid $popular-border;
  .navtabs {
    height: 55px;
  }
  .profile-tabs {
    height: 53px;
  }
  .profile-tabs-content {
    width: 100%;
    height: 720px;
    overflow-y: scroll;
  }
}
</style>
