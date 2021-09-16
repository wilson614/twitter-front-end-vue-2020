import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'http://a76b-61-216-176-145.ngrok.io/api'

export const apiHelper = axios.create({
  baseURL,
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
})