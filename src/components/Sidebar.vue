<template>
  <div class="nav-menu">
    <template v-for="router in routers">
      <router-link
        :key="`router-${router.name}`"
        :to="router.to"
        class="nav-item"
      >
        <component :is="router.icon" class="nav-item-img" />
        <span>{{ router.text }}</span>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    routers: {
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
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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
