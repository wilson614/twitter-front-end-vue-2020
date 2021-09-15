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
          v-model="passwordCheck"
          name="passwordCheck"
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
export default {
  data() {
    return {
      account: '',
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
    }
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck,
      })
      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log('data', data)
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
    width: 50px;
    height: 50px;
    margin: 60px 0 30px 0;
  }
  h1 {
    font-size: 23px;
    font-weight: 700;
    line-height: 33px;
    margin-bottom: 20px;
  }
}

.form-label-group {
  position: relative;
  label {
    position: absolute;
    left: 10px;
    top: 5px;
    padding-bottom: 2em;
    color: $input-placeholder;
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
  }
  input {
    width: 540px;
    height: 50px;
    border-radius: 4px;
    background-color: $input-bg;
    padding-top: 1.25rem;
    padding-bottom: 0.313rem;
    margin-bottom: 2em;
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
  margin-bottom: 1.25rem;
  padding: 0.625rem 15.75rem;
}

a {
  font-size: 18px;
  font-weight: 700;
  color: $signin-link;
  text-decoration-line: underline;
}
</style>
