<template>
  <div id="user-follower">
    <div class="navbar">
      <NavBars :navItems="navItems" />
    </div>
    <div class="follower-center">
      <div class="navtabs"></div>
      <div class="follow-tabs"><UserFollowTabs /></div>
      <div class="follower-list">
        <UserFollowerList :followers="followers"/>
      </div>
    </div>
    <div class="bar-right"><Popular /></div>
  </div>
</template>

<script>
import NavBars from "./../components/NavBars.vue";
import IconHome from "@/components/icon/NavHome.vue";
import IconProfile from "@/components/icon/NavProfile.vue";
import IconSetting from "@/components/icon/NavSetting.vue";
import Popular from "./../components/Popular.vue";
import UserFollowerList from "./../components/UserFollowerList.vue";
import UserFollowTabs from "./../components/UserFollowTabs.vue";

const dummyData = [
  {
    followerId: 5,
    name: "user4",
    account: "@user4",
    avatar: "https://loremflickr.com/240/240/?random=82.34086245031686",
    cover: "https://loremflickr.com/720/240/?random=95.0042116135972",
    Followship: {
      id: 5,
      followerId: 5,
      followingId: 4,
      createdAt: "2021-09-19T03:31:24.000Z",
      updatedAt: "2021-09-19T03:31:24.000Z",
    },
  },
];

export default {
  components: {
    NavBars,
    Popular,
    UserFollowerList,
    UserFollowTabs,
  },
  data() {
    return {
      followers: [],
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
    this.fetchFollowers()
  },
  methods: {
    fetchFollowers() {
      this.followers = dummyData;
    }
  }
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

#user-follower {
  position: relative;
  width: 100%;
  display: flex;
  max-width: 1245px;
}
.navbar {
  position: sticky;
  top: 0;
}

.follower-center {
  margin: 0 2rem;
  flex-grow: 1;
  border-left: 1px solid $popular-border;
  border-right: 1px solid $popular-border;
  .navtabs {
    height: 55px;
  }
  .follow-tabs {
    height: 55px;
    border-bottom: 1px solid $popular-border;
  }
  .follower-list {
    height: 1440px;
    overflow-y: scroll;
  }
}
</style>
