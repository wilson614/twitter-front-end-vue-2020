<template>
  <div class="container admin-tweet-list">
    <div
      class="tweet-list-wrapper"
      v-infinite-scroll="loadTweets"
      infinite-scroll-throttle-delay="100"
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
                <span class="created-at">{{
                  isToday(tweet.createdAt)
                    ? fromNow(utcOffset(tweet.createdAt))
                    : timeFormat(utcOffset(tweet.createdAt), "MM月DD日")
                }}</span>
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
              type="button"
              class="btn btn-delete"
              @click.stop.prevent="deleteTweet(tweet.id)"
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
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [fromNowFilter],
  directives: { infiniteScroll },
  data() {
    return {
      more: {},
      busy: false,
      page: 1,
      limit: 20,
      tweets: [],
    };
  },
  methods: {
    readMore(id) {
      let isMore = this.more[id];
      this.$set(this.more, id, !isMore);
    },
    async loadTweets() {
      this.busy = true;
      try {
        const { data } = await adminAPI.tweets.get({ page: this.page });
        if (data.length === 0) {
          Toast.fire({
            icon: "info",
            title: "推文資料載入完畢",
          });
          return;
        }
        data.forEach((tweet) => {
          this.tweets.push(tweet);
        });
        this.busy = false;
        this.page++;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
    async deleteTweet(tweetId) {
      try {
        const { data } = await adminAPI.tweets.delete({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法刪除資料，請稍後再試",
        });
      }
    },
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
  display: flex;
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
    color: $input-placeholder;
  }
}
</style>
