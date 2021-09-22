<template>
  <div class="container admin-user-list">
    <div v-for="user in users" :key="user.id" class="card">
      <div class="card-top">
        <img class="cover-img" :src="user.cover" alt="..." />
        <img class="avatar" :src="user.avatar" alt="..." />
      </div>
      <div class="card-body d-flex flex-column align-items-center">
        <p class="card-name">{{ user.name }}</p>
        <p class="card-account mt-2">{{ user.account }}</p>
        <div class="tweet-like d-flex mt-2">
          <div class="tweet-count-wrapper d-flex align-items-center">
            <img
              class="icon icon-tweet-count"
              src="../assets/svg/reply.svg"
              alt=""
            />
            <span class="tweet-count ml-1">{{ user.tweetCount }}k</span>
          </div>
          <div class="like-count-wrapper d-flex align-items-center ml-4">
            <img
              class="icon icon-like-count"
              src="../assets/svg/like.svg"
              alt=""
            />
            <span class="like-count ml-1">{{ user.likeCount }}k</span>
          </div>
        </div>
        <div class="follows mt-2">
          <span class="following"
            >{{ user.followingCount }}個<span class="a-following"
              >跟隨中</span
            ></span
          >
          <span class="follower ml-3"
            >{{ user.followingCount }}位<span class="a-follower"
              >跟隨者</span
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      users: [],
      more: {},
    };
  },
  created() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      try {
        const { data } = await adminAPI.users.get();
        this.users = data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-user-list {
  display: flex;
  flex-flow: row wrap;
}

.card {
  position: relative;
  width: 245px;
  height: 314px;
  margin: 1em 0 0 0.8em;
  background-color: $admin-card-lightgrey-bg;
  border-radius: 10px;
  .cover-img {
    width: 245px;
    height: 140px;
    border-radius: 10px 10px 0 0;
  }
  .avatar {
    position: absolute;
    top: 25%;
    left: 30%;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid $body-bg;
  }
  .icon {
    width: 19px;
    height: 19px;
    display: inline-block;
  }
  .tweet-count,
  .like-count {
    display: inline-block;
  }
}
.card-body {
  padding-top: 2.8em;
  .card-name,
  .card-account {
    font-size: 15px;
    font-weight: 900;
  }
  .card-account {
    color: $input-placeholder;
  }
  .following,
  .follower,
  .a-following,
  .a-follower {
    font-size: 14px;
    font-weight: 500;
  }
  .a-following,
  .a-follower {
    color: $input-placeholder;
  }
}
</style>
