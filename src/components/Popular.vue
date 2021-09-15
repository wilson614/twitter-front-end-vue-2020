<template>
  <div id="popular">
    <span class="popular-title">Popular</span>
    <div class="popular-user-list" v-for="user in users" :key="user.id">
      <img
        :src="user.avatar"
        alt=""
      />
      <div class="popular-user-list-ceneter">
        <p class="user-name">{{ user.name }}</p>
        <p class="user-account">{{ user.account }}</p>
      </div>
      <button :class="['btn', isFollowed && 'btn-orange']" type="isFollowed">
        {{ isFollowed ? '正在跟隨' + '123' : '跟隨' }}
      </button>
    </div>
  </div>
</template>

<script>
const dummyData = [
  {
    id: 1,
    name: 'root',
    account: '@root',
    avatar: 'https://loremflickr.com/240/240/?random=86.67237989119876',
    cover: 'https://loremflickr.com/720/240/?random=26.445800377980166',
    followerCount: 0,
    isFollowed: 0,
    isCurrentUser: 0,
  },
  {
    id: 2,
    name: 'User11',
    account: '@user1',
    avatar: 'https://loremflickr.com/240/240/?random=83.43458862610815',
    cover: 'https://loremflickr.com/720/240/?random=29.278597549456762',
    followerCount: 0,
    isFollowed: 0,
    isCurrentUser: 0,
  },
  {
    id: 3,
    name: 'user2',
    account: '@user2',
    avatar: 'https://loremflickr.com/240/240/?random=24.364838375146135',
    cover: 'https://loremflickr.com/720/240/?random=21.042648290680876',
    followerCount: 0,
    isFollowed: 0,
    isCurrentUser: 1,
  },
  {
    id: 4,
    name: 'user3',
    account: '@user3',
    avatar: 'https://loremflickr.com/240/240/?random=71.38538073169198',
    cover: 'https://loremflickr.com/720/240/?random=28.747055278834033',
    followerCount: 0,
    isFollowed: 0,
    isCurrentUser: 0,
  },
  {
    id: 5,
    name: 'user4',
    account: '@user4',
    avatar: 'https://loremflickr.com/240/240/?random=41.48021622303335',
    cover: 'https://loremflickr.com/720/240/?random=46.87070242729114',
    followerCount: 0,
    isFollowed: 0,
    isCurrentUser: 0,
  },
  {
    id: 6,
    name: 'user5',
    account: '@user5',
    avatar: 'https://loremflickr.com/240/240/?random=37.30662851245823',
    cover: 'https://loremflickr.com/720/240/?random=94.35193490220071',
    followerCount: 0,
    isFollowed: 0,
    isCurrentUser: 0,
  },
]

export default {
  data() {
    return {
      users: [],
      isFollowed: false,
    }
  },
  created() {
    this.fetchTopUsers()
  },
  methods: {
    fetchTopUsers() {
      this.users = dummyData
    },
    // addFollowed(userId) {
    //   this.users =  this.users
    //     .map((user) => {
    //       if (user.id !== userId) {
    //         return user
    //       }
    //       return {
    //         ...user,
    //         FollowedCount: user.FollowedCount + 1,
    //         isFollowed: true,
    //       }
    //     })
    //     .sort((a, b) => b.FollowedCount - a.FollowedCount)
    // },
    // deleteFollowed(userId) {
    //   this.users =  this.users
    //     .map((user) => {
    //       if (user.id !== userId) {
    //         return restaurant
    //       }
    //       return {
    //         ...user,
    //         FollowedCount: user.FollowedCount - 1,
    //         isFollowed: false,
    //       }
    //     })
    //     .sort((a, b) => b.FollowedCount - a.FollowedCount)
    // },
  },
}
</script>

<style lang="scss" scoped>
#popular {
  width: 350px;
  height: 756px;
  margin-top: 0.938rem;
  border-radius: 14px;
  background-color: $popular-bg;
}
.popular-title {
  display: block;
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  padding: 0.625rem 0 0.563rem 0.938rem;
  border-bottom: 1px solid $popular-border;
}

.popular-user-list {
  padding: 0.625rem 0.938rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $popular-border;
  img {
    width: 50px;
    height: 50px;
    margin-right: 0.625rem;
    border-radius: 50px;
  }
  .popular-user-list-ceneter {
    flex-grow: 1;
  }
  .btn {
    // width: 60px;
    max-width: 90px;
    // height: 35px;
    padding: 0.625rem 0.938rem;
    border: 1px solid $button-color;
    font-size: 15px;
    font-weight: 700;
    color: $button-color;
    border-radius: 100px;
  }
}

.user-name {
  font-size: 15px;
  font-weight: 700;
  color: $main-text;
}
.user-account {
  font-size: 15px;
  font-weight: 700;
  color: $input-placeholder;
}
</style>
