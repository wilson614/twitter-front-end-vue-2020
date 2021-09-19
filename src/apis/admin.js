import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  users: {
    get() {
      return apiHelper.get('/admin/users', {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
    },
  },
  tweets: {
    get() {
      return apiHelper.get('/admin/tweets', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
    },
    delete({ tweetId }) {
      return apiHelper.delete(`api/admin/tweets/${tweetId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
    },
  },
}
