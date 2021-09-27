<template>
  <div id="tweetslatest">
    <div class="tweet-list" v-for="tweet in componentTweets" :key="tweet.id">
      <router-link :to="{ name: 'profile', params: { userid: tweet.UserId } }">
        <img :src="tweet.avatar" alt="userAvatar" />
      </router-link>
      <div class="tweet-list-content">
        <div class="user-details">
          <router-link :to="{ name: 'profile', params: { userid: tweet.UserId } }">
            <span class="user-name">{{ tweet.name }}</span>
          </router-link>
          <router-link :to="{ name: 'profile', params: { userid: tweet.UserId } }">
            <span class="user-account">
              {{ '@'+tweet.account }}
            </span>
          </router-link>
          <span class="time">
            •{{
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
          <span
            class="btn-reply cursor-pointer"
            @click="showtweetReplyModal(tweet)"
          >
            <TweetReply class="btn-icon" />
            <span class="btn-text">{{ tweet.replyCount }}</span>
          </span>
          <div class="btn-like cursor-pointer">
            <span
              style="display: inline-block"
              @click.stop.prevent="handleLike(tweet.isLiked, tweet.id)"
            >
              <TweetLke :isActive="tweet.isLiked" />
            </span>
            <span class="btn-text">{{ tweet.likeCount }}</span>
          </div>
        </div>
      </div>
    </div>
    <TweetReplyModal
      :tweet="modalData"
      v-if="Object.keys(modalData).length !== 0"
      @close="modalClose"
      @submit="replySubmit"
    />
  </div>
</template>

<script>
import { fromNowFilter } from './../utils/mixins'
import infiniteScroll from 'vue-infinite-scroll'
import TweetReply from '@/components/icon/TweetReply.vue'
import TweetLke from '@/components/icon/TweetLike.vue'
import TweetReplyModal from '@/components/TweetReplyModal.vue'
import tweetsAPI from './../apis/tweets'
import { Toast } from './../utils/helpers'

export default {
  mixins: [fromNowFilter],
  directives: { infiniteScroll },
  components: {
    TweetReply,
    TweetLke,
    TweetReplyModal,
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
      componentTweets: [],
      more: {},
      modalData: {},
    }
  },
  watch: {
    initialTweets: {
      handler() {
        this.componentTweets = this.initialTweets
      },
      deep: true,
    },
  },
  methods: {
    readMore(id) {
      let isMore = this.more[id]
      this.$set(this.more, id, !isMore)
    },
    loadTweets() {
      console.log('load tweets')
      this.busy = true
      if (this.offset >= this.componentTweets.length) {
        return
      }
      setTimeout(() => {
        //TODO call api get tweets
        for (
          let i = 0;
          this.offset < this.componentTweets.length && i < this.limit;
          i++, this.offset++
        ) {
          this.tweets.push(this.componentTweets[this.offset])
        }
        this.busy = false
      }, 500)
    },
    stringLimit(description) {
      return description.length > 139
        ? description.slice(0, 139) + '...'
        : description
    },
    showtweetReplyModal(tweet) {
      this.modalData = tweet
    },
    modalClose() {
      this.modalData = {}
    },
    replySubmit(formData) {
      console.log(formData)
      // ...api
      this.modalClose()
    },
    handleLike(isLiked, id) {
      this.handleaddLiked(isLiked, id)
      this.addLiked(isLiked, id)
    },
    async addLiked(isLiked, id) {
      // this.handleaddLiked(id)
      try {
        if (isLiked) {
          await tweetsAPI.deleteLiked(id)
        } else {
          await tweetsAPI.addLiked(id)
        }
      } catch (error) {
        const toastTitle = isLiked
          ? '無法對推文按不喜歡，請稍後再試'
          : '無法對推文按喜歡，請稍後再試'
        Toast.fire({
          icon: 'error',
          title: toastTitle,
        })
      }
    },
    handleaddLiked(isLiked, id) {
      const count = isLiked ? -1 : 1
      this.componentTweets.map((tweet) => {
        if (tweet.id === id) {
          tweet.isLiked = !isLiked
          tweet.likeCount += count
        }
      })
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

.user-details {
  align-items: center;
  .user-name {
    font-size: 15px;
    font-weight: 700;
    color: $main-text;
    margin-right: 0.313rem;
  }
  .time,
  .user-account {
    font-size: 15px;
    font-weight: 500;
    color: $input-placeholder;
  }
}
.user-tweet {
  margin: 0.375rem 0 0.625rem;
  max-width: 21.875rem;
  color: $main-text;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  .tweet-text {
    overflow-wrap: break-word;
  }
}

.btn-control {
  display: flex;
  .btn-icon {
    color: $input-placeholder;
  }
  .btn-reply {
    margin-right: 3.125rem;
  }
  .btn-text {
    margin-left: 0.625rem;
    font-size: 13px;
    font-weight: 500;
    color: $input-placeholder;
    vertical-align: middle;
  }
  .btn-text::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
}
</style>
