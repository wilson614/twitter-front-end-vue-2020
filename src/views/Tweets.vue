<template>
  <div id="home">
    <div class="navbar">
      <h1>{{ $route.params.id }}</h1>
      <NavBars/>
    </div>
    <div class="home-center">
      <div class="home-center-tweet"></div>
      <div class="home-center-tweets">
      </div>
    </div>
    <div class="home-right">
    </div>
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
