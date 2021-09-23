<template>
  <!-- v-for="reply in replies" :key="reply.id" -->
  <section>
    <div id="tweet-reply" v-for="reply in replies" :key="reply.id">
      <img :src="reply.User.avatar" alt="avatar" />
      <div class="reply-content">
        <div class="user-details">
          <span class="user-name">{{ reply.User.name }}</span>
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
          <a class="reply-tweet-account">{{ reply.Tweet.User.account }}</a>
          <div class="reply-text">{{ reply.comment }}</div>
        </div>
      </div>
    </div>
  </section>
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
  // data() {
  //   return {
  //     replies: [],
  //   }
  // }
}
</script>

<style lang="scss" scoped>
#tweet-reply {
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
  }
}
</style>
