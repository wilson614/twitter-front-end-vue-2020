<template>
  <div id="popular">
    <span class="popular-title">Popular</span>
    <div class="popular-user-list" v-for="user in users" :key="user.id">
      <img
        src="https://lh3.googleusercontent.com/a-/AOh14GjafILfVnBhDBrtDk_r4kLz4q4tpPhwo7pPWwGo=s96-c"
        alt=""
      />
      <div class="popular-user-list-ceneter">
        <p class="user-name">McDonald's</p>
        <p class="user-account">@McDonalds</p>
      </div>
      <button
        v-if="user.isFollowed"
        @click.stop.prevent="addFollowed(user.id)"
        class="btn"
        type="isFollowed"
      >
        跟隨
      </button>
      <button
        v-else
        @click.stop.prevent="deleteFollowed(user.id)"
        class="btn btn-followed"
        type="isFollowed"
      >
        正在跟隨
      </button>
    </div>
  </div>
</template>

<script>

// const dummyData = {

// }

// export default {
//   data() {
//     return {
//       users: [],
//     }
//   },
//   created() {
//     this.fetchTopUsers()
//   },
//   methods: {
//     fetchTopUsers() {
//       this.users = dummyData.users
//     },
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
//   },
// }
</script>

<style lang="scss" scoped>
#popular {
  width: 350px;
  height: 756px;
  margin-top: 0.938rem;
  margin-right: 5.125rem;
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
    height: 35px;
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
