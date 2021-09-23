<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <form action="">
          <header class="modal-header" id="modalTitle">
            <button
              type="button"
              class="btn-close"
              aria-label="Close modal"
              @click="close"
            >
              <i class="fas fa-times"></i>
            </button>
          </header>
          <div class="modal-input">
            <section class="modal-create-tweet">
              <textarea
                v-model="newTweet.description"
                placeholder="有什麼新鮮事？"
              ></textarea>
              <img class="avatar" alt="avatar" :src="currentUser.avatar" />
              <span v-show="errorMessage" class="error-message">{{
                errorMessage
              }}</span>
              <button @click.stop.prevent="afterCreateTweet" class="btn">
                推文
              </button>
            </section>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import tweetsAPI from './../apis/tweets'
import { Toast } from './../utils/helpers'

export default {
  name: 'TweetCreateModal',
  data() {
    return {
      newTweet: {},
      errorMessage: '',
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated']),
  },
  methods: {
    ...mapActions(['handleTweetsReload']),
    close() {
      this.$emit('close')
      setTimeout(() => {
        this.newTweet = {}
        this.errorMessage = ''
      }, 500)
    },
    afterCreateTweet() {
      if (!this.newTweet.description) {
        this.errorMessage = '內容不可空白'
        return
      }
      if (this.newTweet.description.length > 140) {
        this.errorMessage = '字數不可超過140'
        return
      }
      this.handleCreateTweet({
        UserId: this.currentUser.id,
        description: this.newTweet.description,
      })
      this.close()
    },
    async handleCreateTweet({ UserId, description }) {
      console.log(UserId, description)
      try {
        const { data } = await tweetsAPI.postTweet({ UserId, description })

        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.handleTweetsReload(true)
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得推文，請稍後再試',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: start;
}

.modal {
  width: 600px;
  height: 300px;
  margin-top: 3.375rem;
  // overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  border: 1px solid $body-bg;
  background: $body-bg;
}

.modal-header {
  height: 3.438rem;
  position: relative;
  border-bottom: 1px solid $popular-border;
}
.btn-close {
  position: absolute;
  top: 0.938rem;
  left: 0.938rem;
  height: 24px;
  width: 24px;
  padding: 0.281rem;
  color: $button-color;
  // background: transparent;
  .fa-times {
    font-size: 15px;
  }
}

.modal-create-tweet {
  position: relative;
  height: 235px;
}
textarea {
  width: 100%;
  height: 100%;
  padding: 20px calc(15px + 15px + 64px) 20px 75px;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
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
.error-message {
  font-size: 15px;
  font-weight: 500;
  color: $input-error-msg;
  position: absolute;
  bottom: 28px;
  right: 100px;
}

.btn {
  position: absolute;
  bottom: 15px;
  right: 15px;
  padding: 0.625rem 0.938rem;
  font-family: inherit;
  font-size: 18px;
  color: $button-text;
  background-color: $button-color;
  border-radius: 100px;
}
</style>
