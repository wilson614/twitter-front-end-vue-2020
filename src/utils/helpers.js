import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://good-simple-twitter.herokuapp.com/api'

export const apiHelper = axios.create({
  baseURL,
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
})

export const currentUser = {
  id: 2,
  name: "user1",
  account: "@user1",
  avatar: "https://loremflickr.com/240/240/?random=44.498223728686305",
  role: "user",
  cover: "https://loremflickr.com/720/240/?random=78.80177917119791",
  followerCount: 0,
  followingCount: 0,
  tweetCount: 10,
};