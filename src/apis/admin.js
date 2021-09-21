import { apiHelper } from './../utils/helpers'
const getAdminToken = () => localStorage.getItem('adminToken')

export default {
  users: {
    get() {
      return apiHelper.get('/admin/users', {
        headers: { Authorization: `Bearer ${getAdminToken()}` },
      })
    },
  },
  tweets: {
    get({ page }) {
      return apiHelper.get('/admin/tweets', {
        headers: {
          Authorization: `Bearer ${getAdminToken()}`,
        },
        params: {
          page,
        }
      })
    },
    delete({ tweetId }) {
      return apiHelper.delete(`/admin/tweets/${tweetId}`, {
        headers: {
          Authorization: `Bearer ${getAdminToken()}`,
        },
      })
    },
  },
}
