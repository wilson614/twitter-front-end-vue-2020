<template>
  <div class="container user-profile-container d-flex justify-content-center">
    <div class="card">
      <div class="card-top">
        <img class="cover-img" :src="profile.cover" alt="..." />
        <img class="avatar" :src="profile.avatar" alt="..." />
      </div>

      <!-- currentUser -->
      <template v-if="profile.id === currentUser.id">
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
            v-if="profile.isNotified"
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
            v-if="profile.isFollowed"
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
        <p class="card-name">{{ profile.name }}</p>
        <a class="card-account" href="">{{ profile.account }}</a>
        <p class="introduction my-2">
          {{ profile.introduction }}
        </p>
        <div class="follows d-flex">
          <div class="following-wrapper">
            <span class="following">{{ profile.followingCount }} 個</span>
            <a class="a-following" href="#">跟隨中</a>
          </div>
          <div class="follower-wrapper ml-5">
            <span class="follower">{{ profile.followerCount }} 位</span>
            <a class="a-follower" href="#">跟隨者</a>
          </div>
        </div>
      </div>
    </div>
    <UserEditModal
      :initial-profile="profile"
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>

<script>
import UserEditModal from "./../components/UserEditModal.vue";

export default {
  components: {
    UserEditModal,
  },
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      profile: this.initialProfile,
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    follow() {
      this.profile = {
        ...this.profile,
        isFollowed: true,
      };
    },
    unfollow() {
      this.profile = {
        ...this.profile,
        isFollowed: false,
      };
    },
    notify() {
      this.profile = {
        ...this.profile,
        isNotified: true,
      };
    },
    unNotify() {
      this.profile = {
        ...this.profile,
        isNotified: false,
      };
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
