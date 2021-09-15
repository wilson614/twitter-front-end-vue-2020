<template>
  <div id="home">
    <div class="navbar">
      <NavBars />
    </div>
    <div class="home-center">中</div>
    <div class="home-right">
      <Popular />
    </div>
  </div>
</template>

<script>
import NavBars from './../components/NavBars.vue'
import Popular from './../components/Popular.vue'

export default {
  components: {
    NavBars,
    Popular,
  },
}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  display: flex;
  max-width: 1440px;
}

.home-center {
  flex-grow: 1;
}

.home-right {
}
</style>
