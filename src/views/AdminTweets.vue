<template>
  <div class="container admin-tweets-container d-flex justify-content-center">
    <section class="navbar admin-navbar d-flex justify-content-center">
      <AdminNavbar />
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
import AdminNavbar from "./../components/AdminNavbar.vue";
import AdminNavtabs from "./../components/AdminNavtabs.vue";
import AdminTweetList from "./../components/AdminTweetList.vue";

export default {
  components: {
    AdminNavbar,
    AdminNavtabs,
    AdminTweetList,
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
.admin-tweets-container {
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
