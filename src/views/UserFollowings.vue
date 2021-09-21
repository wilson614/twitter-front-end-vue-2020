<template>
  <div id="user-following">
    <div class="navbar">
      <NavBars />
    </div>
    <div class="following-center">
      <div class="navtabs"></div>
      <div class="follow-tabs"><UserFollowTabs /></div>

      <div class="following-list">
        <ul class="list">
          <li
            v-for="following in followings"
            :key="following.Followship.id"
            class="item d-flex"
          >
            <img class="avatar" :src="following.avatar" />
            <div class="content">
              <div class="wrapper d-flex justify-content-between">
                <div class="info">
                  <p class="name">{{ following.name }}</p>
                  <a href="" class="account">{{ following.account }}</a>
                </div>
                <div class="btn-control">
                  <button
                    type="button"
                    class="btn following-btn"
                    @click.stop.prevent="unFollow(following.followingId)"
                  >
                    正在跟隨
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
import Popular from "./../components/Popular.vue";
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
    UserFollowTabs,
  },
  data() {
    return {
      followings: [],
    };
  },
  created() {
    this.fetchFollowings();
  },
  methods: {
    fetchFollowings() {
      this.followings = dummyData;
    },
    unFollow(id) {
      //TODO API calling
      this.followings = this.followings.filter(
        (following) => following.followingId !== id
      );
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
}

.following-list {
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
