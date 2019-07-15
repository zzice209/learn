<template>
<div>
  <div class="reset-container" v-if="forgotEdit">
    <div class="top-container">
      <button class="back-button icon-arrow-left" @click="backLogin"></button>
    </div>
    <div class="reset-content">
      <v-layout align-center>
        <v-flex>
          <div class="big-title">{{$t('reset.headTitle')}}</div>
          <div class="semi-title">{{$t('reset.title')}}</div>
        </v-flex>
      </v-layout>
      <v-form v-on:submit.prevent novalidate>
        <div class="reset-email-group">
          <v-input :error="error" :class="{'has-error': error}" solo class="cbt-input" prepend-icon="cbt-icon color-main icon-mail2">
            <input autocomplete="off" type="text" maxlength="250" v-model="emailEdit" :placeholder="$t('login.input.email')">
            </v-input>
            <v-input class="error-group" :error="error" :error-messages="$t(errorMessage)"></v-input>
            <div class="button-container">
              <v-btn :disabled="!input" type="submit" :loading="loading" @click.native="checkMail" class="cbt-btn accent-main">{{$t('login.button.send')}}</v-btn>
              <v-btn @click.native="backLogin" class="cbt-btn accent-semi">{{$t('login.button.cancel')}}</v-btn>
            </div>
        </div>
      </v-form>
    </div>
  </div>
  <div v-if="!forgotEdit">
    <success-form :email="emailEdit" type="resetPass" @backLogin="backLogin"></success-form>
  </div>
</div>
</template>

<script>
import userService from '@/api/user.api';
import SuccessForm from '@/components/login/form/SuccessForm.vue';
export default {
  components: {
    'success-form': SuccessForm
  },
  props: ['email', 'forgot'],
  data() {
    return {
      loading: false,
      emailEdit: '',
      forgotEdit: false,
      success: false,
      error: false,
      errorMessage: ''
    };
  },
  mounted() {
    this.emailEdit = this.email;
    this.forgotEdit = this.forgot;
  },
  created() {
    this.emailEdit = this.email;
    this.forgotEdit = this.forgot;
  },
  computed: {
    input() {
      if (this.emailEdit) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    backLogin() {
      this.loading = false;
      this.$emit('resetDone', true);
    },
    checkMail() {
      this.emailEdit = this.emailEdit.trim();
      this.error = !this.validEmail(this.emailEdit);
      this.loading = true;
      if (this.error) {
        this.loading = false;
        this.errorMessage = 'reset.error.invalidEmail';
      } else {
        this.errorMessage = '';
        userService
          .ForgotPassword({
            email: this.emailEdit
          })
          .then(({ data }) => {
            this.loading = false;
            if (data.status === 400) {
              this.error = true;
              this.errorMessage = 'reset.error.notHaveEmail';
            } else {
              this.forgotEdit = false;
            }
            this.loading = false;
          })
          .catch(e => {
            this.error = true;
            this.loading = false;
            this.errorMessage = 'reset.error.notHaveEmail';
          });
      }
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  name: 'Reset'
};
</script>
