<template>
  <div id="home">
      <div class="navbar">
        <NavBars />
      </div>
      <div class="home-center">中</div>
      <div class="nome-right">右</div>
  </div>
</template>

<script>
import NavBars from './../components/NavBars.vue'

export default {
  components: {
    NavBars,
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
}
</style>
