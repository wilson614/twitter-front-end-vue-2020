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
              <p class="introduction">{{following.introduction}}</p>
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
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";

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
    const { userid: userid } = this.$route.params;
    this.fetchFollowings(userid);
  },
  beforeRouteUpdate(to, from, next) {
    const { userid } = to.params;
    this.fetchFollowings(userid);
    next();
  },
  methods: {
    async fetchFollowings(userid) {
      try {
        const { data } = await userAPI.getUserFollowings({ userid });
        this.followings = data;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
    async unFollow(id) {
      try {
        const { data } = await userAPI.deleteFollowed({ id });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功取消跟隨",
        });
        this.followings = this.followings.filter(
          (following) => following.followingId !== id
        );
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: "error",
          title: "無法取消跟隨，請稍後再試",
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
