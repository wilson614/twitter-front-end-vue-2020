<template>
  <div class="tweet-create">
    <textarea placeholder="有什麼新鮮事？"></textarea>
    <img
      class="avatar"
      src="https://lh3.googleusercontent.com/a-/AOh14GjafILfVnBhDBrtDk_r4kLz4q4tpPhwo7pPWwGo=s96-c"
      alt="avatar"
    />
    <button class="btn">推文</button>
  </div>
</template>

<style lang="scss" scoped>
.tweet-create {
  position: relative;
  height: 120px;
  border-bottom: 0.063rem solid $popular-border;
}
textarea {
  width: 100%;
  height: 100%;
  padding: 1.313rem 0 0 4.688rem;
  resize: none;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  color: $modal-placeholder;
}
img {
  position: absolute;
  top: 10px;
  left: 15px;
  width: 50px;
  height: 50px;
  margin-right: 0.625rem;
  border-radius: 50px;
}
.btn {
  position: absolute;
  bottom: 10px;
  right: 15px;
  padding: 0.625rem 0.938rem;
  border: 1px solid $button-color;
  font-family: inherit;
  font-size: 18px;
  color: $button-text;
  background-color: $button-color;
  border-radius: 100px;
}
</style>
