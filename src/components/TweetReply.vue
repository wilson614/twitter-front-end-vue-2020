<template>
  <div id="tweet-reply">
    <img
      src="https://loremflickr.com/240/240/?random=83.43458862610815"
      alt="avator"
    />
    <div class="reply-content">
      <div class="user-details">
        <span class="user-name">WHO</span>
        <span class="user-detail">請複製下面的</span>
        <!-- <span class="user-detail">
            {{ tweet.account }}•{{
              isToday(tweet.createdAt)
                ? fromNow(utcOffset(tweet.createdAt))
                : timeFormat(utcOffset(tweet.createdAt), 'MM月DD日')
            }}
          </span> -->
      </div>
      <div class="reply">
        <span>回覆&ensp;</span>
        <a class="reply-tweet-account">@XX!!!!!X</a>
        <div class="reply-text">Great~</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#tweet-reply {
  width: 100%;
  padding: 0.938rem;
  display: flex;
  border-bottom: 1px solid $popular-border;
  img {
    width: 50px;
    height: 50px;
    margin-right: 0.625rem;
    border-radius: 50px;
  }
}
.user-details {
  margin-top: 0.25rem;
  .user-name {
    font-size: 15px;
    font-weight: 700;
    color: $main-text;
    margin-right: 0.313rem;
  }
  .user-detail {
    font-size: 15px;
    font-weight: 500;
    color: $input-placeholder;
  }
}
.reply {
  span {
    margin-right: 0.5px;
    font-size: 15px;
    font-weight: 500;
    color: $input-placeholder;
  }
  .reply-tweet-account {
    font-size: 15px;
    font-weight: 500;
    color: $nav-avtive-color;
  }
  .reply-text {
    margin-top: 0.25rem;
    font-size: 15px;
    font-weight: 400;
  }
}
</style>
