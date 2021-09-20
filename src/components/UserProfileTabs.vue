<template>
  <ul class="nav profile-nav-tabs d-flex">
    <li v-for="tab in tabs" :key="tab.id" class="nav-item">
      <router-link :to="tab.path" class="nav-link">
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
          title: "推文",
          path: "/users/:userid/profile",
        },
        {
          id: uuidv4(),
          title: "推文與回覆",
          path: "/users/:userid/replies",
        },
        {
          id: uuidv4(),
          title: "喜歡的內容",
          path: "/users/:userid/likes",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-nav-tabs {
  border-bottom: 1px solid $popular-border;
}
.nav-item {
  display: flex;
  a{
    padding: 15px 0;
    width: 130px;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    color: $input-placeholder;
    &:hover, &:active {
      color: $button-color;
      border-bottom: 2px solid $button-color;
    }
  }
}
.router-link-exact-active {
  border-bottom: 2px solid $button-color;
}
</style>
