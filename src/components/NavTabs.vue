<template>
  <div class="tweet-list-title">
    <router-link :to="{ name: 'Home' }">
      <i class="fas fa-arrow-left arrow" v-if="isbackArrow"></i>
    </router-link>
    <!-- <font-awesome-icon icon="spinner" size="xs" v-if="isbackArrow"/> -->
    <h2 class="list-title">
      <template v-if="plainText">
        {{ plainText }}
      </template>
      <template v-if="user.name">
        <span>{{ user.name }}</span>
        <span>{{ user.id }}</span>
      </template>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    tabItems: {
      type: Array,
      default() {
        return [
          {
            name: 'index',
            text: '首頁',
            to: '/',
          },
        ]
      },
    },
    plainText: String,
    user: {
      type: Object,
      default() {
        return {
          name: '',
          postsCount: '',
        }
      },
    },
    isbackArrow: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.tweet-list-title {
  height: 55px;
  padding: 0.813rem 0 0.875rem 1.25rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $popular-border;
  .list-title {
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: 700;
  }
}
.arrow {
  width: 24px;
  height: 24px;
  margin-right: 2.5rem;
  padding: 0.313rem 0.188rem 0.25rem 0.313rem;
  color: #000;
  &:hover {
    color: $nav-avtive-color;
  }
}
</style>
