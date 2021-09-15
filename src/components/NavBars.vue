<template>
  <nav class="navbar">
    <img class="nav-logo" src="@/assets/svg/logo.svg" />
    <div class="nav-menu">
      <template v-for="item in navItems">
        <router-link
          :key="`router-${item.name}`"
          :to="item.to"
          class="nav-item"
        >
          <component :is="item.icon" class="nav-item-img" />
          <span>{{ item.text }}</span>
        </router-link>
      </template>
    </div>
    <button class="btn" type="submit">推文</button>
    <div class="nav-bottom">
      <router-link to="/signin" class="nav-bottom-item">
        <IconLogOut class="nav-bottom-item-img" />
        <span>登出</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import IconLogOut from '@/components/icon/NavLogOut.vue'

export default {
  components: {
    IconLogOut,
  },
  props: {
    navItems: {
      type: Array,
      default() {
        return [
          {
            name: 'index',
            text: '首頁',
            to: '/',
            icon: () => import('@/components/icon/NavHome.vue'),
          },
        ]
      },
    },
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

.nav-logo {
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
  border-radius: 100px;
  margin: 0.625rem 0;
  padding: 0.625rem 5.438rem;
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
