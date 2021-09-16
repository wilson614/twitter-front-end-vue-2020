<template>
  <div id="register">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="register-top d-flex flex-column align-items-center">
        <img class="register-logo" src="@/assets/svg/logo.svg" />
        <h1>建立你的帳號</h1>
      </div>
      <div class="form-label-group">
        <label for="account">帳號</label>
        <input
          id="account"
          v-model="account"
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
          v-model="name"
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
          v-model="email"
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
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="密碼"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group">
        <label for="password-check">密碼確認</label>
        <input
          id="password-check"
          v-model="checkPassword"
          name="checkPassword"
          type="password"
          class="form-control"
          placeholder="密碼確認"
          autocomplete="new-password"
          required
        />
      </div>

      <button class="btn" type="submit">註冊</button>

      <div class="text-center">
        <p>
          <router-link to="/signin">取消</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from './../apis/authorizationAPI'
import { Toast } from './../utils/helpers'

export default {
  data() {
    return {
      account: '',
      name: '',
      email: '',
      password: '',
      checkPassword: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (
          !this.account ||
          !this.name ||
          !this.email ||
          !this.password ||
          !this.checkPassword
        ) {
          Toast.fire({
            icon: 'warning',
            title: '請確認已填寫所有欄位',
          })
          return
        }
        if (this.password !== this.checkPassword) {
          Toast.fire({
            icon: 'warning',
            title: '兩次輸入的密碼不同',
          })
          this.checkPassword = ''
          return
        }
        const data = await authorizationAPI.signUp({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword,
        })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: data.message,
        })
        // 成功登入後轉址到登入頁
        this.$router.push('/signin')
      } catch (error) {
        Toast.fire({
          icon: 'warning',
          title: `無法註冊 - ${error.message}`,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#register {
  max-width: 540px;
  margin: 0 auto;
}

.register-top {
  .register-logo {
    width: 40px;
    height: 40px;
    padding: 0.313rem;
    margin: 3.75rem 0 1.25rem 0;
  }
  h1 {
    font-size: 23px;
    font-weight: 700;
    line-height: 33px;
    margin-bottom: 2.5rem;
  }
}

.form-label-group {
  position: relative;
  label {
    position: absolute;
    left: 10px;
    top: 5px;
    color: $input-placeholder;
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
  }
  input {
    width: 540px;
    height: 54px;
    border-radius: 4px;
    background-color: $input-bg;
    padding: 1.25rem 0 0.313rem 0.625rem;
    margin-bottom: 1.875rem;
    font-size: 19px;
    @extend %form-input-style;
    // TODO:待確認紅線
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

.btn {
  border-radius: 50px;
  background-color: $button-color;
  font-size: 18px;
  font-weight: 700;
  color: $button-text;
  margin: 0.625rem 0 1.25rem 0;
  padding: 0.625rem 15.75rem;
}

a {
  font-size: 18px;
  font-weight: 700;
  color: $signin-link;
  text-decoration-line: underline;
}
</style>
