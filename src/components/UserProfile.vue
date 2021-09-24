<template>
  <div class="container user-profile-container d-flex justify-content-center">
    <div class="card">
      <div class="card-top">
        <img class="cover-img" :src="user.cover" alt="..." />
        <img class="avatar" :src="user.avatar" alt="..." />
      </div>

      <!-- currentUser -->
      <template v-if="user.id === this.currentUser.id">
        <div class="btn-control current-user d-flex justify-content-end">
          <button type="button" class="btn edit-profile-btn" @click="showModal">
            編輯個人資料
          </button>
        </div>
      </template>

      <!-- !currentUser -->
      <template v-else>
        <div class="btn-control user d-flex justify-content-end">
          <!-- message -->
          <button type="button" class="btn btn-msg">
            <i class="far fa-envelope fa-lg"></i>
          </button>
          <!-- notify -->
          <button
            v-if="user.isNotified"
            @click.stop.prevent="unNotify"
            type="submit"
            class="btn notif"
          >
            <img
              src="../assets/svg/btn_noti.svg"
              width="35"
              height="35"
              alt=""
            />
          </button>
          <button
            v-else
            @click.stop.prevent="notify"
            type="submit"
            class="btn notif-checked"
          >
            <img
              src="../assets/svg/btn_noti_checked.svg"
              width="35"
              height="35"
              alt=""
            />
          </button>
          <!-- follow -->
          <button
            v-if="user.isFollowed"
            @click.stop.prevent="unfollow"
            type="submit"
            class="btn following-btn"
          >
            正在跟隨
          </button>
          <button
            v-else
            type="submit"
            @click.stop.prevent="follow"
            class="btn follow-btn"
          >
            跟隨
          </button>
        </div>
      </template>

      <div class="card-body d-flex flex-column">
        <p class="card-name">{{ user.name }}</p>
        <router-link class="card-account" to="#">{{
          '@'+user.account
        }}</router-link>
        <p class="introduction my-2">
          {{ user.introduction }}
        </p>
        <div class="follows d-flex">
          <div class="following-wrapper">
            <span class="following">{{ user.followingCount }} 個</span>
            <router-link
              class="a-following"
              :to="{
                name: 'followings',
                params: { userid: this.$route.params.userid },
              }"
              >跟隨中</router-link
            >
          </div>
          <div class="follower-wrapper ml-5">
            <span class="follower">{{ user.followerCount }} 位</span>
            <router-link class="a-follower" :to="{
                name: 'followers',
                params: { userid: this.$route.params.userid },
              }"
              >跟隨者</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <UserEditModal
      :initial-user="user"
      v-show="isModalVisible"
      @close="closeModal"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import UserEditModal from "./../components/UserEditModal.vue";
import { mapState } from "vuex";
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    UserEditModal,
  },
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  watch: {
    initialUser (newValue) {
      this.user = {
        ...this.user,
        ...newValue
      }
    }
  },
  data() {
    return {
      user: this.initialUser,
      isModalVisible: false,
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async follow() {
      try {
        const { data } = await userAPI.addFollowed({ id: this.user.id });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功跟隨",
        });
        this.user.isFollowed = true;
        this.user.followerCount++;
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: "error",
          title: "無法跟隨，請稍後再試",
        });
      }
    },
    async unfollow() {
      try {
        const { data } = await userAPI.deleteFollowed({ id: this.user.id });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功取消跟隨",
        });
        this.user.isFollowed = false;
        this.user.followerCount--;
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: "error",
          title: "無法取消跟隨，請稍後再試",
        });
      }
    },
    notify() {
      //TODO emit or call api
      this.user = {
        ...this.user,
        isNotified: true,
      };
    },
    unNotify() {
      //TODO emit or call api
      this.user = {
        ...this.user,
        isNotified: false,
      };
    },
    handleAfterSubmit(data) {
      console.log(data)
      this.user = { ...this.user, ...data }
      this.isModalVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 600px;
  // height: 375px;
}

.card-top {
  position: relative;
  .cover-img {
    width: 600px;
    height: 200px;
  }
  .avatar {
    position: absolute;
    top: 63%;
    left: 15px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 4px solid $body-bg;
  }
}

.card-body {
  padding-top: 0.8em;
  margin-left: 15px;
  .card-name {
    font-size: 19px;
    font-weight: 900;
  }
  .card-account {
    font-size: 15px;
    font-weight: 900;
    color: $input-placeholder;
  }
  .introduction {
    font-size: 14px;
    font-weight: 400;
  }
  .following,
  .follower,
  .a-following,
  .a-follower {
    font-size: 14px;
    font-weight: 500;
  }
  .a-following,
  .a-follower {
    color: $input-placeholder;
  }
}

.btn-control {
  margin-top: 1em;
  margin-right: 15px;
  .edit-profile-btn {
    padding: 10px 15px 10px 15px;
    border: 1px solid $button-color;
    color: $button-color;
    border-radius: 100px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    &:hover,
    &:focus {
      border: 1px solid $body-bg;
      color: $body-bg;
      background-color: $button-color;
    }
  }
  .btn-msg {
    border: 1px solid $button-color;
    border-radius: 50%;
    margin-top: 4px;
    width: 35px;
    height: 35px;
    color: $button-color;
    &:hover {
      background: $button-color;
      color: $body-bg;
    }
  }
  .envelope:hover {
    color: #ffffff !important;
  }
  .follow-btn {
    padding: 10px 15px 10px 15px;
    border-radius: 100px;
    border: 1px solid $button-color;
    color: $button-color;
    font-size: 15px;
    font-weight: 700;
  }
  .following-btn {
    padding: 10px 15px 10px 15px;
    border-radius: 100px;
    color: $body-bg;
    border: 1px solid $button-color;
    background-color: $button-color;
    font-size: 15px;
    font-weight: 700;
  }
}
</style>
