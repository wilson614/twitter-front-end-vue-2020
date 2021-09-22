<template>
  <div id="user-follower">
    <div class="navbar">
      <NavBars />
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
              <p class="introduction">{{follower.introduction}}</p>
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
      followers: [],
      userid: "",
    };
  },
  created() {
    const { userid: userid } = this.$route.params;
    this.userid = userid;
    this.fetchFollowers(userid);
  },
  beforeRouteUpdate(to, from, next) {
    const { userid } = to.params;
    this.userid = userid;
    this.fetchFollowers(userid);
    next();
  },
  methods: {
    async fetchFollowers(userid) {
      try {
        const { data } = await userAPI.getUserFollowers({ userid });
        this.followers = data;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
    async follow(id) {
      try {
        console.log(this.userid);
        const { data } = await userAPI.addFollowed({ id });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功跟隨",
        });
        const follower = this.followers.find(
          (follower) => follower.followerId === id
        );
        follower.isFollowed = true;
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: "error",
          title: "無法跟隨，請稍後再試",
        });
      }
    },
    async unfollow(id) {
      try {
        const { data } = await userAPI.deleteFollowed({ id });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功取消跟隨",
        });
        const follower = this.followers.find(
          (follower) => follower.followerId === id
        );
        follower.isFollowed = false;
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
