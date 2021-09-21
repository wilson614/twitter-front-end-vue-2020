<template>
  <ul class="follow-tabs d-flex">
    <li v-for="tab in tabs" :key="tab.id" class="tab-item">
      <router-link :to="tab.path" class="tab-link">
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: "跟隨者",
          path: {
            name: "followers",
            params: { userid: this.$route.params.userid },
          },
        },
        {
          id: uuidv4(),
          title: "正在跟隨",
          path: {
            name: "followings",
            params: { userid: this.$route.params.userid },
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.follow-tabs {
  border-bottom: 1px solid $popular-border;
}
.tab-item {
  display: flex;
  a {
    padding: 15px 0;
    width: 130px;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    color: $input-placeholder;
    &:hover,
    &:active {
      color: $button-color;
      border-bottom: 2px solid $button-color;
    }
  }
}
.router-link-exact-active {
  border-bottom: 2px solid $button-color;
}
</style>
