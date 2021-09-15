<template>
  <div class="container admin-tweet-list">
    <div
      class="tweet-list-wrapper"
      v-infinite-scroll="loadTweets"
      infinite-scroll-throttle-delay="500"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <ul class="tweet-list-content">
        <li
          v-for="tweet in tweets"
          :key="tweet.id"
          class="tweet-wrapper py-5 px-4"
        >
          <div class="tweet-content">
            <div class="user-avatar mr-4">
              <img class="avatar" :src="tweet.avatar" alt="" />
            </div>
            <div class="user-details">
              <div class="user-name-account">
                <span class="user-name">{{ tweet.name }}</span>
                <span class="user-account"
                  ><a href="">{{ tweet.account }}</a></span
                >
                <span class="seperater">•</span>
                <span class="created-at"
                  >{{ tweet.createdAt | fromNow }} 小時</span
                >
              </div>
              <div class="user-tweet">
                <span class="tweet-text">
                  {{
                    more[tweet.id]
                      ? tweet.description
                      : tweet.description.slice(0, 50)
                  }}
                </span>
                <a
                  class="read-more-less"
                  v-if="tweet.description.length > 50"
                  @click="readMore(tweet.id)"
                  href="#"
                  >{{ more[tweet.id] ? "less" : "...more" }}</a
                >
              </div>
            </div>
          </div>
          <div class="btn btn-control">
            <button
              v-if="currentUser.isAdmin"
              type="button"
              class="btn btn-delete"
              @click.stop.prevent="handleDeleteButtonClick(tweet.id)"
            >
              <img src="../assets/svg/admin-X.svg" alt="" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import infiniteScroll from "vue-infinite-scroll";
import { fromNowFilter } from "./../utils/mixins";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  mixins: [fromNowFilter],
  directives: { infiniteScroll },
  props: {
    tweets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentUser: dummyUser.currentUser,
      more: {},
      busy: false,
      offset: 0,
    };
  },
  methods: {
    readMore(id) {
      let isMore = this.more[id];
      this.$set(this.more, id, !isMore);
    },
    loadTweets() {
      console.log("load tweets");
      this.busy = true;
      setTimeout(() => {
        //TODO call api get tweets
        for (
          let i = 0;
          this.offset < this.tweets.length && i < 5;
          i++, this.offset++
        ) {
          this.tweets.push(this.tweets[this.offset]);
        }
        console.log(this.tweets);
        this.busy = false;
      }, 1000);
    },
    handleDeleteButtonClick (tweetId) {
      console.log('handleDeleteButtonClick', tweetId)
      // TODO: 請求 API 伺服器刪除 id 為 commentId 的評論
      // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
      this.$emit('after-delete-comment', tweetId)
    }
  },
};
</script>

<style lang="scss" scoped>
.admin-tweet-list {
  width: 100%;
}

.tweet-wrapper {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $popular-border;
  .tweet-content {
    display: flex;
    width: 50%;
  }
}

.user-avatar {
  // border: 1px solid red;
  display: flex;
  // align-items: center;
  height: 100%;
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
}
.user-name-account {
  .user-name {
    font-size: 15px;
    font-weight: 700;
    margin-right: 0.5em;
  }
  .user-account,
  .seperater,
  .created-at {
    font-size: 15px;
    font-weight: 500;
    color: $input-placeholder;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
.user-tweet {
  .tweet-text,
  .read-more-less {
    font-size: 15px;
    font-weight: 500;
  }
  .read-more-less {
    color: $signin-link;
  }
}
</style>
