<template>
  <div id="home">
    <div class="navbar">
      <NavBars :navItems="navItems" />
    </div>
    <div class="home-center">中</div>
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

export default {
  components: {
    NavBars,
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
  flex-grow: 1;
}
</style>
