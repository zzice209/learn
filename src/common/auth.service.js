import axios from 'axios'
import router from '@/router'
import ApiService from '@/common/api.service'
// import store from '@/store'
const AuthService = {
  check() {
    if (localStorage.getItem('api_token') !== null) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('api_token')
      axios.get('api/profile').then(response => {
        this.user = response.data.data
        this.loggedIn = true
      }).catch(() => {
        router.push({
          path: '/login'
        })
      })
    } else {
      // router.push({
      //   path: '/login'
      // })
    }
  },
  RefreshToken() {
    ApiService.refreshToken()
  }
}

export default AuthService
