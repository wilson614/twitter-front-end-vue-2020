<template>
  <div class="container admin-tweets-container d-flex justify-content-center">
    <section class="navbar admin-navbar d-flex justify-content-center">
      <AdminNavbar />
    </section>
    <div class="content-wrapper d-flex flex-column">
      <section class="navtabs admin-navtabs">
      <AdminNavtabs />
    </section>
    <section class="content main-content d-flex justify-content-center">
      <AdminTweetList />
    </section>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar.vue"
import AdminNavtabs from "./../components/AdminNavtabs.vue"
import AdminTweetList from "./../components/AdminTweetList.vue"

export default {
  components: {
    AdminNavbar,
    AdminNavtabs,
    AdminTweetList,
  }
}
</script>

<style lang="scss" scoped>
.admin-tweets-container  {
  height: 100vh;
}
.admin-navbar {
  border-right: 1px solid $popular-border;
  width: 378px;
}
.admin-navtabs {
  height: 55px;
}
.main-content {
  border-top: 1px solid $popular-border;
  max-width: 1062px;
}
</style>
