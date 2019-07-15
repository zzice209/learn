<template>
<div class="login-container">
  <v-form v-on:submit.prevent novalidate autocomplete="off">
    <div class="logo-container">
      <img src="@/assets/image/CyberTargeting Logo.png">
    </div>
      <div class="form-container">
        <v-input :error="error" :class="{'has-error': error}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-user3">
          <input maxlength="50" autocomplete="off" type="text" v-model="username" :placeholder="$t('login.input.username')">
        </v-input>
          <v-input :error="error" :class="{'has-error': error}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-unlock">
            <input maxlength="255" autocomplete="off" type="password" v-model="password" :placeholder="$t('login.input.password')">
        </v-input>
        <v-input class="error-group" :error="error" :error-messages="$t(errorMessage)"></v-input>
      </div>
      <div class="button-container">
        <v-btn :disabled="!this.username || !this.password" type="submit" :loading="loading" @click.native="checkLogin" class="cbt-btn accent-main">
          {{$t('login.button.login')}}
        </v-btn>
        <v-btn @click.native="needReset" class="cbt-btn font-semi accent-semi color-main">{{$t('login.button.forgot')}}</v-btn>
      </div>
  </v-form>
</div>
</template>

<script>
import userService from '@/api/user.api';
import { LOGIN } from '@/store/action.type';
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      error: false,
      errorMessage: ''
    };
  },
  computed: {},
  created() {},
  methods: {
    checkLogin() {
      this.error = false;
      this.loading = true;
      this.errorMessage = '';
      userService
        .Login({
          username: this.username,
          password: this.password
        })
        .then(({ data }) => {
          if (data.status === 401) {
            this.error = true;
            this.loading = false;
            switch (data.statusCode) {
              case 3:
                this.errorMessage = 'login.error.login_fail';
                break;
              case 11:
                this.errorMessage = 'login.error.permission_fail';
                break;
              case 15:
                this.errorMessage = 'login.error.terminate_fail';
                break;
            }
          } else {
            this.loading = false;
            this.$store.dispatch(LOGIN, data.data).then(() => {
              Cookies.set('firstTime', 'true');
              let permission = this.$store.state.auth.permission;
              if (permission.DASHBOARD_VIEW === '1') {
                this.$router.push('/dashboard');
              } else if (permission.AUDIENCE_VIEW === '1') {
                this.$router.push('/audience');
              } else if (permission.TRACKING_VIEW === '1') {
                this.$router.push('/tracking');
              } else if (permission.AD_ACCOUNT_VIEW === '1') {
                this.$router.push('/adaccount');
              } else if (permission.USER_MANAGEMENT === '1') {
                this.$router.push('/users');
              } else {
                this.$router.push('/profile')
              }
            });
          }
        })
        .catch(e => {
          this.error = true;
          this.loading = false;
          this.errorMessage = 'login.error.login_fail';
        });
    },
    needReset() {
      this.$emit('needReset', true);
    }
  },
  name: 'Login'
};
</script>
