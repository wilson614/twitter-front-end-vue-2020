<template>
  <div id="tweets">
    <div class="navbar">
      <NavBars page="normal" />
    </div>
    <div class="tweets-center">
      <NavTabs plainText="推文" :isbackArrow="true"/>
      <div class="tweets-center-tweet"></div>
      <div class="tweets-center-tweets"></div>
    </div>
    <div class="tweets-right"><Popular /></div>
  </div>
</template>

<script>
import NavBars from './../components/NavBars.vue'
import NavTabs from '../components/NavTabs.vue'
import Popular from './../components/Popular.vue'

export default {
  components: {
    NavBars,
    NavTabs,
    Popular,
  },
}
</script>

<style lang="scss" scoped>
#tweets {
  width: 100%;
  display: flex;
  max-width: 1245px;
}

.tweets-center {
  margin: 0 2.5rem;
  flex-grow: 1;
  border-left: 1px solid $popular-border;
  border-right: 1px solid $popular-border;
}

.tweets-center-tweet {
  width: 100%;
  height: 120px;
  background-color: black;
  border-bottom: 0.625rem solid $popular-border;
}
</style>
