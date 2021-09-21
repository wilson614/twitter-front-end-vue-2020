<template>
  <div class="user-likes-container d-flex justify-content-center">
    <ul class="user-like-list">
      <li v-for="like in likes" :key="like.id" class="like-item d-flex">
        <div class="user-avatar">
          <img
            class="avatar"
            :src="like.Tweet.User.avatar"
          />
        </div>
        <div class="user-like-main">
          <div class="user-info">
            <span class="user name">{{like.Tweet.User.name}}</span>
            <a href="" class="user account">{{like.Tweet.User.account}}</a>
            <span class="seperater">•</span>
            <span class="user created-at">{{
              isToday(like.Tweet.createdAt)
                ? fromNow(utcOffset(like.Tweet.createdAt))
                : timeFormat(utcOffset(like.Tweet.createdAt), 'MM月DD日')
            }}</span>
          </div>
          <p class="like-content">
            {{ like.Tweet.description }}
          </p>
          <div class="reply-likes d-flex align-items-center">
            <div class="reply-wrapper d-flex align-items-center">
              <img class="icon reply-icon" src="../assets/svg/reply.svg" />
              <p class="counts reply-counts">{{ like.Tweet.replyCount }}</p>
            </div>
            <div class="like-wrapper d-flex align-items-center">
              <img
                class="icon isliked-icon"
                src="../assets/svg/like_fill.svg"
                @click.stop.prevent="unLike(like.id)"
              />
              <p class="counts isliked-counts">{{ like.Tweet.likeCount }}</p>
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
    id: 9,
    UserId: 5,
    TweetId: 48,
    createdAt: "2021-09-19T04:49:32.000Z",
    updatedAt: "2021-09-19T04:49:32.000Z",
    isLiked: 0,
    Tweet: {
      id: 48,
      UserId: 6,
      description: "repellat",
      likeCount: 1,
      replyCount: 3,
      createdAt: "2021-09-17T07:05:56.000Z",
      updatedAt: "2021-09-19T04:49:32.000Z",
      User: {
        id: 6,
        account: "@user5",
        name: "user5",
        avatar: "https://loremflickr.com/240/240/?random=58.97211358858128",
      },
    },
  },
  {
    id: 8,
    UserId: 5,
    TweetId: 50,
    createdAt: "2021-09-19T04:49:28.000Z",
    updatedAt: "2021-09-19T04:49:28.000Z",
    isLiked: 0,
    Tweet: {
      id: 50,
      UserId: 6,
      description: "aperiam",
      likeCount: 1,
      replyCount: 3,
      createdAt: "2021-09-17T07:05:56.000Z",
      updatedAt: "2021-09-19T04:49:28.000Z",
      User: {
        id: 6,
        account: "@user5",
        name: "user5",
        avatar: "https://loremflickr.com/240/240/?random=58.97211358858128",
      },
    },
  },
];

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      likes: [],
    };
  },
  created() {
    this.fetchLikes();
  },
  methods: {
    fetchLikes() {
      this.likes = dummyData;
    },
    unLike(id) {
      //TODO API calling
      this.likes = this.likes.filter((like) => like.id !== id);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-likes-container {
  width: 100%;
}
.user-like-list {
  width: 100%;
}
.like-item {
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

.user-like-main {
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
  .like-content {
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
  }
  .reply-likes {
    margin-top: 12px;
    .reply-wrapper {
      margin-right: 3em;
    }
    .reply-icon {
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
