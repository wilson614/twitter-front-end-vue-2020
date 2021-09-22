import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getTopUsers() {
    return apiHelper.get('/users/top_users', {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  getCurrentUser() {
    return apiHelper.get('/current_user', {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  get({userid}) {
    return apiHelper.get(`/users/${userid}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUserTweet({userid})  { return apiHelper.get(`/users/${userid}/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUserLikes({userid}) {
    return apiHelper.get(`/users/${userid}/likes`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getUserReplies({userid}) {
    return apiHelper.get(`/users/${userid}/replied_tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  }
  // addFollowed({ userId }) {
  //   return apiHelper.post(`/following/${userId}`, null, {
  //     headers: { Authorization: `Bearer ${getToken()}` },
  //   })
  // },
  // deleteFollowed({ userId }) {
  //   return apiHelper.post(`/following/${userId}`, null, {
  //     headers: { Authorization: `Bearer ${getToken()}` },
  //   })
  // },
}