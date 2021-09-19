<template>
  <div class="container">
    <ul class="list">
      <li class="item d-flex">
        <img
          class="avatar"
          src="https://loremflickr.com/240/240/?random=44.498223728686305"
        />
        <div class="content">
          <div class="wrapper d-flex justify-content-between">
            <div class="info">
              <p class="name">Marvin Kckinney</p>
              <a href="" class="account">@MariaReves</a>
            </div>
            <div class="btn-control">
              <button type="submit" class="btn following-btn">正在跟隨</button>
              <button type="submit" class="btn follow-btn">跟隨</button>
            </div>
          </div>
          <p class="introduction">
            Aut necessitatibus illo aut. Totam veniam atque et ea voluptate
            quis. Reiciendis unde sed vel. Aliquid sunt optio quia voluptatem
            reiciendis
          </p>
        </div>
      </li>
    </ul>
  </div>
</template> 

<script>
export default {
  props: {
    followings: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.list {
  width: 100%;
}
.item {
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid $popular-border;
  .avatar {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }
  .info {
    font-size: 15px;
    line-height: 15px;
    .name {
      font-weight: 700;
      padding-bottom: 5px;
    }
    .account {
      display: block;
      font-weight: 500;
      color: $input-placeholder;
      padding-bottom: 5px;
    }
  }
  .btn-control {
    .btn {
      font-size: 15px;
      font-weight: 700;
      line-height: 15px;
      border-radius: 100px;
      padding: 5px 15px;
    }
    .following-btn {
      background-color: $button-color;
      color: $body-bg;
    }
    .follow-btn {
      border: 1px solid $button-color;
      color: $button-color;
    }
  }
  .introduction {
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
  }
}
</style>
