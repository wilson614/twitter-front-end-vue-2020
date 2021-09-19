<template>
  <div id="profile">
    <div class="navbar">
      <NavBars :navItems="navItems" />
    </div>
    <div class="profile-center">
      <div class="navtabs"></div>
      <div class="profile-center-profile">
        <UserProfile :initial-profile="profile" :current-user="currentUser" />
      </div>
      <div class="profile-tabs">
        <UserProfileTabs />
      </div>
      <div class="profile-tabs-content d-flex justify-content-center scrollbar" >
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
import IconHome from "@/components/icon/NavHome.vue";
import IconProfile from "@/components/icon/NavProfile.vue";
import IconSetting from "@/components/icon/NavSetting.vue";
import Popular from "./../components/Popular.vue";
import UserProfile from "./../components/UserProfile.vue";
import UserProfileTabs from "./../components/UserProfileTabs.vue";

const dummyData = {
  id: 2,
  account: "@user1",
  name: "user1",
  avatar: "https://loremflickr.com/240/240/?random=15.971597470975652",
  cover: "https://loremflickr.com/720/240/?random=43.394395528261676",
  role: "user",
  introduction:
    "Nulla quia blanditiis occaecati voluptates dolorum.\nDolores voluptas animi itaque omnis quae et.\nDucimus est et sit est deleniti sit voluptas eius.\nQui ut ipsum",
  followerCount: 0,
  followingCount: 0,
  tweetCount: 10,
  isFollowed: false,
};

const dummyUser = {
  id: 2,
  name: "user1",
  account: "@user1",
  avatar: "https://loremflickr.com/240/240/?random=44.498223728686305",
  role: "user",
  cover: "https://loremflickr.com/720/240/?random=78.80177917119791",
  followerCount: 0,
  followingCount: 0,
  tweetCount: 10,
};

export default {
  components: {
    NavBars,
    Popular,
    UserProfile,
    UserProfileTabs,
  },
  data() {
    return {
      profile: {},
      currentUser: {},
      navItems: [
        {
          name: "home",
          text: "首頁",
          to: "/",
          icon: IconHome,
        },
        {
          name: "profile",
          text: "個人資料",
          to: "/users/:userid/profile",
          icon: IconProfile,
        },
        {
          name: "setting",
          text: "設定",
          to: "/setting",
          icon: IconSetting,
        },
      ],
    };
  },
  created() {
    const { userid: profileId } = this.$route.params;
    this.ftechUsers(profileId);
  },
  methods: {
    ftechUsers(profileId) {
      console.log("fetchProfile id: ", profileId);

      this.profile = {
        id: dummyData.id,
        account: dummyData.account,
        name: dummyData.name,
        avatar: dummyData.avatar,
        cover: dummyData.cover,
        role: dummyData.role,
        introduction: dummyData.introduction,
        followerCount: dummyData.followerCount,
        followingCount: dummyData.followingCount,
        tweetCount: dummyData.tweetCount,
        isFollowed: dummyData.isFollowed,
      };
      this.currentUser = {
        id: dummyUser.id,
        name: dummyUser.name,
        account: dummyUser.account,
        avatar: dummyUser.avatar,
        role: dummyUser.role,
        cover: dummyUser.cover,
        followerCount: dummyUser.followerCount,
        followingCount: dummyUser.followingCount,
        tweetCount: dummyUser.tweetCount,
      };
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
  position: relative;
  width: 100%;
  display: flex;
  max-width: 1245px;
}
.navbar {
  position: sticky;
  top: 0;
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
    width:100%;
    height: 720px;
    overflow-y: scroll;
  }
}
</style>
