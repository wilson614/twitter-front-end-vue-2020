<template>
  <div class="container admin-tweets-container d-flex justify-content-center">
    <section class="navbar mr-5">
      <NavBars page="admin"/>
    </section>
    <div class="content-wrapper">
      <section class="navtabs admin-navtabs">
        <AdminNavtabs />
      </section>
      <section
        class="content main-content d-flex justify-content-center scrollbar"
      >
        <AdminTweetList />
      </section>
    </div>
  </div>
</template>

<script>
import AdminNavtabs from './../components/AdminNavtabs.vue'
import AdminTweetList from './../components/AdminTweetList.vue'
import NavBars from './../components/NavBars.vue'

export default {
  components: {
    NavBars,
    AdminNavtabs,
    AdminTweetList,
  },
}
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
.admin-tweets-container {
  width: 1300px;
  height: 100vh;
}
.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 1px solid $popular-border;
}
.admin-navtabs {
  height: 55px;
}
.main-content {
  border-top: 1px solid $popular-border;
  width: 100%;
  flex: 1;
  overflow-y: scroll;
}
</style>
