<template>
  <div id="tweets">
    <div class="navbar">
      <NavBars page="normal" />
    </div>
    <div class="tweets-center">
      <NavTabs plainText="推文" :isbackArrow="true" />
      <div class="tweets-center-tweet"><TweetDetail :tweet="tweet" /></div>
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

const dummyData = [
  {
    id: 165,
    UserId: 35,
    TweetId: 55,
    comment: 'Sunt labore illum perspiciatis aut doloribus sapiente.',
    createdAt: '2021-09-20T05:07:00.000Z',
    updatedAt: '2021-09-20T05:07:00.000Z',
    User: {
      id: 35,
      email: 'user3@example.com',
      password: '$2a$10$VqbmrgPkcbv1DltF3cvQIuDQBjW1x6bPdc2vFlfI3wmPfpdaPsOMu',
      name: 'user3',
      avatar: 'https://loremflickr.com/240/240/?random=53.377647020413235',
      introduction:
        'Quis sed dolore enim fuga eligendi est harum et. Quod eveniet inventore maiores et nihil.',
      role: 'user',
      account: '@user3',
      cover: 'https://loremflickr.com/720/240/?random=84.99804545220988',
      followerCount: 0,
      followingCount: 0,
      tweetCount: 10,
      createdAt: '2021-09-20T05:07:00.000Z',
      updatedAt: '2021-09-20T05:07:00.000Z',
    },
    Tweet: {
      id: 55,
      UserId: 15,
      description:
        'Dolor consequatur deleniti voluptatem error veritatis voluptatem quia odio fugit.',
      likeCount: 0,
      replyCount: 3,
      createdAt: '2021-09-20T05:07:00.000Z',
      updatedAt: '2021-09-20T05:07:00.000Z',
    },
  },
  {
    id: 175,
    UserId: 35,
    TweetId: 55,
    comment: 'Pariatur dolores commodi vel.',
    createdAt: '2021-09-20T05:07:00.000Z',
    updatedAt: '2021-09-20T05:07:00.000Z',
    User: {
      id: 35,
      email: 'user3@example.com',
      password: '$2a$10$VqbmrgPkcbv1DltF3cvQIuDQBjW1x6bPdc2vFlfI3wmPfpdaPsOMu',
      name: 'user3',
      avatar: 'https://loremflickr.com/240/240/?random=53.377647020413235',
      introduction:
        'Quis sed dolore enim fuga eligendi est harum et. Quod eveniet inventore maiores et nihil.',
      role: 'user',
      account: '@user3',
      cover: 'https://loremflickr.com/720/240/?random=84.99804545220988',
      followerCount: 0,
      followingCount: 0,
      tweetCount: 10,
      createdAt: '2021-09-20T05:07:00.000Z',
      updatedAt: '2021-09-20T05:07:00.000Z',
    },
    Tweet: {
      id: 55,
      UserId: 15,
      description:
        'Dolor consequatur deleniti voluptatem error veritatis voluptatem quia odio fugit.',
      likeCount: 0,
      replyCount: 3,
      createdAt: '2021-09-20T05:07:00.000Z',
      updatedAt: '2021-09-20T05:07:00.000Z',
    },
  },
  {
    id: 155,
    UserId: 45,
    TweetId: 55,
    comment: 'et eaque id',
    createdAt: '2021-09-20T05:07:00.000Z',
    updatedAt: '2021-09-20T05:07:00.000Z',
    User: {
      id: 45,
      email: 'user4@example.com',
      password: '$2a$10$QkhKLuvNE0pGrWWA5tVd3eRzyYvH82Gxm1mu9YHpvTBVRa8oJuAJm',
      name: 'user4',
      avatar: 'https://loremflickr.com/240/240/?random=91.70236270872843',
      introduction:
        'Itaque suscipit autem officiis et. Ullam voluptatum voluptate et esse eaque dignissimos dolores dolor. Quo ducimus optio ut ipsum pariatur dicta laborum. Dolore',
      role: 'user',
      account: '@user4',
      cover: 'https://loremflickr.com/720/240/?random=18.725205804644986',
      followerCount: 0,
      followingCount: 0,
      tweetCount: 10,
      createdAt: '2021-09-20T05:07:00.000Z',
      updatedAt: '2021-09-20T05:07:00.000Z',
    },
    Tweet: {
      id: 55,
      UserId: 15,
      description:
        'Dolor consequatur deleniti voluptatem error veritatis voluptatem quia odio fugit.',
      likeCount: 0,
      replyCount: 3,
      createdAt: '2021-09-20T05:07:00.000Z',
      updatedAt: '2021-09-20T05:07:00.000Z',
    },
  },
]

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
      this.tweetReplys = dummyData
      // TODO:確認回覆內容傳遞
      const { id, avatar, name, account, createdAt } = dummyData.User
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
