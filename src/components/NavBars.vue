<template>
  <nav class="navbar">
    <img class="register-logo" src="@/assets/svg/logo.svg" />
    <div class="nav-menu">
      <router-link to="/" class="nav-item">
        <IconHome class="nav-item-img" />
        <span>首頁</span>
      </router-link>
      <router-link to="/users/:userid/profile" class="nav-item">
        <IconProfile class="nav-item-img" />
        <span>個人資料</span>
      </router-link>
      <router-link to="/setting" class="nav-item">
        <IconSetting class="nav-item-img" />
        <span>設定</span>
      </router-link>
      <button class="btn" type="submit">推文</button>
    </div>
    <div class="nav-bottom">
      <router-link to="/signin" class="nav-bottom-item">
        <IconLogOut class="nav-bottom-item-img" />
        <span>登出</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import IconHome from '@/components/icon/NavHome.vue'
import IconProfile from '@/components/icon/NavProfile.vue'
import IconSetting from '@/components/icon/NavSetting.vue'
import IconLogOut from '@/components/icon/NavLogOut.vue'

export default {
  components: {
    IconHome,
    IconProfile,
    IconSetting,
    IconLogOut,
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: column;
}

nav {
  width: 235px;
  height: 100vh;
}

.register-logo {
  width: 50px;
  height: 50px;
  margin-bottom: 1.25rem;
  padding: 0.625rem;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  .nav-item {
    display: flex;
    align-content: center;
    align-items: center;
    padding: 1rem 0 0.875rem 0.625rem;
    color: $main-text;
    .nav-item-img {
      width: 24px;
      height: 24px;
      margin-right: 1.25rem;
    }
    span {
      font-size: 18px;
      font-weight: 700;
    }
    &:hover,
    &:focus {
      color: $nav-avtive-color;
    }
  }
}

.btn {
  width: 210px;
  height: 38px;
  border-radius: 100px;
  margin: 0.625rem 0;
  background-color: $button-color;
  font-size: 18px;
  font-weight: 700;
  color: $button-text;
}

.nav-bottom {
  margin-top: auto;
}

.nav-bottom-item {
  display: flex;
  align-content: center;
  align-items: center;
  padding: 1.063rem 0 1.063rem 0.5rem;
  color: $main-text;
  .nav-bottom-item-img {
    width: 18px;
    height: 18px;
    margin-right: 1.438rem;
  }
  span {
    font-size: 18px;
    font-weight: 700;
  }
  &:hover,
  &:focus {
    color: $nav-avtive-color;
  }
}
</style>
