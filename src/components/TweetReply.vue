<template>
  <!-- v-for="reply in replies" :key="reply.id" -->
  <div>
    <div :id="`tweet-reply-${reply.id}`" v-for="reply in replies" :key="reply.id" class="tweet-reply">
      <router-link :to="{ name: 'profile', params: { userid: reply.User.id } }">
      <img :src="reply.User.avatar" alt="avatar" />
      </router-link>
      <div class="reply-content">
        <div class="user-details">
          <router-link :to="{ name: 'profile', params: { userid: reply.User.id } }">
          <span class="user-name">{{ reply.User.name }}</span>
          </router-link>
          <span class="user-detail">
            {{ reply.User.account }}•{{
              isToday(reply.createdAt)
                ? fromNow(utcOffset(reply.createdAt))
                : timeFormat(utcOffset(reply.createdAt), 'MM月DD日')
            }}
          </span>
        </div>
        <div class="reply">
          <span>回覆&ensp;</span>
          <router-link :to="{ name: 'profile', params: { userid: reply.Tweet.User.id } }" class="reply-tweet-account">{{ '@'+reply.Tweet.User.account }}</router-link>
          <div class="reply-text">{{ reply.comment }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from './../utils/mixins'

export default {
  mixins: [fromNowFilter],
  props: {
    replies: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.tweet-reply {
  width: 100%;
  padding: 0.938rem;
  display: flex;
  border-bottom: 1px solid $popular-border;
  img {
    width: 50px;
    height: 50px;
    margin-right: 0.625rem;
    border-radius: 50px;
  }
}
// TODO:待確認 span 行高
.user-details {
  .user-name {
    font-size: 15px;
    font-weight: 700;
    color: $main-text;
    margin-right: 0.313rem;
  }
  .user-detail {
    font-size: 15px;
    font-weight: 500;
    color: $input-placeholder;
  }
}
.reply {
  span {
    margin-right: 0.5px;
    font-size: 15px;
    font-weight: 500;
    color: $input-placeholder;
  }
  .reply-tweet-account {
    font-size: 15px;
    font-weight: 500;
    color: $nav-avtive-color;
  }
  .reply-text {
    margin-top: 0.25rem;
    font-size: 15px;
    font-weight: 400;
    word-wrap: break-word;
  }
}
</style>
