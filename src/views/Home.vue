<template>
  <div id="home">
    <div class="navbar">
      <NavBars page="normal" />
    </div>
    <div class="home-center">
      <NavTabs plainText="首頁" />
      <div class="home-center-tweet">
        <TweetCreate
          :current-user="currentUser"
          @after-create-tweet="afterCreateTweet"
        />
      </div>
      <div class="home-center-tweets scrollbar">
        <TweetsLatest :initial-tweets="tweets" />
      </div>
    </div>
    <div class="home-right">
      <Popular />
    </div>
  </div>
</template>

<script>
import NavBars from './../components/NavBars.vue'
import Popular from './../components/Popular.vue'
import NavTabs from '../components/NavTabs.vue'
import TweetsLatest from '@/components/TweetsLatest.vue'
import TweetCreate from '@/components/TweetCreate.vue'
import tweetsAPI from './../apis/tweets'
import { Toast } from './../utils/helpers'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    NavBars,
    NavTabs,
    Popular,
    TweetCreate,
    TweetsLatest,
  },
  data() {
    return {
      tweets: [],
    }
  },
  created() {
    this.fetchTweets()
    this.fetchCurrentUser()
  },
  computed: {
    ...mapState({
      currentUser: 'currentUser',
      isTweetNeedReload: 'isTweetNeedReload',
    }),
  },
  watch: {
    isTweetNeedReload (){
      if (this.isTweetNeedReload) {
        this.fetchTweets()
        this.handleTweetsReload(false)
      }
    }
  },
  methods: {
    ...mapActions(['fetchCurrentUser', 'handleTweetsReload']),
    async fetchTweets() {
      try {
        const { data } = await tweetsAPI.getTweets()
        this.tweets = data
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得推文，請稍後再試',
        })
      }
    },
    // TODO: 待修復 tweetID
    afterCreateTweet(payload) {
      const { id, description } = payload
      // console.log(payload)
      this.handleCreateTweet({
        UserId: id,
        description: description,
      })
      this.tweets.unshift({
        UserId: id,
        // User: {
        //   id: this.currentUser.id,
        // },
        id: '',
        description,
        avatar: this.currentUser.avatar,
        name: this.currentUser.name,
        account: this.currentUser.account,
        likeCount: '0',
        replyCount: '0',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    },
    async handleCreateTweet({ UserId, description }) {
      try {
        const { data } = await tweetsAPI.postTweet({ UserId, description })

        if (data.status === 'error') {
          throw new Error(data.message)
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得推文，請稍後再試',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  display: flex;
  max-width: 1245px;
}

.home-center {
  margin: 0 2.5rem;
  flex-grow: 1;
  border-left: 1px solid $popular-border;
  border-right: 1px solid $popular-border;
}

.home-center-tweet {
  width: 100%;
  height: 120px;
}

.home-center-tweets {
  height: 100vh;
  overflow-y: scroll;
}

//TODO: 待修復 bar 不貼齊
.scrollbar {
  // 整體的樣式
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  // bar的樣式
  &::-webkit-scrollbar-thumb {
    background-color: $popular-border;
    border-radius: 2px;
  }
}
</style>
