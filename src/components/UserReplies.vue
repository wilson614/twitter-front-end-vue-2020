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
            <router-link :to="`/users/${reply.UserId}`" class="user account">{{
              "@" + reply.User.account
            }}</router-link>
            <span class="seperater">•</span>
            <span class="user created-at">{{
              isToday(reply.createdAt)
                ? fromNow(utcOffset(reply.createdAt))
                : timeFormat(utcOffset(reply.createdAt), "MM月DD日")
            }}</span>
          </div>
          <div class="replay-to d-flex align-items-center">
            <span class="reply-title">回覆</span>
            <router-link
              class="reply-account"
              :to="`/users/${reply.Tweet.User.id}`"
              >{{ reply.Tweet.User.account }}</router-link
            >
          </div>
          <p class="reply-content">{{ reply.comment }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      replies: [],
    };
  },
  created() {
    const { userid: userid } = this.$route.params;
    this.fetchReplies(userid);
  },
  beforeRouteUpdate(to, from, next) {
    const { userid } = to.params;
    this.fetchReplies(userid);
    next();
  },
  methods: {
    async fetchReplies(userid) {
      try {
        const { data } = await userAPI.getUserReplies({ userid });
        this.replies = data;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
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
    max-width: 500px;
    word-wrap: break-word;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
  }
}
</style>
