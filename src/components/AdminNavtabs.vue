<template>
  <div class="container title-container">
    <div v-if="this.$route.name === 'admin-tweets'" class="tweet-list-title">
      <h2 class="list-title">推特清單</h2>
    </div>
    <div v-else class="tweet-list-title">
      <h2 class="list-title">使用者列表</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tweet-list-title {
  margin-left: 1.5em;
  height: 55px;
  display: flex;
  align-items: center;
  .list-title {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
