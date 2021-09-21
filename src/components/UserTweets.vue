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
            <a href="" class="user account">{{ tweet.User.account }}</a>
            <span class="seperater">•</span>
            <span class="user created-at">{{
              isToday(tweet.createdAt)
                ? fromNow(utcOffset(tweet.createdAt))
                : timeFormat(utcOffset(tweet.createdAt), 'MM月DD日')
            }}</span>
          </div>
          <p class="tweet-content">
            {{ tweet.description }}
          </p>
          <div class="reply-likes d-flex align-items-center">
            <div class="reply-wrapper d-flex align-items-center">
              <img class="icon reply-icon" src="../assets/svg/reply.svg" />
              <p class="counts reply-counts">{{ tweet.replyCount }}</p>
            </div>
            <div class="like-wrapper d-flex align-items-center">
              <template v-if="tweet.isLiked">
                <img
                  class="icon isliked-icon"
                  src="../assets/svg/like_fill.svg"
                  @click.stop.prevent="doLike(tweet.id, !tweet.isLiked)"
                />
                <p class="counts isliked-counts">{{ tweet.likeCount }}</p>
              </template>
              <template v-else>
                <img
                  class="icon like-icon"
                  src="../assets/svg/like.svg"
                  @click.stop.prevent="doLike(tweet.id, !tweet.isLiked)"
                />
                <p class="counts like-counts">{{ tweet.likeCount }}</p>
              </template>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

const dummyData = [
  {
    id: 1,
    UserId: 2,
    description:
      "Modi amet nihil minus nihil modi laborum tempore nobis architecto.\nAd fuga rerum omnis amet ut consequatur pariatur \nLabore non facilis repu",
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T09:34:09.000Z",
    likeCount: 0,
    replyCount: 3,
    isLiked: 0,
    User: {
      id: 2,
      name: "user1",
      account: "@user1",
      avatar: "https://loremflickr.com/240/240/?random=15.971597470975652",
    },
  },
  {
    id: 2,
    UserId: 2,
    description:
      "Modi amet nihil minus nihil modi laborum tempore nobis architecto.\nAd fuga rerum omnis amet ut consequatur pariatur \nLabore non facilis repu",
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T09:34:09.000Z",
    likeCount: 0,
    replyCount: 3,
    isLiked: 0,
    User: {
      id: 2,
      name: "user1",
      account: "@user1",
      avatar: "https://loremflickr.com/240/240/?random=15.971597470975652",
    },
  },
];

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      this.tweets = dummyData;
    },
    doLike(id, isLike) {
      //TODO API calling
      const tweet = this.tweets.find((tweet) => tweet.id === id);
      tweet.isLiked = isLike;
      if (isLike) {
        tweet.likeCount++;
      } else {
        tweet.likeCount--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tweet-item {
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
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
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
