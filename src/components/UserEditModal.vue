<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <form enctype="multipart/form-data" @submit.stop.prevent="handleSubmit">
          <header class="modal-header" id="modalTitle">
            <button
              type="button"
              class="btn-close"
              aria-label="Close modal"
              @click="close"
            >
              <i class="fas fa-times" style="font-size: 22px"></i>
            </button>
            <slot name="header"> 編輯個人資料 </slot>
            <button type="submit" class="btn-save" aria-label="Save modal">
              儲存
            </button>
          </header>

          <section class="modal-body" id="modalDescription">
            <div class="img-container">
              <div class="form-group-cover">
                <div class="label-wrapper">
                  <label for="cover-edit" class="cover-edit">
                    <img
                      src="../assets/svg/editProfile-upload.svg"
                      alt=""
                      width="20"
                      height="20"
                    />
                  </label>
                  <button
                    class="cover-delete"
                    @click.stop.prevent="user.cover = initialUser.cover"
                  >
                    <img
                      src="../assets/svg/editProfile-close.svg"
                      alt=""
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
                <img class="cover-img" :src="user.cover" alt="..." />
                <input
                  id="cover-edit"
                  type="file"
                  name="cover"
                  accept="image/*"
                  class="cover-form-control-file d-none"
                  @change="handleCoverChange"
                />
              </div>

              <div class="form-group-avatar">
                <div class="label-control">
                  <label for="avatar-edit" class="cover-edit">
                    <img
                      src="../assets/svg/editProfile-upload.svg"
                      alt=""
                      width="20"
                      height="20"
                    />
                  </label>
                </div>
                <img class="avatar" :src="user.avatar" alt="..." />
                <input
                  id="avatar-edit"
                  type="file"
                  name="avatar"
                  accept="image/*"
                  class="avatar-form-control-file d-none"
                  @change="handleAvatarChange"
                />
              </div>
            </div>

            <div class="form-container">
              <div class="form-label-group">
                <input
                  v-model="user.name"
                  id="name"
                  name="name"
                  type="text"
                  class="form-control"
                  placeholder="名稱"
                  autocomplete="username"
                  maxlength="50"
                  autofocus
                />
                <label class="placeholder">名稱</label>
                <small class="word-count d-inline-block"
                  >{{ user.name.length }}/50</small
                >
              </div>
              <div class="form-label-group">
                <textarea
                  id="introduction"
                  v-model="user.introduction"
                  name="introduction"
                  class="form-control"
                  maxlength="160"
                  placeholder="自我介紹"
                />
                <label class="placeholder">自我介紹</label>
                <small class="word-count d-inline-block"
                  >{{ user.introduction? user.introduction.length : 0 }}/160</small
                >
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";

export default {
  name: "UserEditModal",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {
        ...this.initialUser,
      },
      isProcessing: false,
      avatarChange: false,
      coverChange: false,
    };
  },
  watch: {
    initialUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue,
      };
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    ...mapActions(['fetchCurrentUser']),
    close() {
      this.$emit("close");
      setTimeout(() => {
        this.user = {
          ...this.initialUser,
        };
        this.coverChange = false;
        this.avatarChange = false;
      }, 500);
    },
    handleCoverChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.cover = "";
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.cover = imageURL;
        this.coverChange = true;
      }
    },
    handleAvatarChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.avatar = "";
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.avatar = imageURL;
        this.avatarChange = true;
      }
    },
    async handleSubmit(e) {
      try {
        const form = e.target;
        let formData = new FormData(form);
        this.isProcessing = true;
        if(!this.avatarChange){
          formData.delete('avatar')
        }
        if(!this.coverChange){
          formData.delete('cover')
        }

        const { data } = await userAPI.editUserProfile({
          userid: this.user.id,
          formData,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功更新個人資料",
        });
        const editData = {
          name: this.user.name,
          introduction: this.user.introduction,
          avatar: this.user.avatar,
          cover: this.user.cover,
        };
        this.$emit("after-submit", editData);
        this.fetchCurrentUser()
      } catch (error) {
        this.isProcessing = false;
        console.log(error.message);
        Toast.fire({
          icon: "error",
          title: "更新失敗，請稍後再試",
        });
      }
    },
  },
};
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
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: start;
}
.modal {
  background: $body-bg;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  width: 600px;
  height: 657px;
  border-radius: 14px;
  border: 1px solid $body-bg;
}

.modal-header {
  display: flex;
  align-items: center;
  height: 59px;
  position: relative;
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
  font-size: 19px;
  font-weight: 700;
  padding-left: 3em;
}
.btn-close {
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 10px;
  cursor: pointer;
  color: $button-color;
  background: transparent;
}

.btn-save {
  width: 66px;
  height: 28px;
  border-radius: 100px;
  background-color: $button-color;
  color: $body-bg;
  font-size: 18px;
  font-weight: 500;
  margin-right: 15px;
}

.modal-body {
  .img-container {
    label {
      cursor: pointer;
    }
  }
  .form-group-cover {
    position: relative;
    .label-wrapper {
      position: absolute;
      top: calc(50% - 15px);
      left: calc(50% - 40px);
      width: 80px;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cover-img {
      width: 600px;
      height: 200px;
    }
  }
  .form-group-avatar {
    position: relative;
    .avatar {
      position: absolute;
      top: -60px;
      left: 15px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 4px solid $body-bg;
      z-index: 0;
    }
    .label-control {
      width: 22px;
      height: 22px;
      position: absolute;
      top: -11px;
      left: calc(75px - 11px);
      z-index: 1;
    }
  }
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  .form-label-group {
    position: relative;
    .placeholder {
      position: absolute;
      left: 1em;
      top: 2px;
      color: $input-placeholder;
      font-size: 15px;
      font-weight: 500;
    }
    input,
    textarea {
      width: 570px;
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
    textarea {
      height: 150px;
      position: relative;
    }
    input {
      height: 54px;
    }
    input:not(:placeholder-shown):invalid {
      border-bottom: 3px solid $input-underline-error;
    }
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px $input-bg inset;
      box-shadow: 0 0 0px 1000px $input-bg inset;
    }
    .word-count {
      position: absolute;
      bottom: 16px;
      right: 0px;
      font-size: 15px;
      font-weight: 500;
      color: $input-placeholder;
    }
    .error-msg {
      position: absolute;
      bottom: 16px;
      left: 0px;
      font-size: 15px;
      font-weight: 500;
      color: $input-error-msg;
    }
  }
}
</style>
