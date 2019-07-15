import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import JwtService from '@/common/jwt.service'
import {
  LOG_OUT,
  LOGIN
} from '@/store/action.type'
import store from '@/store'
import router from '@/router'
import API_URL from '@/api/api.url'

const ApiService = {
  init () {
    const baseURL = process.env.BASE_API
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = baseURL
    this.setHeader()
  },
  setHeader () {
    Vue.axios.defaults.headers.common['Authorization'] = `${JwtService.getToken()}`
  },
  refreshToken () {
    return new Promise((resolve, reject) => {
      Vue.axios.get(API_URL.REFRESH_TOKEN).then((response) => {
        if (response.data.status === 401) {
          store.dispatch(LOG_OUT);
          router.push('/');
        } else {
          store.dispatch(LOGIN, response.data.data)
          resolve(response)
        }
      }).catch((err) => {
        reject(err)
      })
    })
  },
  query (resource, params) {
    return new Promise((resolve, reject) => {
      Vue.axios.get(resource, params).then((response) => {
        if (response.data.status === 401) {
          store.dispatch(LOG_OUT);
          router.push('/');
        } else {
          resolve(response)
        }
      }).catch((err) => {
        reject(err)
        throw new Error(`[RWV] ApiService ${err}`)
      })
    })
  },
  get (resource, slug = '') {
    return new Promise((resolve, reject) => {
      Vue.axios.get(slug === '' ? `${resource}` : `${resource}/${slug}`).then((response) => {
        if (response.data.status === 401) {
          store.dispatch(LOG_OUT);
          router.push('/');
        } else {
          resolve(response)
        }
      }).catch((err) => {
        reject(err)
        throw new Error(`[RWV] ApiService ${err}`)
      })
    })
  },
  post (resource, params) {
    return new Promise((resolve, reject) => {
      Vue.axios.post(`${resource}`, params).then((response) => {
        if (response.data.status === 401) {
          store.dispatch(LOG_OUT);
          router.push('/');
        } else {
          resolve(response)
        }
      }).catch((err) => {
        reject(err)
        throw new Error(`[RWV] ApiService ${err}`)
      })
    })
  },
  put (resource, params) {
    return new Promise((resolve, reject) => {
      Vue.axios.put(`${resource}`, params).then((response) => {
        if (response.data.status === 401) {
          store.dispatch(LOG_OUT);
          router.push('/');
        } else {
          resolve(response)
        }
      }).catch((err) => {
        reject(err)
        throw new Error(`[RWV] ApiService ${err}`)
      })
    })
  },

  delete (resource) {
    return new Promise((resolve, reject) => {
      Vue.axios.delete(`${resource}`).then((response) => {
        if (response.data.status === 401) {
          store.dispatch(LOG_OUT);
          router.push('/');
        } else {
          resolve(response)
        }
      }).catch((err) => {
        reject(err)
        throw new Error(`[RWV] ApiService ${err}`)
      })
    })
  },

  postWithoutLogout (resource, params) {
    return new Promise((resolve, reject) => {
      Vue.axios.post(`${resource}`, params).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
        throw new Error(`[RWV] ApiService ${err}`)
      })
    })
  },
  upload(resource, file, self) {
    return new Promise((resolve, reject) => {
      Vue.axios.post(`${resource}`, file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function (progressEvent) {
          self.uploadPercentage = parseInt(Math.round((0.5 * progressEvent.loaded * 100) / progressEvent.total));
        }
      }).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
        throw new Error(`[RWV] ApiService ${err}`)
      })
    })
  },
  postWithProgressbar(resource, data, self, start) {
    return new Promise((resolve, reject) => {
      Vue.axios.post(`${resource}`, data, {
        onUploadProgress: function (progressEvent) {
          self.uploadPercentage = parseInt(Math.round((start + (0.3 * progressEvent.loaded * 100) / progressEvent.total)));
        }
      }).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
        throw new Error(`[RWV] ApiService ${err}`)
      })
    })
  },
  saveAudienceFile(resource, data) {
    return new Promise((resolve, reject) => {
      Vue.axios.post(`${resource}`, data).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
        throw new Error(`[RWV] ApiService ${err}`)
      })
    })
  }
}

export default ApiService
