<template>
  <div id="tweetdetail">
    <div class="tweet-header">
      <img
        src="https://loremflickr.com/240/240/?random=83.43458862610815"
        alt=""
      />
      <div class="user-detail">
        <span class="user-name">name</span>
        <span class="user-account">@account</span>
      </div>
    </div>
    <div class="tweet-text">
      Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
      cillum dolor. Voluptate exercitation incididunt aliquip deserunt
      reprehenderit elit laborum.
    </div>
    <div class="tweet-detail">
      hk4g日期
      <!-- <span>
        •{{
          isToday(tweet.createdAt)
            ? fromNow(utcOffset(tweet.createdAt))
            : timeFormat(utcOffset(tweet.createdAt), 'MM月DD日')
        }}
      </span> -->
    </div>
    <div class="tweet-text-detail">
      <span class="reply"> <span class="reply-count">54</span> 回覆 </span>
      <span class="like"> <span class="like-count">5555</span> 喜歡次數 </span>
    </div>
    <div class="btn btn-control">
      <div class="btn-reply">
        <img class="reply-icon" src="@/assets/svg/reply-lg.svg"/>
      </div>
      <div class="btn-like">
        <img class="like-icon" src="@/assets/svg/like-lg.svg"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#tweetdetail {
  width: 100%;
  padding: 0.938rem 0.938rem 0.625rem 0.938rem;
}

.tweet-header {
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    margin-right: 0.625rem;
    border-radius: 50px;
  }
  .user-detail {
    display: flex;
    flex-direction: column;
    .user-name {
      font-size: 15px;
      font-weight: 700;
      // line-height: 22px;
      color: $main-text;
    }
    .user-account {
      font-size: 15px;
      font-weight: 500;
      // line-height: 22px;
      color: $input-placeholder;
    }
  }
}

.tweet-text {
  margin: 1.125rem 0;
  line-height: 34px;
  font-size: 23px;
  font-weight: 500;
}

.tweet-detail {
  padding-bottom: 1.125rem;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  color: $input-placeholder;
  border-bottom: 1px solid $popular-border;
}

.tweet-text-detail {
  padding: 1.25rem 0;
  border-bottom: 1px solid $popular-border;
  .reply {
    margin-right: 1.25rem;
  }
  .reply,
  .like {
    font-size: 19px;
    font-weight: 500;
    line-height: 27.51px;
    color: $input-placeholder;
  }
  .reply-count, .like-count {
    font-weight: 700;
    line-height: 28px;
    color: $modal-body-bg;
  }
}

.btn-control {
  padding-top: 0.938rem;
  display: flex;
  img {
    width: 30px;
    height: 30px;
  }
  .btn-reply {
    margin-right: 9.375rem;
  }
}
</style>
