<template>
  <div class="user-tweets-container d-flex justify-content-center">
    <ul class="user-tweet-list">
      <li v-for="tweet in tweets" :key="tweet.id" class="tweet-item d-flex">
        <div class="user-avatar">
          <img
            class="avatar"
            src="https://loremflickr.com/240/240/?random=44.498223728686305"
          />
        </div>
        <div class="user-tweet-main">
          <div class="user-info">
            <span class="user name">John Doe</span>
            <a href="" class="user account">@heyjohn</a>
            <span class="seperater">•</span>
            <span class="user created-at"
              >{{ tweet.createdAt | fromNow }}</span
            >
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
      "Modi amet nihil minus nihil modi laborum tempore nobis architecto.\nAd fuga rerum omnis amet ut consequatur pariatur.\nLabore non facilis repu",
    likeCount: 0,
    replyCount: 3,
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T07:05:56.000Z",
    isLiked: false,
  },
  {
    id: 2,
    UserId: 2,
    description:
      "Aut necessitatibus illo aut. Totam veniam atque et ea voluptate quis. Reiciendis unde sed vel. Aliquid sunt optio quia voluptatem reiciendis",
    likeCount: 0,
    replyCount: 3,
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T07:05:56.000Z",
    isLiked: false,
  },
  {
    id: 3,
    UserId: 2,
    description: "eius dolor officiis",
    likeCount: 0,
    replyCount: 3,
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T07:05:56.000Z",
    isLiked: false,
  },
  {
    id: 4,
    UserId: 2,
    description:
      "Quidem est soluta autem accusamus repellat. Necessitatibus non adipisci maiores enim. Dolorem ut voluptas a blanditiis odio minus. Magnam be",
    likeCount: 0,
    replyCount: 3,
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T07:05:56.000Z",
    isLiked: false,
  },
  {
    id: 5,
    UserId: 2,
    description: "dolor iure vel",
    likeCount: 0,
    replyCount: 3,
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T07:05:56.000Z",
    isLiked: false,
  },
  {
    id: 6,
    UserId: 2,
    description:
      "Voluptas ipsam doloremque ducimus nam numquam. Qui aut et ratione quisquam. Ratione quam doloribus explicabo.",
    likeCount: 0,
    replyCount: 3,
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T07:05:56.000Z",
    isLiked: false,
  },
  {
    id: 7,
    UserId: 2,
    description: "sit incidunt sunt",
    likeCount: 0,
    replyCount: 3,
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T07:05:56.000Z",
    isLiked: false,
  },
  {
    id: 8,
    UserId: 2,
    description:
      "Culpa vero quod officia. Dolores qui doloremque rerum a aut magni aut. Impedit ea rerum distinctio velit qui ut eos dignissimos. Beatae ad r",
    likeCount: 0,
    replyCount: 3,
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T07:05:56.000Z",
    isLiked: false,
  },
  {
    id: 9,
    UserId: 2,
    description: "voluptatum ab molestiae",
    likeCount: 0,
    replyCount: 3,
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T07:05:56.000Z",
    isLiked: false,
  },
  {
    id: 10,
    UserId: 2,
    description:
      "Delectus quidem maiores hic vel distinctio quia. Veniam incidunt ipsam qui vel. Ut quaerat dicta voluptatem voluptas. Impedit ducimus quod q",
    likeCount: 0,
    replyCount: 3,
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T07:05:56.000Z",
    isLiked: false,
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
