<template>
  <div id="user-follower">
    <div class="navbar">
      <NavBars :navItems="navItems" />
    </div>
    <div class="follower-center">
      <div class="navtabs"></div>
      <div class="follow-tabs"><UserFollowTabs /></div>
      <div class="follower-list">
        <ul class="list">
          <li
            v-for="follower in followers"
            :key="follower.Followship.id"
            class="item d-flex"
          >
            <img class="avatar" :src="follower.avatar" />
            <div class="content">
              <div class="wrapper d-flex justify-content-between">
                <div class="info">
                  <p class="name">{{ follower.name }}</p>
                  <a href="" class="account">{{ follower.account }}</a>
                </div>
                <div class="btn-control">
                  <button
                    v-if="follower.isFollowed"
                    @click.stop.prevent="unfollow(follower.followerId)"
                    type="button"
                    class="btn following-btn"
                  >
                    正在跟隨
                  </button>
                  <button
                    v-else
                    @click.stop.prevent="follow(follower.followerId)"
                    type="button"
                    class="btn follow-btn"
                  >
                    跟隨
                  </button>
                </div>
              </div>
              <p class="introduction">
                Aut necessitatibus illo aut. Totam veniam atque et ea voluptate
                quis. Reiciendis unde sed vel. Aliquid sunt optio quia
                voluptatem reiciendis
              </p>
            </div>
          </li>
        </ul>
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
    isFollowed: false,
  },
];

export default {
  components: {
    NavBars,
    Popular,
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
    this.fetchFollowers();
  },
  methods: {
    fetchFollowers() {
      this.followers = dummyData;
    },
    follow(id) {
      const follower = this.followers.find(
        (follower) => follower.followerId === id
      );
      follower.isFollowed = true;
      //TODO call follow api
    },
    unfollow(id) {
      //TODO call  unfollow api
      const follower = this.followers.find(
        (follower) => follower.followerId === id
      );
      follower.isFollowed = false;
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
}

.follower-list {
  width: 100%;
  height: 1440px;
  overflow-y: scroll;
}
.list {
  width: 100%;
}
.item {
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid $popular-border;
  .avatar {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }
  .info {
    font-size: 15px;
    line-height: 15px;
    .name {
      font-weight: 700;
      padding-bottom: 5px;
    }
    .account {
      display: block;
      font-weight: 500;
      color: $input-placeholder;
      padding-bottom: 5px;
    }
  }
  .btn-control {
    .btn {
      font-size: 15px;
      font-weight: 700;
      line-height: 15px;
      border-radius: 100px;
      padding: 5px 15px;
    }
    .following-btn {
      background-color: $button-color;
      color: $body-bg;
    }
    .follow-btn {
      border: 1px solid $button-color;
      color: $button-color;
    }
  }
  .introduction {
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
  }
}
</style>
