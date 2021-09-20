<template>
  <div id="tweetslatest">
    <div class="tweet-list" v-for="tweet in initialTweets" :key="tweet.id">
      <router-link :to="{ name: 'user', params: { id: tweet.UserId } }">
        <img :src="tweet.avatar" alt="userAvatar" />
      </router-link>
      <div class="tweet-list-content">
        <div class="user-details">
          <router-link :to="{ name: 'user', params: { id: tweet.UserId } }">
            <span class="user-name">{{ tweet.name }}</span>
          </router-link>
          <span class="user-detail">
            {{ tweet.account }}•{{
              isToday(tweet.createdAt)
                ? fromNow(utcOffset(tweet.createdAt))
                : timeFormat(utcOffset(tweet.createdAt), 'MM月DD日')
            }}
          </span>
        </div>
        <router-link :to="{ name: 'tweets', params: { id: tweet.id } }">
          <div class="user-tweet">
            <span class="tweet-text">
              {{ stringLimit(tweet.description) }}
            </span>
          </div>
        </router-link>
        <div class="btn btn-control">
          <div class="btn-reply">
            <TweetReply class="btn-icon" />
            <span>{{ tweet.replyCount }}</span>
          </div>
          <div class="btn-like">
            <TweetLke :class="['btn-icon', tweet.isLiked && 'btn-red']" />
            <span>{{ tweet.likeCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from './../utils/mixins'
import infiniteScroll from "vue-infinite-scroll";
import TweetReply from '@/components/icon/TweetReply.vue'
import TweetLke from '@/components/icon/TweetLike.vue'

export default {
  mixins: [fromNowFilter],
  directives: { infiniteScroll },
  components: {
    TweetReply,
    TweetLke,
  },
  props: {
    initialTweets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tweets: [],
      more: {},
    }
  },
  methods: {
    readMore(id) {
      let isMore = this.more[id]
      this.$set(this.more, id, !isMore)
    },
    loadTweets() {
      console.log('load tweets')
      this.busy = true
      if (this.offset >= this.initialTweets.length) {
        return
      }
    setTimeout(() => {
        //TODO call api get tweets
        for (
          let i = 0;
          this.offset < this.initialTweets.length && i < this.limit;
          i++, this.offset++
        ) {
          this.tweets.push(this.initialTweets[this.offset])
        }
        this.busy = false
      }, 500)
    },
    stringLimit(description) {
      return description.length > 139
        ? description.slice(0, 139) + '...'
        : description
    },
  },
}
</script>

<style lang="scss" scoped>
.tweet-list {
  width: 100%;
  padding: 0.625rem 0.938rem;
  display: flex;
  border-bottom: 0.063rem solid $popular-border;
  img {
    width: 50px;
    height: 50px;
    margin-right: 0.625rem;
    border-radius: 50px;
  }
}
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

.user-tweet {
  margin: 0.375rem 0 0.625rem;
  color: $main-text;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
}

.btn-control {
  margin-bottom: 0.625rem;
  padding: 0.188rem 0;
  display: flex;
  .btn-icon {
    color: $input-placeholder;
  }
  // TODO: 確認正確的 SVG
  .btn-red {
    fill: $like-icon;
  }
  .btn-reply {
    margin-right: 3.125rem;
  }
  span {
    margin-left: 0.625rem;
    font-size: 13px;
    font-weight: 500;
    color: $input-placeholder;
    vertical-align: middle;
  }
  span::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
}
</style>
