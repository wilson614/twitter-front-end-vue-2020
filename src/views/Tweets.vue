<template>
  <div id="tweets">
    <div class="navbar">
      <NavBars page="normal" />
    </div>
    <div class="tweets-center">
      <NavTabs plainText="推文" :isbackArrow="true" />
      <div class="tweets-center-tweet">
        <TweetDetail :tweet="tweet" @handleaddLiked="handleaddLiked" />
      </div>
      <div class="tweets-center-tweets">
        <TweetReply :replies="replies" />
      </div>
    </div>
    <div class="tweets-right"><Popular /></div>
  </div>
</template>

<script>
import NavBars from './../components/NavBars.vue'
import NavTabs from '../components/NavTabs.vue'
import Popular from './../components/Popular.vue'
import TweetDetail from '@/components/TweetDetail.vue'
import TweetReply from '@/components/TweetReply.vue'
import tweetsAPI from './../apis/tweets'
import { Toast } from './../utils/helpers'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    NavBars,
    NavTabs,
    Popular,
    TweetDetail,
    TweetReply,
  },
  data() {
    return {
      tweet: {},
      replies: [],
    }
  },
  created() {
    this.fetchReplies(this.$route.params.id)
    this.fetchTweet(this.$route.params.id)
  },
  watch: {
    isTweetNeedReload() {
      if (this.isTweetNeedReload) {
        this.fetchReplies(this.$route.params.id)
        this.fetchTweet(this.$route.params.id)
        this.handleTweetsReload(false)
      }
    },
  },
  computed: {
    ...mapState({
      isTweetNeedReload: 'isTweetNeedReload',
    }),
  },
  methods: {
    ...mapActions(['handleTweetsReload']),
    async fetchReplies(tweet_id) {
      try {
        const { data } = await tweetsAPI.getReplies(tweet_id)
        this.replies = data.reverse()
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得回覆，請稍後再試',
        })
        // this.$router.push('/')
      }
    },
    async fetchTweet(tweet_id) {
      try {
        const { data } = await tweetsAPI.getTweetDetail(tweet_id)

        this.tweet = data

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // Toast.fire({
        //   icon: 'success',
        //   title: '成功取得推文',
        // })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得推文，請稍後再試',
        })
        // this.$router.push('/')
      }
    },
    handleaddLiked({ isLiked }) {
      this.tweet.isLiked = isLiked
      this.tweet.likeCount += isLiked ? 1 : -1
    },
  },
}
</script>

<style lang="scss" scoped>
#tweets {
  width: 100%;
  display: flex;
  max-width: 1245px;
}

.tweets-center {
  max-width: 495px;
  margin: 0 2.5rem;
  flex-grow: 1;
  border-left: 1px solid $popular-border;
  border-right: 1px solid $popular-border;
}

.tweets-center-tweet {
  width: 100%;
  border-bottom: 1px solid $popular-border;
}
</style>
