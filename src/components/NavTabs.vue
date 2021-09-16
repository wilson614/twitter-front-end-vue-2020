<template>
  <div class="tweet-list-title">
    <i v-if="isbackArrow">Arrow</i>
    <!-- <template v-for="item in tabItems">
      <h2
        v-if="item.to === $route.path"
        class="list-title"
        :key="item.name"
        :to="item.to"
      >
        {{ item.text }}
      </h2>
    </template> -->
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
    font-size: 19px;
    font-weight: 700;
  }
}
</style>
