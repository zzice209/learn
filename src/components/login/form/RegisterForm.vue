<template>
<div class="register-container">
  <div class="register-content">
    <v-layout align-center>
      <div class="big-title">{{$t('register.headTitle')}}</div>
    </v-layout>
    <form autocomplete="off">
      <v-layout class="input-group" row wrap>
        <v-flex class="input-column" lg6>
          <div class="input-group-title" style="text-transform: uppercase">{{$t('register.userProfile')}}</div>
          <v-tooltip :content-class="'cbt-tooltip left ' + (($v.fullname.$invalid || existedEmail) && checking?'show':'hide')" left>
            <v-input slot="activator" :error="$v.fullname.$invalid && checking" :class="{'has-error': $v.fullname.$invalid && checking}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-edit-3">
              <input autocomplete="off" type="text" maxlength="250" v-model="fullname" :placeholder="$t('register.input.fullname')">
              <span class="require-icon">*</span>
            </v-input>
            <span v-if="!$v.fullname.required">{{$t('register.error.require.fullname')}}</span>
          </v-tooltip>
          <v-tooltip :content-class="'cbt-tooltip left ' + (($v.email.$invalid || existedEmail) && checking?'show':'hide')" left>
            <v-input slot="activator" :error="($v.email.$invalid || existedEmail) && checking" :class="{'has-error': ($v.email.$invalid || existedEmail) && checking}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-mail2">
              <input autocomplete="off" type="text" maxlength="250" v-model="email" :placeholder="$t('register.input.email')">
              <span class="require-icon">*</span>
            </v-input>
            <span v-if="!$v.email.required">{{$t('register.error.require.email')}}</span>
            <span v-if="!$v.email.email">{{$t('register.error.type.email')}}</span>
            <span v-if="existedEmail">{{$t('register.error.existedEmail')}}</span>
          </v-tooltip>
          <v-tooltip :content-class="'cbt-tooltip left ' + ($v.phone.$invalid && checking?'show':'hide')" left>
            <v-input slot="activator" :error="$v.phone.$invalid && checking" :class="{'has-error': $v.phone.$invalid && checking}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-smartphone3">
              <input autocomplete="off" type="text" maxlength="11" v-model="phone" :placeholder="$t('register.input.phone')" @paste="preventNonNumericalInput" @keypress="preventNonNumericalInput">
              <span class="require-icon">*</span>
            </v-input>
            <span v-if="!$v.phone.required">{{$t('register.error.require.phone')}}</span>
            <span v-if="!$v.phone.numeric">{{$t('register.error.type.phone')}}</span>
            <span v-if="!$v.phone.phone">{{$t('register.error.type.phone')}}</span>
          </v-tooltip>
          <v-tooltip :content-class="'cbt-tooltip left ' + (($v.username.$invalid || existedUser) && checking ?'show':'hide')" left>
            <v-input slot="activator" :error="($v.username.$invalid || existedUser) && checking" :class="{'has-error': ($v.username.$invalid || existedUser) && checking}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-user3">
              <input autocomplete="off" type="text" maxlength="50" v-model="username" :placeholder="$t('register.input.username')">
              <span class="require-icon">*</span>
            </v-input>
            <span v-if="!$v.username.required">{{$t('register.error.require.username')}}</span>
            <span v-if="!$v.username.username">{{$t('register.error.type.username')}}</span>
            <span v-if="existedUser">{{$t('register.error.existedUser')}}</span>
          </v-tooltip>
          <v-tooltip :content-class="'cbt-tooltip left ' + (errorMessage || $v.password.$invalid && checking?'show':'hide')" left>
            <v-input slot="activator" :error="errorMessage || $v.password.$invalid && checking" :class="{'has-error': errorMessage || $v.password.$invalid && checking}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-unlock">
              <input autocomplete="off" type="password" maxlength="250" v-model="password" :placeholder="$t('register.input.password')">
              <span class="require-icon">*</span>
            </v-input>
            <span v-if="!$v.password.required">{{$t('register.error.require.password')}}</span>
            <span v-if="!$v.password.password">{{$t('register.error.type.password')}}</span>
            <span v-if="errorMessage">{{$t(errorMessage)}}</span>
          </v-tooltip>
          <v-tooltip :content-class="'cbt-tooltip left ' + (errorMessage || $v.checkpass.$invalid && checking?'show':'hide')" left>
            <v-input slot="activator" :error="errorMessage || $v.checkpass.$invalid && checking" :class="{'has-error': errorMessage || $v.checkpass.$invalid && checking}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-unlock">
              <input autocomplete="off" type="password" maxlength="250" v-model="checkpass" :placeholder="$t('register.input.checkpass')">
              <span class="require-icon">*</span>
            </v-input>
            <span v-if="!$v.checkpass.required">{{$t('register.error.require.checkpass')}}</span>
            <span v-if="!$v.checkpass.password">{{$t('register.error.type.password')}}</span>
            <span v-if="errorMessage">{{$t(errorMessage)}}</span>
          </v-tooltip>
        </v-flex>
        <v-flex class="input-column" lg6>
          <div class="input-group-title" style="text-transform: uppercase">{{$t('register.companyProfile')}}</div>
          <v-tooltip :content-class="'cbt-tooltip right ' + ($v.companyName.$invalid && checking?'show':'hide')" right>
            <v-input slot="activator" :error="$v.companyName.$invalid && checking" :class="{'has-error': $v.companyName.$invalid && checking}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-building">
              <input autocomplete="off" type="text" maxlength="250" v-model="companyName" :placeholder="$t('register.input.companyName')">
              <span class="require-icon">*</span>
            </v-input>
            <span v-if="!$v.companyName.required">{{$t('register.error.require.companyName')}}</span>
          </v-tooltip>
          <v-tooltip :content-class="'cbt-tooltip right ' + ($v.companyStyle.$invalid && checking?'show':'hide')" right>
            <v-input slot="activator" :error="$v.companyStyle.$invalid && checking" :class="{'has-error': $v.companyStyle.$invalid && checking}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-briefcase">
              <input autocomplete="off" type="text" maxlength="250" v-model="companyStyle" :placeholder="$t('register.input.companyStyle')">
              <span class="require-icon">*</span>
            </v-input>
            <span v-if="!$v.companyStyle.required">{{$t('register.error.require.companyStyle')}}</span>
          </v-tooltip>
          <v-tooltip :content-class="'cbt-tooltip right ' + ($v.address.$invalid && checking?'show':'hide')" right>
            <v-input slot="activator" :error="$v.address.$invalid && checking" :class="{'has-error': $v.address.$invalid && checking}" solo class="cbt-textarea" prepend-icon="cbt-icon color-main icon-map-pin">
              <textarea autocomplete="off" type="text" maxlength="250" v-model="address" :placeholder="$t('register.input.address')"></textarea>
              <span class="require-icon">*</span>
            </v-input>
            <span v-if="!$v.address.required">{{$t('register.error.require.address')}}</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
    </form>
  </div>
  <div class="button-container">
    <v-btn :disabled="success" :loading="loading" @click.native="checkRegister" class="cbt-btn accent-main">
      <span v-if="!success">{{$t('register.button.register')}}</span>
      <span v-if="success">{{$t('register.success')}}</span>
    </v-btn>
  </div>
</div>
</template>

<script>
import {
  required,
  numeric,
  helpers,
  email
} from 'vuelidate/lib/validators';
import userService from '@/api/user.api';
import {
  LOGIN_AFTER_REGISTER
} from '@/store/action.type';
import REGEX_OPTIONS from '@/const/regex'

const password = helpers.regex('password', REGEX_OPTIONS.regex_pass);
const username = helpers.regex('username', /^(?=.{6,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?![_.])$/);
const phone = helpers.regex('phone', /^0[0-9]{9,12}$/);
export default {
  data() {
    return {
      fullname: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      checkpass: '',
      companyName: '',
      companyStyle: '',
      address: '',
      error: false,
      errorMessage: '',
      loading: false,
      checking: false,
      failed: false,
      success: false,
      existedUser: false,
      existedEmail: false
    };
  },
  validations: {
    fullname: {
      required
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      numeric,
      phone
    },
    username: {
      required,
      username
    },
    password: {
      required,
      password
    },
    checkpass: {
      required,
      password
    },
    companyName: {
      required
    },
    companyStyle: {
      required
    },
    address: {
      required
    }
  },
  methods: {
    checkRegister() {
      this.checking = true;
      this.fullname = this.fullname.trim();
      this.email = this.email.trim();
      this.phone = this.phone.trim();
      this.username = this.username.trim();
      this.companyName = this.companyName.trim();
      this.companyStyle = this.companyStyle.trim();
      this.address = this.address.trim();
      this.checkPass();
    },
    checkPass() {
      this.error = false;
      this.loading = true;
      this.errorMessage = '';
      this.failed = false;
      if (this.password === this.checkpass) {
        if (!this.$v.$invalid) {
          this.error = false;
          this.loading = false;
          this.errorMessage = '';
          this.register();
        } else {
          this.error = true;
          this.loading = false;
        }
      } else {
        this.error = true;
        this.loading = false;
        this.errorMessage = 'register.error.wrongPass';
      }
    },
    clear() {
      this.fullname = '';
      this.email = '';
      this.phone = '';
      this.username = '';
      this.password = '';
      this.checkpass = '';
      this.companyName = '';
      this.companyStyle = '';
      this.address = '';
      this.error = false;
      this.errorMessage = '';
      this.loading = false;
      this.checking = false;
      this.failed = false;
      this.success = false;
      this.existedUser = false;
      this.existedEmail = false;
    },
    registerDone() {
      this.$emit('registerDone', true);
    },
    preventNonNumericalInput(event) {
      event = event || window.event;
      let charCode = typeof event.which === 'undefined' ? event.keyCode : event.which;
      let charStr = String.fromCharCode(charCode);
      if (event.keyCode !== 9 && event.keyCode !== 8 && !charStr.match(/^[0-9]+$/)) event.preventDefault();
    },
    register() {
      this.existedUser = false;
      this.existedEmail = false;
      this.loading = true;
      userService
        .Register({
          name: this.fullname.trim(),
          email: this.email.trim(),
          phone: this.phone.trim(),
          username: this.username.trim(),
          password: this.password,
          company: this.companyName.trim(),
          bussinessArea: this.companyStyle.trim(),
          address: this.address.trim()
        })
        .then(({
          data
        }) => {
          this.$store.dispatch(LOGIN_AFTER_REGISTER, data).then(() => {
            this.loading = false;
            if (data.statusCode !== 0) {
              this.error = true;
              if (data.statusCode === 2) {
                this.existedUser = true;
              } else {
                this.existedEmail = true;
              }
              this.failed = true;
            } else {
              this.success = true;
              setTimeout(() => {
                this.clear();
                this.registerDone();
              }, 2000);
            }
          });
        })
        .catch(e => {
          this.error = true;
          this.failed = true;
          this.loading = false;
        });
    }
  },
  name: 'Register'
};
</script>
