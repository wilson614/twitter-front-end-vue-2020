<template>
  <div class="user-reply-container d-flex justify-content-center">
    <ul class="user-reply-list">
      <li v-for="reply in replies" :key="reply.id" class="reply-item d-flex">
        <div class="user-avatar">
          <img class="avatar" :src="reply.User.avatar" />
        </div>
        <div class="user-reply-main">
          <div class="user-info">
            <span class="user name">{{ reply.User.name }}</span>
            <a href="" class="user account">{{ reply.User.account }}</a>
            <span class="seperater">•</span>
            <span class="user created-at">{{
              isToday(reply.createdAt)
                ? fromNow(utcOffset(reply.createdAt))
                : timeFormat(utcOffset(reply.createdAt), 'MM月DD日')
            }}</span>
          </div>
          <div class="replay-to d-flex align-items-center">
            <span class="reply-title">回覆</span>
            <a class="reply-account" href="">{{ reply.Tweet.User.account }}</a>
          </div>
          <p class="reply-content">{{ reply.comment }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

const dummyData = [
  {
    id: 4,
    UserId: 5,
    TweetId: 2,
    comment: "perferendis quia est",
    createdAt: "2021-09-17T07:05:56.000Z",
    updatedAt: "2021-09-17T07:05:56.000Z",
    isLiked: 0,
    User: {
      id: 5,
      account: "@user4",
      name: "user4",
      avatar: "https://loremflickr.com/240/240/?random=82.34086245031686",
    },
    Tweet: {
      id: 2,
      UserId: 2,
      description:
        "Aut necessitatibus illo aut. Totam veniam atque et ea voluptate quis. Reiciendis unde sed vel. Aliquid sunt optio quia voluptatem reiciendis",
      likeCount: 1,
      replyCount: 3,
      createdAt: "2021-09-17T07:05:56.000Z",
      updatedAt: "2021-09-19T04:49:25.000Z",
      User: {
        id: 2,
        name: "user1",
        account: "@user1",
      },
    },
  },
];

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      replies: [],
    };
  },
  created() {
    this.fetchReplies();
  },
  methods: {
    fetchReplies() {
      this.replies = dummyData;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-reply-container,
.user-reply-list {
  width: 100%;
}
.reply-item {
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

.user-reply-main {
  .user-info {
    span,
    a {
      display: inline-block;
    }
    .name {
      font-size: 15px;
      font-weight: 700;
      margin-right: 8px;
    }
    .account,
    .seperater,
    .created-at,
    .reply-account {
      font-size: 15px;
      font-weight: 500;
      color: $input-placeholder;
    }
  }
  .reply-title {
    font-size: 15px;
    font-weight: 500;
    color: $input-placeholder;
    margin-right: 4px;
  }
  .reply-account {
    color: $button-color;
  }
  .reply-content {
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
  }
}
</style>
