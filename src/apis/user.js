import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getTopUsers() {
    return apiHelper.get("/users/top_users", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getCurrentUser() {
    return apiHelper.get("/current_user", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  get({ userid }) {
    return apiHelper.get(`/users/${userid}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUserTweet({ userid }) {
    return apiHelper.get(`/users/${userid}/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUserLikes({ userid }) {
    return apiHelper.get(`/users/${userid}/likes`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUserReplies({ userid }) {
    return apiHelper.get(`/users/${userid}/replied_tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUserFollowings({ userid }) {
    return apiHelper.get(`/users/${userid}/followings`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUserFollowers({ userid }) {
    return apiHelper.get(`/users/${userid}/followers`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  // TODO: 待修復 setting api
  updateUserSetting({ user_id, formData }) {
    return apiHelper.put(`/users/${user_id}/setting`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  addFollowed({ id }) {
    return apiHelper.post(
      "/followships",
      { id },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
  },
  deleteFollowed({ id }) {
    return apiHelper.delete(`/followships/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  editUserProfile({ userid, formData }) {
    return apiHelper.put(`/users/${userid}`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
