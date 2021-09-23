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
    });
  },
  addFollowed({ id }) {
    return apiHelper.post(
<<<<<<< HEAD
      "/followships",
=======
      '/followships',
>>>>>>> e724eff (feat: 新增 popoular API)
      { id },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
<<<<<<< HEAD
    );
=======
    )
>>>>>>> e724eff (feat: 新增 popoular API)
  },
  deleteFollowed({ id }) {
    return apiHelper.delete(`/followships/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
<<<<<<< HEAD
    });
  },
  editUserProfile({ userid, body }) {
    return apiHelper.put(`/users/${userid}`, body, {
=======
    })
  },
  getCurrentUsers() {
    console.log(getToken())
    return apiHelper.get('/current_user', null, {
>>>>>>> e724eff (feat: 新增 popoular API)
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
