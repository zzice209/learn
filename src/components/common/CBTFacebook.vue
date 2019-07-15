<template>
  <facebook-login ref="facebook" class="cbt-fb" :app-id="'' + appId" :version="'v3.1'" @sdk-init="sdkLoaded" @logout="onLogout" @login="getUserData" :login-options="options">
  </facebook-login>
</template>


<script>
import facebookLogin from 'facebook-login-vuejs'
// import adAcountService from '@/api/adacount.api.js'

export default {
  props: [ 'callFb' ],
  components: {
    facebookLogin
  },
  data() {
    return {
      appId: process.env.APP_ID,
      isConnected: false,
      token: '',
      FB: undefined,
      options: {
        scope: process.env.APP_SCOPE
      }
    }
  },
  watch: {
    callFb: function(newVal, oldVal) {
      if (newVal) {
        this.$refs.facebook.login()
      }
    }
  },
  methods: {
    getUserData(e) {
      if (e.response.authResponse) {
        this.token = e.response.authResponse.accessToken
        this.loading = false
        this.$emit('loginDone', {
          fbToken: this.token
        })
        this.$refs.facebook.logout()
      }
    },
    sdkLoaded(payload) {
    },
    onLogout() {
      this.isConnected = false
    }
  },
  computed: {
    vmodel: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
