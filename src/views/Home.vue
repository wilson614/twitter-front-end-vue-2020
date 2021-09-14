<template>
  <div id="home">
    <div class="navbar">
      <NavBars />
    </div>
    <div class="home-center">中</div>
    <div class="nome-right">
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
}

.home-center {
  flex-grow: 1;
}

.nome-right {
  max-width: 350px;
  border: 1px solid black;
}
</style>
