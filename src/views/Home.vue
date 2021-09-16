<template>
  <div id="home">
    <div class="navbar">
      <NavBars :navItems="navItems" />
    </div>
    <div class="home-center">
      <NavTabs plainText="首頁" />
      <div class="home-center-tweet"></div>
      </div>
    <div class="home-right">
      <Popular />
    </div>
  </div>
</template>

<script>
import NavBars from './../components/NavBars.vue'
import IconHome from '@/components/icon/NavHome.vue'
import IconProfile from '@/components/icon/NavProfile.vue'
import IconSetting from '@/components/icon/NavSetting.vue'
import Popular from './../components/Popular.vue'
import NavTabs from '../components/NavTabs.vue'

export default {
  components: {
    NavBars,
    NavTabs,
    Popular,
  },
  data() {
    return {
      navItems: [
        {
          name: 'home',
          text: '首頁',
          to: '/',
          icon: IconHome,
        },
        {
          name: 'profile',
          text: '個人資料',
          to: '/users/:userid/profile',
          icon: IconProfile,
        },
        {
          name: 'setting',
          text: '設定',
          to: '/setting',
          icon: IconSetting,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  display: flex;
  max-width: 1245px;
}

.home-center {
  margin: 0 2.5rem;
  flex-grow: 1;
  border-left: 1px solid $popular-border;
  border-right: 1px solid $popular-border;
}

.home-center-tweet {
  width: 600px;
  height: 120px;
  background-color: black;
  border-bottom: 0.625rem solid $popular-border;
}
</style>
