<template>
  <div id="tweets">
    <div class="navbar">
      <NavBars page="normal" />
    </div>
    <div class="tweets-center">
      <NavTabs plainText="推文" :isbackArrow="true" />
      <div class="tweets-center-tweet"><TweetDetail :tweet="tweet" /></div>
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
  methods: {
    // fetchReplies() {
    //   this.tweetReplies = dummyReply
    //   // TODO:確認回覆內容傳遞
    // },
    async fetchReplies(tweet_id) {
      console.log(tweet_id)
      try {
        const { data } = await tweetsAPI.getReplies(tweet_id)
        console.log(data)
        this.replies = data

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
