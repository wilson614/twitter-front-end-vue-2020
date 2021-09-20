<template>
  <div id="tweets">
    <div class="navbar">
      <NavBars page="normal" />
    </div>
    <div class="tweets-center">
      <NavTabs plainText="推文" :isbackArrow="true" />
      <div class="tweets-center-tweet"><TweetDetail /></div>
      <div class="tweets-center-tweets">
        <TweetReply :tweet-replys="tweetReplys" />
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

const dummyData = {
  tweets: {
    id: 5,
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
  replys: [
    {
      id: 13,
      UserId: 3,
      TweetId: 5,
      comment: 'qui',
      createdAt: '2021-07-04T17:03:02.000Z',
      updatedAt: '2021-07-04T17:03:02.000Z',
    },
    {
      id: 14,
      UserId: 4,
      TweetId: 5,
      comment: 'beatae',
      createdAt: '2021-07-04T17:03:02.000Z',
      updatedAt: '2021-07-04T17:03:02.000Z',
    },
    {
      id: 15,
      UserId: 5,
      TweetId: 5,
      comment: 'aliquid',
      createdAt: '2021-07-04T17:03:02.000Z',
      updatedAt: '2021-07-04T17:03:02.000Z',
    },
  ],
}

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
      tweet: [],
      tweetReplys: [],
    }
  },
  created() {
    this.fetchReplys()
  },
  methods: {
    fetchReplys() {
      this.tweetReplys = dummyData.replys
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
