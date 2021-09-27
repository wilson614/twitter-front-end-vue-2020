<template>
  <div class="user-tweets-container d-flex justify-content-center">
    <ul class="user-tweet-list">
      <li v-for="tweet in tweets" :key="tweet.id" class="tweet-item d-flex">
        <div class="user-avatar">
          <img class="avatar" :src="tweet.User.avatar" />
        </div>
        <div class="user-tweet-main">
          <div class="user-info">
            <span class="user name">{{ tweet.User.name }}</span>
            <router-link :to="`/users/${tweet.UserId}`" class="user account">{{
              "@" + tweet.User.account
            }}</router-link>
            <span class="seperater">•</span>
            <span class="user created-at">{{
              isToday(tweet.createdAt)
                ? fromNow(utcOffset(tweet.createdAt))
                : timeFormat(utcOffset(tweet.createdAt), "MM月DD日")
            }}</span>
          </div>
          <router-link :to="`/tweets/${tweet.id}`">
            <p class="tweet-content">
              {{ tweet.description }}
            </p>
          </router-link>
          <div class="reply-likes d-flex align-items-center">
            <div
              class="reply-wrapper d-flex align-items-center cursor-pointer"
              @click="showtweetReplyModal(tweet)"
            >
              <!-- <router-link :to="`/tweets/${tweet.id}`"> -->
              <img class="icon reply-icon" src="../assets/svg/reply.svg" />
              <!-- </router-link> -->
              <p class="counts reply-counts">{{ tweet.replyCount }}</p>
            </div>
            <div class="like-wrapper d-flex align-items-center">
              <template v-if="tweet.isLiked">
                <img
                  class="icon isliked-icon"
                  src="../assets/svg/like_fill.svg"
                  :disabled="isProcessing"
                  @click.stop.prevent="doLike(tweet.id, !tweet.isLiked)"
                />
                <p class="counts isliked-counts">{{ tweet.likeCount }}</p>
              </template>
              <template v-else>
                <img
                  class="icon like-icon"
                  src="../assets/svg/like.svg"
                  :disabled="isProcessing"
                  @click.stop.prevent="doLike(tweet.id, !tweet.isLiked)"
                />
                <p class="counts like-counts">{{ tweet.likeCount }}</p>
              </template>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <TweetReplyModal
      :tweet="modalData"
      v-if="Object.keys(modalData).length !== 0"
      @close="modalClose"
      @submit="replySubmit"
    />
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import TweetReplyModal from "@/components/TweetReplyModal.vue";
import userAPI from "./../apis/user";
import tweetAPI from "./../apis/tweets";
import { Toast } from "./../utils/helpers";
export default {
  mixins: [fromNowFilter],
  components: {
    TweetReplyModal,
  },
  data() {
    return {
      tweets: [],
      modalData: {},
      isShowModal: false,
      isProcessing: false,
    };
  },
  created() {
    const { userid: userid } = this.$route.params;
    this.fetchTweets(userid);
  },
  beforeRouteUpdate(to, from, next) {
    const { userid } = to.params;
    this.fetchTweets(userid);
    next();
  },
  methods: {
    async fetchTweets(userid) {
      try {
        const { data } = await userAPI.getUserTweet({ userid });
        this.tweets = data;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
    async doLike(tweetId, isLike) {
      try {
        if (this.isProcessing) {
          return;
        }
        this.isProcessing = true;
        let response;
        if (isLike) {
          response = await tweetAPI.likeTweet({ tweetId });
        } else {
          response = await tweetAPI.unlikeTweet({ tweetId });
        }
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        const message = isLike ? "成功加入最愛" : "成功移除最愛";
        Toast.fire({
          icon: "success",
          title: message,
        });
        this.isProcessing = false;

        const tweet = this.tweets.find((tweet) => tweet.id === tweetId);
        tweet.isLiked = isLike;
        if (isLike) {
          tweet.likeCount++;
        } else {
          tweet.likeCount--;
        }
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法 加入/移除 最愛",
        });
        this.isProcessing = false;
      }
    },
    showtweetReplyModal(tweet) {
      this.modalData = {
        name: tweet.User.name,
        account: tweet.User.account,
        avatar: tweet.User.avatar,
        createdAt: tweet.createdAt,
        description: tweet.description,
        id: tweet.id,
        // comment: '',
      };
    },
    modalClose() {
      this.modalData = {};
    },
    replySubmit(formData) {
      console.log(formData);
      // ...api
      this.modalClose();
    },
  },
};
</script>

<style lang="scss" scoped>
.user-tweets-container,
.user-tweet-list {
  width: 100%;
}
.tweet-item {
  width: 100%;
  padding: 10px 15px;
  border-bottom: 1px solid $popular-border;
}
.user-avatar {
  padding: 4px 10px 0 0;
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
.user-tweet-main {
  width: 100%;
  .user-info {
    span,
    a {
      display: inline-block;
      margin-bottom: 12px;
    }
    .name {
      font-size: 15px;
      font-weight: 700;
      margin-right: 8px;
    }
    .account,
    .seperater,
    .created-at {
      font-size: 15px;
      font-weight: 500;
      color: $input-placeholder;
    }
  }
  .tweet-content {
    max-width: 500px;
    word-wrap: break-word;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    color: $main-text;
  }
  .reply-likes {
    margin-top: 12px;
    .reply-wrapper {
      margin-right: 3em;
    }
    .reply-icon,
    .like-icon {
      width: 15px;
      height: 15px;
    }
    .isliked-icon {
      width: 24px;
      height: 24px;
    }
    .counts {
      font-weight: 500;
      font-size: 13px;
      line-height: 13px;
      color: $input-placeholder;
      margin-left: 1em;
    }
    .isliked-counts {
      color: $like-icon;
    }
  }
}
</style>
