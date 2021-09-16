<template>
  <div class="container admin-users-container d-flex justify-content-center">
    <section class="navbar admin-navbar d-flex justify-content-center">
    </section>
    <div class="content-wrapper">
      <section class="navtabs admin-navtabs">
        <AdminNavtabs />
      </section>
      <section class="content main-content d-flex scrollbar">
        <AdminUserList :initial-users="users" />
      </section>
    </div>
  </div>
</template>

<script>
import AdminNavtabs from "./../components/AdminNavtabs.vue";
import AdminUserList from "./../components/AdminUserList.vue";

const dummyData = [
  {
    id: 2,
    name: "user1",
    account: "@user1",
    avatar: "https://loremflickr.com/240/240/?random=83.43458862610815",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=29.278597549456762",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 24,
    likeCount: 0,
  },
  {
    id: 3,
    name: "user2",
    account: "@user2",
    avatar: "https://loremflickr.com/240/240/?random=24.364838375146135",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=21.042648290680876",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 26,
    likeCount: 0,
  },
  {
    id: 4,
    name: "user3",
    account: "@user3",
    avatar: "https://loremflickr.com/240/240/?random=71.38538073169198",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=28.747055278834033",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 34,
    likeCount: 0,
  },
  {
    id: 5,
    name: "user4",
    account: "@user4",
    avatar: "https://loremflickr.com/240/240/?random=41.48021622303335",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=46.87070242729114",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 35,
    likeCount: 0,
  },
  {
    id: 6,
    name: "user5",
    acco9unt: "@user5",
    avatar: "https://loremflickr.com/240/240/?random=37.30662851245823",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=94.35193490220071",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 31,
    likeCount: 0,
  },
  {
    id: 7,
    name: "user1",
    account: "@user1",
    avatar: "https://loremflickr.com/240/240/?random=83.43458862610815",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=29.278597549456762",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 24,
    likeCount: 0,
  },
  {
    id: 8,
    name: "user2",
    account: "@user2",
    avatar: "https://loremflickr.com/240/240/?random=24.364838375146135",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=21.042648290680876",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 26,
    likeCount: 0,
  },
  {
    id: 9,
    name: "user3",
    account: "@user3",
    avatar: "https://loremflickr.com/240/240/?random=71.38538073169198",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=28.747055278834033",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 34,
    likeCount: 0,
  },
  {
    id: 10,
    name: "user4",
    account: "@user4",
    avatar: "https://loremflickr.com/240/240/?random=41.48021622303335",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=46.87070242729114",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 35,
    likeCount: 0,
  },
  {
    id: 11,
    name: "user5",
    account: "@user5",
    avatar: "https://loremflickr.com/240/240/?random=37.30662851245823",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=94.35193490220071",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 31,
    likeCount: 0,
  },
  {
    id: 12,
    name: "user1",
    account: "@user1",
    avatar: "https://loremflickr.com/240/240/?random=83.43458862610815",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=29.278597549456762",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 24,
    likeCount: 0,
  },
  {
    id: 13,
    name: "user2",
    account: "@user2",
    avatar: "https://loremflickr.com/240/240/?random=24.364838375146135",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=21.042648290680876",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 26,
    likeCount: 0,
  },
  {
    id: 14,
    name: "user3",
    account: "@user3",
    avatar: "https://loremflickr.com/240/240/?random=71.38538073169198",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=28.747055278834033",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 34,
    likeCount: 0,
  },
  {
    id: 15,
    name: "user4",
    account: "@user4",
    avatar: "https://loremflickr.com/240/240/?random=41.48021622303335",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=46.87070242729114",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 35,
    likeCount: 0,
  },
  {
    id: 16,
    name: "user5",
    acco9unt: "@user5",
    avatar: "https://loremflickr.com/240/240/?random=37.30662851245823",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=94.35193490220071",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 31,
    likeCount: 0,
  },
  {
    id: 17,
    name: "user1",
    account: "@user1",
    avatar: "https://loremflickr.com/240/240/?random=83.43458862610815",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=29.278597549456762",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 24,
    likeCount: 0,
  },
  {
    id: 18,
    name: "user2",
    account: "@user2",
    avatar: "https://loremflickr.com/240/240/?random=24.364838375146135",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=21.042648290680876",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 26,
    likeCount: 0,
  },
  {
    id: 19,
    name: "user3",
    account: "@user3",
    avatar: "https://loremflickr.com/240/240/?random=71.38538073169198",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=28.747055278834033",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 34,
    likeCount: 0,
  },
  {
    id: 20,
    name: "user4",
    account: "@user4",
    avatar: "https://loremflickr.com/240/240/?random=41.48021622303335",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=46.87070242729114",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 35,
    likeCount: 0,
  },
  {
    id: 21,
    name: "user5",
    account: "@user5",
    avatar: "https://loremflickr.com/240/240/?random=37.30662851245823",
    role: "user",
    cover: "https://loremflickr.com/720/240/?random=94.35193490220071",
    followerCount: 0,
    followingCount: 0,
    tweetCount: 10,
    replyCount: 31,
    likeCount: 0,
  },
];

export default {
  components: {
    AdminNavtabs,
    AdminUserList,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData;
    },
  },
};
</script>

<style lang="scss" scoped>
//scrollbar樣式crad list與form panel可共用
.scrollbar {
  padding-left: 6px;
  // 整體的樣式
  &::-webkit-scrollbar {
    width: 4px;
  }
  // bar的樣式
  &::-webkit-scrollbar-thumb {
    background-color: $popular-border;
    border-radius: 2px;
  }
}
.admin-users-container {
  width: 1245px;
  height: 100vh;
}
.admin-navbar {
  border-right: 1px solid $popular-border;
  width: 378px;
}
.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.admin-navtabs {
  height: 55px;
}
.main-content {
  border-top: 1px solid $popular-border;
  width: 1062px;
  flex: 1;
  overflow-y: scroll;
}
</style>
