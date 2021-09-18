<template>
  <div id="home">
    <div class="navbar">
      <NavBars page="normal" />
    </div>
    <div class="home-center">
      <NavTabs plainText="首頁" />
      <div class="home-center-tweet">
        <TweetCreate />
      </div>
      <div class="home-center-tweets">
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

const dummyData = [
  {
    id: 1,
    UserId: 2,
    description:
      'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
    likeCount: 0,
    replyCount: 3,
    createdAt: '2021-09-02T03:33:32.000Z',
    updatedAt: '2021-09-14T13:33:32.000Z',
    User: {
      id: 2,
      email: 'user1@example.com',
      password: '$2a$10$T0/LtfFf6NOyUKiG36uPNuOIUaf1MWL4Jo7xk.NFHRGMbSPl2NVwK',
      name: 'user1',
      avatar: 'https://loremflickr.com/240/240/?random=83.43458862610815',
      introduction:
        'Quam distinctio doloremque consequuntur.\nEt et aut qui enim ea.\nEst cupiditate voluptatem totam commodi excepturi ducimus aut.\nEst nihil veniam vel pariatur.\nEst maiores non eum est molestiae.',
      role: 'user',
      account: '@user1',
      cover: 'https://loremflickr.com/720/240/?random=29.278597549456762',
      followerCount: 0,
      followingCount: 0,
      tweetCount: 10,
      createdAt: '2021-09-14T13:33:32.000Z',
      updatedAt: '2021-09-14T13:33:32.000Z',
    },
    name: 'user1',
    avatar: 'https://loremflickr.com/240/240/?random=83.43458862610815',
    account: '@user1',
    isLiked: true,
  },
]

export default {
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
  },
  methods: {
    fetchTweets() {
      this.tweets = dummyData
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
  // background-color: black;
  border-bottom: 0.625rem solid $popular-border;
}
</style>
