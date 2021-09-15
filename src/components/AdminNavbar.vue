<template>
  <div class="container navbar-container py-5">
    <div class="nav-list-wrapper">
      <div class="logo">
        <img class="logo" src="../assets/svg/logo.svg" alt="" />
      </div>
      <Sidebar :routers="links"/>
    </div>
    <div class="logout-bar d-flex justify-content-center">
      <div class="item-icon">
        <img
          class="icon logout-icon"
          src="../assets/svg/nav-logout.svg"
          alt=""
        />
      </div>
      <p>登出</p>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      links: [
        {
          name: '...',
          text: '推文清單',
          to: '/admin/tweets',
          icon: () => import('@/components/icon/NavHome.vue'),
        },
        {
          name: 'userlist',
          text: '使用者列表',
          to: '/userlist',
          icon: () => import('@/components/icon/NavHome.vue'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.logo {
  width: 30px;
  height: 30px;
}
.home-icon {
  width: 22px;
  height: 20px;
}
.user-icon {
  width: 17px;
  height: 20px;
}
.logout-icon {
  width: 24px;
  height: 24px;
}
</style>
