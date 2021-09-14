<template>
  <div class="container admin-tweet-list py-5">
    <div class="tweet-list-wrapper">
      <ul class="tweet-list-content">
        <li class="tweet d-flex">
          <div class="tweet-content">
            <div class="user-avatar">
              <img
                class="avatar"
                src="https://i.ibb.co/y6FYGKT/user-256.jpg"
                alt=""
              />
            </div>
            <div class="user-details">
              <div class="user-name-account">
                <span class="user-name">Apple</span>
                <span class="user-account"><a href="">@apple</a></span>
              </div>
              <div class="user-tweet">
                vitae et leo duis ut diam quam nulla porttitor massa id neque
                aliquam vestibulum morbi blandit cursus risus at ultrices mi
                tempus imperdiet nulla malesuada pellentesque elit eget gravida
                cum sociis natoque penatibus et magnis dis parturient montes
                nascetur ridiculus mus mauris vitae ultricies leo integer
                malesuada nunc vel risus commodo viverra maecenas accumsan lacus
                vel facilisis volutpat est velit egestas dui id ornare arcu odio
                ut sem nulla pharetra diam sit amet nisl suscipit adipiscing
                bibendum est ultricies integer quis auctor elit sed vulputate mi
                sit amet mauris commodo quis imperdiet massa tincidunt nunc
                pulvinar sapien et ligula ullamcorper malesuada proin libero
                nunc consequat interdum varius sit amet mattis vulputate enim
                nulla aliquet porttitor lacus luctus accumsan tortor posuere ac
                ut consequat semper viverra nam libero justo laoreet sit amet
                cursus sit amet dictum sit amet justo donec enim
              </div>
            </div>
          </div>
          <div class="btn btn-delete">
            <img src="../assets/svg/admin-X.svg" alt="" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid $modal-placeholder;
}
.btn-delete {
  width: 15px;
  height: 15px;
}
</style>
