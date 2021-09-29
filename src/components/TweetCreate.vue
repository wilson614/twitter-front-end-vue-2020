<template>
  <section>
    <form class="tweet-create" @submit.stop.prevent="handleSubmit">
      <textarea
        v-model.trim="description"
        name="description"
        placeholder="有什麼新鮮事？"
        rows="3"
      ></textarea>
      <img class="avatar" :src="currentUser.avatar" alt="avatar" />
      <div class="d-flex justify-content-end align-items-center">
        <!-- <span v-show="errorMessage" class="error-msg">{{errorMessage}}</span> -->
        <small class="word-count d-inline-block"
          >{{ description ? description.length : 0 }}/140</small
        >
        <button
          class="btn"
          type="submit"
          :disabled="
            description.trim().length === 0 || description.length > 140
          "
        >
          推文
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { Toast } from './../utils/helpers'

export default {
  data() {
    return {
      isModalVisible: false,
      description: '',
      errorMessage: '',
      isProcessing: true,
    }
  },
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleSubmit() {
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
        description: this.description,
      })
      this.description = '' // 將表單內的資料清空
    },
  },
}
</script>

<style lang="scss" scoped>
.tweet-create {
  position: relative;
  width: 100%;
  // height: 100%;
  padding: 0.938rem;
  border-bottom: 0.625rem solid $popular-border;
}
textarea {
  width: 100%;
  height: 100%;
  padding: 0 0 0 4.063rem;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  color: $modal-placeholder;
}
img {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 50px;
  height: 50px;
  margin-right: 0.625rem;
  border-radius: 50px;
}

.word-count {
  margin-right: 1rem;
  font-size: 15px;
  font-weight: 500;
  color: $input-placeholder;
}

.btn {
  padding: 0.625rem 0.938rem;
  margin-bottom: 2.5px;
  font-family: inherit;
  font-size: 18px;
  color: $button-text;
  background-color: $button-color;
  border-radius: 100px;
  &:disabled {
    opacity: 0.5;
  }
}
</style>
