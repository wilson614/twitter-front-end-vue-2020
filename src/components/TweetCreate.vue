<template>
  <form class="tweet-create"  @submit.stop.prevent="handleSubmit">
    <textarea v-model.trim="description" name="description" placeholder="有什麼新鮮事？" rows="3"></textarea>
    <img class="avatar" :src="currentUser.avatar" alt="avatar" />
    <!-- <span v-show="errorMessage" class="error-msg">{{errorMessage}}</span> -->
      <button class="btn" type="submit">推文</button>
  </form>
</template>

<script>
import { Toast } from './../utils/helpers'

export default {
  data() {
    return {
      isModalVisible: false,
      description: '',
      errorMessage: '',
    };
  },
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleSubmit () {
      if (!this.description) {
        Toast.fire({
          icon: 'error',
          title: '內容不可空白',
        })
        return
      }
      if (this.description.length > 140) {
        Toast.fire({
          icon: 'error',
          title: '字數不可超過 140 字',
        })
        return
      }
      this.$emit('after-create-tweet', {
        id: this.currentUser.id,
        description: this.description
      })
      this.description = '' // 將表單內的資料清空
    }
  },
}
</script>

<style lang="scss" scoped>
.tweet-create {
  position: relative;
  width: 100%;
  height: 120px;
  border-bottom: 0.625rem solid $popular-border;
}
textarea {
  width: 100%;
  height: 100%;
  padding: 1.313rem 0 0 4.688rem;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  color: $modal-placeholder;
}
img {
  position: absolute;
  top: 10px;
  left: 15px;
  width: 50px;
  height: 50px;
  margin-right: 0.625rem;
  border-radius: 50px;
}
.btn {
  position: absolute;
  bottom: 10px;
  right: 15px;
  padding: 0.625rem 0.938rem;
  margin-bottom: 2.5px;
  font-family: inherit;
  font-size: 18px;
  color: $button-text;
  background-color: $button-color;
  border-radius: 100px;
}
</style>
