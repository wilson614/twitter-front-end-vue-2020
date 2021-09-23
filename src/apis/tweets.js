import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getTweets() {
    return apiHelper.get('/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  getTweetDetail(tweet_id) {
    return apiHelper.get(`/tweets/${tweet_id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  likeTweet({ tweetId }) {
    return apiHelper.post(`/tweets/${tweetId}/like`, null, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  unlikeTweet({ tweetId }) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`, null, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  postTweet({ UserId, description }) {
    return apiHelper.post(
      '/tweets',
      { UserId, description },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    )
  },
    getReplies(tweet_id) {
    return apiHelper.get(`/tweets/${tweet_id}/replies`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
}
