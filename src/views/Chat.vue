<template>
  <div>
    <div class="navbar">
      <NavBars/>
    </div>
    <div class="home-center">
      <NavTabs plainText="首頁" />
      <div class="home-center-tweet">
      </div>
          <div class="home-right"></div>
    </div>
  </div>
</template>

<script>
import NavBars from './../components/NavBars.vue'
import NavTabs from '../components/NavTabs.vue'


export default {
  name: 'Chat',
  components: {
    NavBars,
    NavTabs
  },
}
</script>
