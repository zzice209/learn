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
          this.$router.push('/dashboard');
        })
        .catch(e => {
          this.$router.push('/dashboard');
        });
    },
    needReset() {
      this.$emit('needReset', true);
    }
  },
  name: 'Login'
};
</script>
