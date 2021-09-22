<template>
  <div class="container d-flex justify-content-center">
    <form class="form admin-login-form" @submit.prevent.stop="handleSubmit">
      <div class="admin-login-title">
        <div class="logo">
          <img src="../assets/svg/logo.svg" alt="" />
        </div>
        <h1 class="login-title">後台登入</h1>
      </div>
      <div class="form-label-group">
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="帳號"
          autocomplete="username"
          required
          autofocus
        />
        <label class="placeholder">帳號</label>
      </div>
      <div class="form-label-group">
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="密碼"
          autocomplete="current-password"
          required
        />
        <label class="placeholder">密碼</label>
      </div>
      <div class="btn-control btn-login">
        <button class="btn btn-login" type="submit" :disabled="isProcessing">
          登入
        </button>
      </div>
      <div class="link-wrapper">
        <router-link to="/login" class="link-wrap user-login"
          >前台登入</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorizationAPI";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      email: "",
      account: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入 email 和 password",
          });
          return;
        }
        this.isProcessing = true;

        const response = await authorizationAPI.adminLogin({
          email: this.email,
          password: this.password,
        });
        console.log(response);
        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.token);
        this.$router.push("/admin/tweets");
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "請確認您輸入的帳號密碼",
        });
        this.isProcessing = false;
        console.log("error", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1440px;
}
form {
  width: 540px;
  padding-top: 60px;
  text-align: center;
}
.admin-login-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 40px;
    height: 40px;
    margin-bottom: 28px;
  }
  .login-title {
    margin-bottom: 30px;
    font-size: 23px;
    font-weight: 700;
  }
}

.form-label-group {
  position: relative;
  // border: 1px solid black;
  .placeholder {
    position: absolute;
    left: 1em;
    top: 2px;
    color: $input-placeholder;
    font-size: 15px;
    font-weight: 500;
  }
  input {
    width: 540px;
    height: 52px;
    border-radius: 4px;
    background-color: $input-bg;
    margin-bottom: 2em;
    padding: 1.3em 0 0 1em;
    font-size: 19px;
    font-weight: 500;
    @extend %form-input-style;
    &::placeholder {
      color: transparent;
    }
  }
  input:not(:placeholder-shown):invalid {
    border-bottom: 3px solid $input-underline-error;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px $input-bg inset;
  }
}

.btn-control {
  margin-top: 2em;
  .btn-login {
    width: 540px;
    height: 50px;
    border-radius: 50px;
    background-color: $button-color;
    color: $button-text;
    font-size: 18px;
    font-weight: 700;
    // box-shadow: 0.5px 0.5px 0.5px #a6a6a6;
    &:hover {
      box-shadow: 1px 1px 3px $input-underline-default;
    }
  }
}

.link-wrapper {
  margin-top: 1.5em;
  text-align: right;
  .link-wrap {
    font-size: 18px;
    font-weight: 700;
    color: $signin-link;
    border-bottom: 1px solid $signin-link;
    letter-spacing: 1px;
  }
}
</style>
