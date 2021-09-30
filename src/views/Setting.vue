<template>
  <div id="setting">
    <div class="navbar">
      <NavBars page="normal" />
    </div>
    <div class="setting-right">
      <NavTabs plainText="帳戶設定" />
      <form class="setting-form" @submit.stop.prevent="handleSubmit">
        <div class="form-label-group">
          <!-- <span
            style="position: absolute; font-size: 18px; top: 20px; left: 10px"
            >@</span
          > -->
          <label for="account">帳號</label>
          <!-- style="padding-left: 1.5em" -->
          <input
            id="account"
            v-model="user.account"
            name="account"
            type="text"
            class="form-control"
            autocomplete="username"
            placeholder="帳號"
            required
            autofocus
          />
        </div>

        <div class="form-label-group">
          <label for="name">名稱</label>
          <input
            id="name"
            v-model="user.name"
            name="name"
            type="text"
            class="form-control"
            autocomplete="username"
            placeholder="名稱"
            required
            autofocus
          />
        </div>

        <div class="form-label-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="user.email"
            name="email"
            type="email"
            class="form-control"
            autocomplete="email"
            placeholder="email"
            required
          />
        </div>

        <div class="form-label-group">
          <label for="password">密碼</label>
          <input
            id="password"
            v-model="user.password"
            name="password"
            type="password"
            class="form-control"
            placeholder="密碼"
            autocomplete="new-password"
          />
        </div>

        <div class="form-label-group">
          <label for="password-check">密碼確認</label>
          <input
            id="password-check"
            v-model="user.checkPassword"
            name="checkPassword"
            type="password"
            class="form-control"
            placeholder="密碼確認"
            autocomplete="new-password"
          />
        </div>
        <div class="setting-block">
          <button class="btn" type="submit" :disabled="isProcessing">
            儲存
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NavBars from '../components/NavBars.vue'
import NavTabs from '../components/NavTabs.vue'
import userAPI from './../apis/user'
import { Toast } from './../utils/helpers'

import { mapState } from 'vuex'

export default {
  components: {
    NavBars,
    NavTabs,
  },
  data() {
    return {
      user: {
        account: '',
        name: '',
        email: '',
        password: '',
        checkPassword: '',
      },
      isProcessing: false,
    }
  },
  created() {
    this.fetchUser()
  },
  computed: {
    ...mapState({
      currentUser: 'currentUser',
    }),
  },
  methods: {
    // 使用 vuex 拿 currentUser
    fetchUser() {
      const { id, account, name, email } = this.currentUser

      this.user = {
        ...this.user,
        id,
        account,
        name,
        email,
      }
      this.isProcessing = false
    },
    checkInputNoChange() {
      if (
        !this.account ||
        !this.name ||
        !this.email ||
        !this.password ||
        !this.checkPassword
      ) {
        Toast.fire({
          icon: 'warning',
          title: '欄位無異動，確認是否修改帳戶設定',
        })
        this.isProcessing = false
        return
      }
    },
    checkPasswordRepeat() {
      if (this.user.password !== this.user.checkPassword) {
        Toast.fire({
          icon: 'warning',
          title: '兩次輸入的密碼不同',
        })
        this.password = ''
        this.checkPassword = ''
        this.isProcessing = false
        return false
      }
      return true
    },
    checkAccount() {
      //帳號格式(不能有空格)
      if (this.user.account.indexOf(' ') !== -1) {
        Toast.fire({
          icon: 'warning',
          title: '帳號不能有空格',
        })
        this.isProcessing = false
        return false
      }
      return true
    },
    checkNameLength() {
      // 名字(不能超過50字)
      if (this.user.name.length > 50) {
        Toast.fire({
          icon: 'warning',
          title: '名稱不能多於50字！',
        })
        this.isProcessing = false
        return false
      }
      return true
    },
    async handleSubmit() {
      try {
        const { id, account, name, email } = this.currentUser

        this.isProcessing = true

        if (!this.checkInputNoChange()) return
        if (!this.checkPasswordRepeat()) return
        if (!this.checkAccount()) return
        if (!this.checkNameLength()) return

        const { data } = await userAPI.updateUserSetting({
          user_id: id,
          formData: {
            account: this.user.account,
            name: this.user.name,
            email: this.user.email,
            password: this.user.password,
            checkPassword: this.user.checkPassword,
          },
        })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '成功更新資料',
        })

        this.$store.dispatch('fetchCurrentUser')
        this.$router.push({ name: 'profile', params: { userid: id } })
        this.isProcessing = false
      } catch (error) {
        const { data } = error.response
        if (data.message.length === 1) {
          if (data.message[0].error === 'Account is exists.') {
            Toast.fire({
              icon: 'warning',
              title: '帳號已重覆註冊',
            })
            this.isProcessing = false
            return
          } else if (data.message[0].error === 'Email is exists.') {
            Toast.fire({
              icon: 'warning',
              title: 'Email 已重覆註冊',
            })
            this.isProcessing = false
            return
          }
        } else if (data.message.length === 2) {
          Toast.fire({
            icon: 'warning',
            title: '帳號及 Email 皆已重覆註冊',
          })
          this.isProcessing = false
          return
        } else {
          Toast.fire({
            icon: 'warning',
            title: `無法註冊 - ${error.message}`,
          })
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#setting {
  width: 100%;
  display: flex;
}

.navbar {
  margin-left: 6.438rem;
}

.setting-right {
  margin-left: 2.5rem;
  // padding: 0 0 0 1rem;
  flex-grow: 1;
  border-left: 1px solid $popular-border;
}

.setting-form {
  padding: 1.875rem 0 0 1rem;
}

.form-label-group {
  position: relative;
  label {
    position: absolute;
    left: 0.625rem;
    top: 0.313rem;
    color: $input-placeholder;
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
  }
  input {
    width: 40.125rem;
    height: 3.375rem;
    border-radius: 4px;
    background-color: $input-bg;
    padding: 1.25rem 0 0.25rem 0.625rem;
    margin-bottom: 1.875rem;
    color: $main-text;
    font-size: 19px;
    font-weight: 500;
    @extend %form-input-style;
    &:not(:placeholder-shown):invalid {
      border-bottom: 3px solid $input-underline-error;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px $input-bg inset;
      box-shadow: 0 0 0px 1000px $input-bg inset;
    }
    &::placeholder {
      color: transparent;
    }
    &:not(:placeholder-shown):invalid {
      border-bottom: 3px solid $input-underline-error;
    }
  }
}

.setting-block {
  width: 40.125rem;
  display: inline-flex;
  justify-content: flex-end;
}

.btn {
  border-radius: 50px;
  background-color: $button-color;
  font-size: 18px;
  font-weight: 700;
  color: $button-text;
  margin-top: 0.625rem;
  padding: 0.625rem 2.5rem;
}
</style>
