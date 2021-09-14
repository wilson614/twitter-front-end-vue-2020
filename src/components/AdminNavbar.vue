<template>
  <div class="container navbar-container py-5">
    <div class="nav-list-wrapper">
      <div class="logo">
        <img class="logo" src="../assets/svg/logo.svg" alt="" />
      </div>
      <ul calss="nav admin-nav-lists">
        <li class="nav admin-nav-item d-flex justify-content-center">
          <div class="item-icon">
            <img class="icon home-icon" src="../assets/svg/home.svg" alt="" />
          </div>
          <p>推文清單</p>
        </li>
        <li class="nav admin-nav-item d-flex justify-content-center">
          <div class="item-icon">
            <img
              class="icon user-icon"
              src="../assets/svg/nav-profile.svg"
              alt=""
            />
          </div>
          <p>使用者列表</p>
        </li>
      </ul>
    </div>
    <div class="logout-bar d-flex justify-content-center">
      <div class="item-icon">
        <img
          class="icon logout-icon"
          src="../assets/svg/nav-logout.svg"
          alt=""
        />
      </div>
      <p>登出</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.logo {
  width: 30px;
  height: 30px;
}
.home-icon {
  width: 22px;
  height: 20px;
}
.user-icon {
  width: 17px;
  height: 20px;
}
.logout-icon {
  width: 24px;
  height: 24px;
}
</style>
