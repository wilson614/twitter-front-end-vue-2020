import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getTweets() {
    return apiHelper.get("/tweets", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  likeTweet({ tweetId }) {
    return apiHelper.post(`/tweets/${tweetId}/like`, null, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  unlikeTweet({ tweetId }) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`, null, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
