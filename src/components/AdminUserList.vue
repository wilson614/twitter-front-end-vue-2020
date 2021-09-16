<template>
  <div
    class="container admin-user-list"
    v-infinite-scroll="loadUsers"
    infinite-scroll-throttle-delay="500"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
  >
    <div v-for="user in users" :key="user.id" class="card">
      <div class="card-top">
        <img class="cover-img" :src="user.cover" alt="..." />
        <img class="avatar" :src="user.avatar" alt="..." />
      </div>
      <div class="card-body d-flex flex-column align-items-center">
        <p class="card-name">{{ user.name }}</p>
        <a class="card-account mt-2" href="">{{ user.account }}</a>
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
            >{{ user.followingCount }}個<a
              class="a-following"
              href="/users/:id/following"
              >跟隨中</a
            ></span
          >
          <span class="follower ml-3"
            >{{ user.followingCount }}位<a
              class="a-follower"
              href="/users/:id/follower"
              >跟隨者</a
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import infiniteScroll from "vue-infinite-scroll";

export default {
  directives: { infiniteScroll },
  props: {
    initialUsers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      users: [],
      more: {},
      busy: false,
      offset: 0,
      limit: 8,
    };
  },
  methods: {
    loadUsers() {
      console.log("load users");
      this.busy = true;
      if (this.offset >= this.initialUsers.length) {
        return;
      }
      setTimeout(() => {
        //TODO call api get users
        for (
          let i = 0;
          this.offset < this.initialUsers.length && i < this.limit;
          i++, this.offset++
        ) {
          this.users.push(this.initialUsers[this.offset]);
        }
        this.busy = false;
      }, 500);
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
