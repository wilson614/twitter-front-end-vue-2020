<template>
  <div id="user-following">
    <div class="navbar">
      <NavBars :navItems="navItems" />
    </div>
    <div class="following-center">
      <div class="navtabs"></div>
      <div class="follow-tabs"><UserFollowTabs /></div>
      <div class="following-list">
        <UserFollowingList :followings="followings"/>
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
import UserFollowingList from "./../components/UserFollowingList.vue";
import UserFollowTabs from "./../components/UserFollowTabs.vue";

const dummyData = [
  {
    followingId: 5,
    name: "user4",
    account: "@user4",
    avatar: "https://loremflickr.com/240/240/?random=82.34086245031686",
    cover: "https://loremflickr.com/720/240/?random=95.0042116135972",
    Followship: {
      id: 3,
      followerId: 4,
      followingId: 5,
      createdAt: "2021-09-19T03:29:01.000Z",
      updatedAt: "2021-09-19T03:29:01.000Z",
    },
  },
  {
    followingId: 3,
    name: "管理者",
    account: "@user2",
    avatar: "https://loremflickr.com/240/240/?random=72.55545383550334",
    cover: "https://loremflickr.com/720/240/?random=54.458978979787595",
    Followship: {
      id: 2,
      followerId: 4,
      followingId: 3,
      createdAt: "2021-09-19T03:28:55.000Z",
      updatedAt: "2021-09-19T03:28:55.000Z",
    },
  },
  {
    followingId: 2,
    name: "user1",
    account: "@user1",
    avatar: "https://loremflickr.com/240/240/?random=15.971597470975652",
    cover: "https://loremflickr.com/720/240/?random=43.394395528261676",
    Followship: {
      id: 1,
      followerId: 4,
      followingId: 2,
      createdAt: "2021-09-19T03:28:46.000Z",
      updatedAt: "2021-09-19T03:28:46.000Z",
    },
  },
];

export default {
  components: {
    NavBars,
    Popular,
    UserFollowingList,
    UserFollowTabs,
  },
  data() {
    return {
      followings: [],
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
    this.fetchFollowings()
  },
  methods: {
    fetchFollowings() {
      this.followings = dummyData;
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

#user-following {
  position: relative;
  width: 100%;
  display: flex;
  max-width: 1245px;
}
.navbar {
  position: sticky;
  top: 0;
}

.following-center {
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
  .following-list {
    height: 1440px;
    overflow-y: scroll;
  }
}
</style>
