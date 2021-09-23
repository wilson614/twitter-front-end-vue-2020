<template>
  <div id="simple-twitter">

    <main role="main" class="d-flex justify-content-center">
      <router-view :key="$route.fullPath"/>
    </main>
    
  </div>
</template>

<style lang="scss">
@import "assets/scss/main.scss";

#simple-twitter {
  width: 100vw;
  height: 100vh;
  // background-color: $button-color;
}
</style>
