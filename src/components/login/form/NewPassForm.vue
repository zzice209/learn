<template>
<v-carousel class="login" :value="position" :cycle="false" hide-delimiters hide-controls>
  <v-carousel-item :key="1">
    <div class="new-pass-container">
      <div class="top-container"></div>
      <div class="reset-content">
        <v-layout align-center>
          <v-flex>
            <div class="big-title">{{$t('newpass.headTitle')}}</div>
            <div class="semi-title">{{$t('newpass.title')}}</div>
          </v-flex>
        </v-layout>
        <v-form v-on:submit.prevent novalidate>
          <div class="reset-email-group">
            <v-tooltip :content-class="'cbt-tooltip right ' + (errorMessage || $v.newpass.$invalid && checking?'show':'hide')" right>
              <v-input slot="activator" :error="errorMessage !== '' || $v.newpass.$invalid && checking" :class="{'has-error': errorMessage !== '' || $v.newpass.$invalid && checking}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-unlock">
                <input autocomplete="off" type="password" maxlength="250" v-model="newpass" :placeholder="$t('register.input.password')">
                <span class="require-icon">*</span>
              </v-input>
              <span v-if="!$v.newpass.required">{{$t('register.error.require.password')}}</span>
              <span v-if="!$v.newpass.password">{{$t('register.error.type.password')}}</span>
              <span v-if="errorMessage">{{$t(errorMessage)}}</span>
            </v-tooltip>
            <v-tooltip :content-class="'cbt-tooltip right ' + (errorMessage !== '' || $v.checkpass.$invalid && checking?'show':'hide')" right>
              <v-input slot="activator" :error="errorMessage !== '' || $v.checkpass.$invalid && checking" :class="{'has-error': errorMessage !== '' || $v.checkpass.$invalid && checking}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-unlock">
                <input autocomplete="off" type="password" maxlength="250" v-model="checkpass" :placeholder="$t('register.input.checkpass')">
                <span class="require-icon">*</span>
              </v-input>
              <span v-if="!$v.checkpass.required">{{$t('register.error.require.checkpass')}}</span>
              <span v-if="!$v.checkpass.password">{{$t('register.error.type.password')}}</span>
              <span v-if="errorMessage">{{$t(errorMessage)}}</span>
            </v-tooltip>
            <v-input class="error-group" :error="error" :error-messages="$t(errorMessage)"></v-input>
          </div>
          <div class="button-container">
            <v-btn type="submit" :loading="loading" @click.native="checkPass" class="cbt-btn accent-main">{{$t('login.button.send')}}</v-btn>
          </div>
        </v-form>
      </div>
    </div>
  </v-carousel-item>
  <v-carousel-item :key="2">
    <success-form :email="email" type="newPass" @backLogin="backLogin"></success-form>
  </v-carousel-item>
</v-carousel>
</template>

<script>
import {
  required,
  helpers
} from 'vuelidate/lib/validators';
import userService from '@/api/user.api';
import SuccessForm from '@/components/login/form/SuccessForm.vue';
import REGEX_OPTIONS from '@/const/regex'
const password = helpers.regex('password', REGEX_OPTIONS.regex_pass);

export default {
  components: {
    'success-form': SuccessForm
  },
  data() {
    return {
      position: 0,
      newpass: '',
      checkpass: '',
      checking: false,
      error: false,
      errorMessage: '',
      loading: false,
      success: false
    };
  },
  validations: {
    newpass: {
      required,
      password
    },
    checkpass: {
      required,
      password
    }
  },
  props: ['email'],
  methods: {
    checkPass() {
      this.checking = true;
      this.error = false;

      if (!this.$v.$invalid) {
        if (!this.newpass || !this.checkpass) {
          this.errorMessage = 'newpass.error.requirePass';
          this.error = true;
          this.loading = false;
        } else {
          if (this.newpass !== this.checkpass) {
            this.error = true;
            this.errorMessage = 'newpass.error.wrongPass';
            this.loading = false;
          } else {
            this.loading = true;
            userService
              .ChangePass({
                token: this.$store.state.auth.forgetToken,
                newpass: this.newpass
              })
              .then(({
                data
              }) => {
                if (data.statusCode !== 0) {
                  this.error = true;
                  this.loading = false;
                  this.errorMessage = 'newpass.error.tokenExpired';
                } else {
                  this.success = true;
                  this.loading = false;
                  this.$store.state.auth.forgetToken = '';
                  this.position = 1;
                }
              })
              .catch(e => {
                this.error = true;
                this.loading = false;
                this.errorMessage = 'newpass.error.notHaveEmail';
              });
          }
        }
      }
    },
    backLogin() {
      this.loading = false;
      this.$emit('backLogin', true);
    }
  },
  name: 'NewPass'
};
</script>
